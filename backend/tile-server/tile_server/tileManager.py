import math
# import PIL.Image
from PIL import Image
import os
import time
import numpy as np

class tilesUploader:
    def __init__(self, database_directory: str, output_directory: str, minZoom=None, maxZoom=None):
        minZoom_temp, maxZoom_temp = self.findMinMaxZoom(database_directory)
        if minZoom == None:
            self.minZoom = minZoom_temp
        else:
            self.minZoom = minZoom
        if maxZoom == None:
            self.maxZoom = maxZoom_temp
        else:
            self.maxZoom = maxZoom
            
        # self.maxZoom = maxZoom
        # self.minZoom = minZoom
        self.database_directory = database_directory
        self.output_directory = output_directory
        self.wait_time = 0.01

    def findMinMaxZoom(self, database_directory: str):
        # check and save all sets of z,x,y tiles in the directory to the list
        print('check list of tiles in the directory...',
            os.listdir(database_directory))
        tile_Z_list = sorted([int(x) for x in list(
            os.listdir(database_directory)) if x.isdigit()])
        print('tile_Z_list:', tile_Z_list)

        # store the max zoom level in the directory
        maxZoom = tile_Z_list[-1]
        minZoom = tile_Z_list[0]
        print('minZoom', minZoom, 'maxZoom:', maxZoom)
        return minZoom, maxZoom

    def deg2num(self, lat_deg, lon_deg, zoom):
        lat_rad = math.radians(lat_deg)
        n = 1 << zoom
        xtile = int((lon_deg + 180.0) / 360.0 * n)
        ytile = int((1.0 - math.asinh(math.tan(lat_rad)) / math.pi) / 2.0 * n)
        return xtile, ytile

    def num2deg(self, xtile, ytile, zoom):
        n = 1 << zoom
        lon_deg = xtile / n * 360.0 - 180.0
        lat_rad = math.atan(math.sinh(math.pi * (1 - 2 * ytile / n)))
        lat_deg = math.degrees(lat_rad)
        return lat_deg, lon_deg

    def containing_tile_at_lower_zoom(self, zoom_level, xtile, ytile, target_zoom):
        if zoom_level <= 0 or target_zoom >= zoom_level:
            raise ValueError(
                "Zoom levels must be greater than 0, and the target zoom level must be lower than the current zoom level.",'\n'
                ,'zoomLevel:', zoom_level, 'targetZoom:', target_zoom, 'xtile:', xtile, 'ytile:', ytile, '\n')
        zoom_diff = zoom_level - target_zoom
        new_x = xtile >> zoom_diff
        new_y = ytile >> zoom_diff
        return new_x, new_y, target_zoom, zoom_diff

    def split_and_upscale(self, xExtractIn, yExtractIn, zExtractIn, upscale_order, zoomSplit):
        # find the containing tile at the lower zoom level
        # xExtractIn, yExtractIn, upscale_order = self.containing_tile_at_lower_zoom(
        #     zoom, xtile, ytile, zExtractIn)
        print('xExtractIn:', xExtractIn, 'yExtractIn:', yExtractIn,
            'targetZoom:', zExtractIn, 'zoom:', zoomSplit, 'upscale_order:', upscale_order, '\n')
        split_images = []
        split_tiles = []
        original_image = []
        upscaled_image = []
        upscaled_images = []

        nSideLength = 2**upscale_order  # number of image to split
        # path of image to split
        image_path = os.path.join(
            self.database_directory, f'{zExtractIn}/{xExtractIn}/{yExtractIn}.png')  # image to split
        # print('image_path:', image_path, '\n')
        # print('database_directory', database_directory, '\n')
        # print('output_directory', output_directory, '\n')
        # path of image to split
        image_path_d = os.path.join(
            self.database_directory, f'{zExtractIn}/{xExtractIn}/{yExtractIn}.png')  # image to split
        image_path_i = os.path.join(
            self.output_directory, f'{zExtractIn}/{xExtractIn}/{yExtractIn}.png')  # image to split
        
        if os.path.exists(image_path_d):
            image_path = image_path_d
        elif os.path.exists(image_path_i):
            image_path = image_path_i
        else:
            print(f"Error: The image {image_path} does not exist.")
            return
        # Open the original image
        original_image = Image.open(image_path)

        # Get the dimensions of the original image
        width, height = original_image.size

        # Check if the image is 256x256
        if width != 256 or height != 256:
            print("Error: The input image must be 256x256 in size.")
            return

        # Split the image into 4^upscale_order equal parts (2x2)^upscale_order
        pixLength = int(256/nSideLength)
        lenSplit = int(nSideLength)
        # print('nSplitImage:', nSideLength, 'pixLength:',
        #       pixLength, 'lenSplit', lenSplit, '\n')
        for i in range(lenSplit):
            for j in range(lenSplit):
                # crop image and resize to 256x256
                left = i * pixLength
                upper = j * pixLength
                right = left + pixLength
                lower = upper + pixLength
                upscaled_image = original_image.crop((left, upper, right, lower))
                upscaled_images = upscaled_image.resize((256, 256), Image.LINEAR)
                # calculate xtile and ytile of split image
                xSplit = xExtractIn * (2**upscale_order) + i
                ySplit = yExtractIn * (2**upscale_order) + j
                # split_tiles((xSplit, ySplit))
                # define output directory for each split image
                output_directory_x = os.path.join(
                    self.output_directory, f"{zoomSplit}/{xSplit}/")  # {split_tiles[i][1]}.png
                # check if output directory exists
                os.makedirs(output_directory_x, exist_ok=True)
                # create path to save split image
                save_directory_y = os.path.join(
                    output_directory_x, f"{ySplit}.png")
                if os.path.exists(save_directory_y) == False:
                    print(f"File {save_directory_y} exists xExtract: {xExtractIn} yExtract:  {yExtractIn} targetZoom: {zExtractIn} upscale_order: {upscale_order}")
                    print(f"xSplit: {xSplit} ySplit: {ySplit} zoom: {zoomSplit} targetZoom: {zExtractIn}\n")
                    upscaled_images.save(save_directory_y)
                # else:
                        # time.sleep(1)
        return yExtractIn, xExtractIn, upscale_order


    def tile(self, zoom: int, xtile: int, ytile: int):
        image_path = self.database_directory + \
            '%s/%s/%s.png' % (zoom, xtile, ytile)
        image_path_i = self.output_directory + \
            '%s/%s/%s.png' % (zoom, xtile, ytile)
        xExtractIn = 0
        yExtractIn = 0
        upscale_order = 0
        image = []
        nSplit = 0
        outOfBound = True
        loopIn = 0
        # File found in the first directory, open it
        if os.path.exists(image_path):
            loopIn = 1
            outOfBound = False
            with open(image_path, 'rb') as file:
                image = file.read()
            # Process the content as needed
        # File found in the second directory, open it
        elif os.path.exists(image_path_i):
            loopIn = 2
            outOfBound = False
            with open(image_path_i, 'rb') as file_i:
                image = file_i.read()
                # Process the content as needed
        # interpolate from lower zoom level, save and read
        else:
            loopIn = 3
            if zoom <= 19 and zoom > self.maxZoom:
                loopIn = 4
                for zoomExtract in range(self.maxZoom, self.minZoom, -1):
                    loopBreak = False
                    upScaleOrder = zoom - zoomExtract
                    print('upScaleOrder:', upScaleOrder)
                    if upScaleOrder > 0:
                        xExtracts = np.array([xtile])
                        yExtracts = np.array([ytile])
                        zExtracts = np.array([zoom])
                        print('xExtract:', xExtracts, 'yExtract:', yExtracts, 'zExtract:', zExtracts)
                        for i in range(upScaleOrder): 
                            print('i',i,'zExtracts',zExtracts,'zExtracts[i]', zExtracts[i])
                            xExtracts_temp, yExtracts_temp, zExtracts_temp, _ = self.containing_tile_at_lower_zoom(zExtracts[i], xExtracts[i], yExtracts[i], zExtracts[i] - 1)
                            xExtracts, yExtracts, zExtracts = np.append(xExtracts,xExtracts_temp), np.append(yExtracts,yExtracts_temp), np.append(zExtracts,zExtracts_temp)
                            print('xExtract:',xExtracts,'yExtract:',yExtracts,'zExtract:',zExtracts)
                            find_image_path = self.database_directory + '%s/%s/%s.png' % (zExtracts[i+1], xExtracts[i+1], yExtracts[i+1])
                            print('find_image_path:',find_image_path)
                            if os.path.exists(find_image_path):
                                nSplit = i + 1
                                loopBreak = True
                                outOfBound = False
                                break
                            else:
                                outOfBound = True
                        if loopBreak == True:
                            break
                print('nSplit:', nSplit, 'upScaleOrder:', upScaleOrder, 'xExtract:',xExtracts,' yExtract:',yExtracts,' zExtract:',zExtracts)                    
                if nSplit != 0:
                    for nS in range(nSplit,0,-1):
                        print('nS',nS)
                        self.split_and_upscale(xExtracts[nS], yExtracts[nS], zExtracts[nS], 1, zExtracts[nS - 1]) # create split tiles iteratively
                    # with open(image_path_i, 'rb') as file_i:
                    #     image = file_i.read()
        return outOfBound, loopIn, image_path_i



if __name__ == "__main__":

    print('__name__: ', __name__)
    database_directory = './tilefile_dted/'
    output_directory = './tilefile_dted_i/'
    # check and save all sets of z,x,y tiles in the directory to the list
    print('check list of tiles in the directory...',
          os.listdir(database_directory))
    tile_Z_list = sorted([int(x) for x in list(
        os.listdir(database_directory)) if x.isdigit()])
    print('tile_Z_list:', tile_Z_list)
    maxZoom = tile_Z_list[-1]

    z = 15
    x = 27892
    y = 12676

    z = 14
    x = 14038
    y = 6429
    

    obj1 = tilesUploader(database_directory, output_directory)

    lat, lon = obj1.num2deg(x, y, z)
    xtile, ytile = obj1.deg2num(lat, lon, z)
    xtileCont, ytileCont, zTileCont, upScaleOrder = obj1.containing_tile_at_lower_zoom(z, xtile, ytile, 13)
    print('\nlat:', lat, 'lon:', lon)
    print('xtile:', xtile, 'ytile:', ytile)
    print('Zoom Level:', 13, 'xTileCont:', xtileCont, 'yTileCont:', ytileCont, 'upScaleOrder', upScaleOrder, '\n')
    image = obj1.tile(z, xtile, ytile)

    # Example usage:
    # _, split_tiles = split_and_upscale(
    #     z, x, y, maxZoom, database_directory, output_directory)
