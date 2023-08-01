import random

import math
from tileManager import tilesUploader 
import os
from flask import Flask, jsonify, request, send_file

app = Flask(__name__)


PATH_TO_TILE_ABS = f"C:/Users/ASCL/ascl-gcs/backend/tile-server/tile_server/data/tile/abs/"
PATH_TO_TILE_ABS_I = f"C:/Users/ASCL/ascl-gcs/backend/tile-server/tile_server/data/tile interpolated/abs/"

PATH_TO_TILE_SAT = f"C:/Users/ASCL/ascl-gcs/backend/tile-server/tile_server/data/tile/sat/"
PATH_TO_TILE_SAT_I = f"C:/Users/ASCL/ascl-gcs/backend/tile-server/tile_server/data/tile interpolated/sat/"

PATH_TO_TILE_DEM = f'C:/Users/ASCL/ascl-gcs/backend/tile-server/tile_server/data/tile/dem/'
PATH_TO_TILE_DEM_I = f'C:/Users/ASCL/ascl-gcs/backend/tile-server/tile_server/data/tile interpolated/dem/'

# Maperitive
MIN_ZOOM_ABS = 1
MAX_ZOOM_ABS = 18
MIN_X_ABS = {1:0, 2:0, 3:0, 4:0, 5:0, 6:52, 7:104, 8:209, 9:419, 10:862, 11:1725, \
        12:3450, 13:6901, 14:13802, 15:27605, 16:55211, 17:110422, 18:220845}
MAX_X_ABS = {1:1, 2:3, 3:7, 4:15, 5:31, 6:56, 7:113, 8:227, 9:455, 10:891, 11:1782, \
        12:3565, 13:7131, 14:14262, 15:28525, 16:57051, 17:114102, 18:228205}
MIN_Y_ABS = {1:0, 2:0, 3:0, 4:0, 5:0, 6:23, 7:46, 8:92, 9:184, 10:394, 11:789, \
        12:1579, 13:3158, 14:6317, 15:12635, 16:25270, 17:50540, 18:101080}
MAX_Y_ABS = {1:1, 2:3, 3:7, 4:15, 5:31, 6:26, 7:53, 8:106, 9:207, 10:407, 11:815, \
        12:1630, 13:3260, 14:6521, 15:13043, 16:26087, 17:52174, 18:103737}

# VWorld # Currently downloading 17 & 18 zoom tiles
MIN_ZOOM_SAT = 7
MAX_ZOOM_SAT = 18
MIN_X_SAT = {7:108, 8:217, 9:435, 10:870, 11:1740, \
        12:3481, 13:6963, 14:13926, 15:27852, 16:55705, 17:111411, 18:222822}
MAX_X_SAT = {7:110, 8:220, 9:440, 10:881, 11:1763, \
        12:3527, 13:7054, 14:14108, 15:28216, 16:56433, 17:112867, 18:222838}
MIN_Y_SAT = {7:49, 8:98, 9:197, 10:394, 11:789, \
        12:1579, 13:3159, 14:6319, 15:12639, 16:25279, 17:50558, 18:101116}
MAX_Y_SAT = {7:51, 8:102, 9:204, 10:409, 11:818, \
        12:1636, 13:3272, 14:6544, 15:13089, 16:26179, 17:52359, 18:104718}

# SRTM # Currently working on 17++ zoom tiles
MIN_ZOOM_DEM = 1
MAX_ZOOM_DEM = 16
MIN_X_DEM = {1:1, 2:3, 3:6, 4:13, 5:27, 6:54, 7:108, 8:217, 9:435, 10:870, 11:1740, \
        12:3481, 13:6963, 14:13926, 15:27852, 16:55705, 17:111411}
MAX_X_DEM = {1:1, 2:3, 3:6, 4:13, 5:27, 6:54, 7:110, 8:220, 9:440, 10:881, 11:1763, \
        12:3527, 13:7054, 14:14108, 15:28216, 16:56433, 17:111515}
MIN_Y_DEM = {1:0, 2:1, 3:3, 4:6, 5:12, 6:24, 7:49, 8:98, 9:197, 10:394, 11:789, \
        12:1579, 13:3159, 14:6319, 15:12639, 16:25279, 17:50558}
MAX_Y_DEM = {1:0, 2:1, 3:3, 4:6, 5:12, 6:25, 7:51, 8:102, 9:204, 10:409, 11:818, \
        12:1636, 13:3272, 14:6544, 15:13089, 16:26179, 17:52359}

MIN_ZOOM = {"ABS":MIN_ZOOM_ABS, "SAT":MIN_ZOOM_SAT, "DEM":MIN_ZOOM_DEM}
MAX_ZOOM = {"ABS":MAX_ZOOM_ABS, "SAT":MAX_ZOOM_SAT, "DEM":MAX_ZOOM_DEM}
MIN_X = {"ABS":MIN_X_ABS, "SAT":MIN_X_SAT, "DEM":MIN_X_DEM}
MAX_Y = {"ABS":MAX_Y_ABS, "SAT":MAX_Y_SAT, "DEM":MAX_Y_DEM}
MAX_X = {"ABS":MAX_X_ABS, "SAT":MAX_X_SAT, "DEM":MAX_X_DEM}
MIN_Y = {"ABS":MIN_Y_ABS, "SAT":MIN_Y_SAT, "DEM":MIN_Y_DEM}

# init class
objTileABS = tilesUploader(PATH_TO_TILE_ABS, PATH_TO_TILE_ABS_I, minZoom = MIN_ZOOM['ABS'], maxZoom = MAX_ZOOM['ABS'])
objTileSAT = tilesUploader(PATH_TO_TILE_SAT, PATH_TO_TILE_SAT_I, minZoom = MIN_ZOOM['SAT'], maxZoom = MAX_ZOOM['SAT'])
objTileDEM = tilesUploader(PATH_TO_TILE_DEM, PATH_TO_TILE_DEM_I, minZoom = MIN_ZOOM['DEM'], maxZoom = MAX_ZOOM['DEM'])


def deg2num(lat_deg, lon_deg, zoom):
  lat_rad = math.radians(lat_deg)
  n = 2.0 ** zoom
  xtile = int((lon_deg + 180.0) / 360.0 * n)
  ytile = int((1.0 - math.asinh(math.tan(lat_rad)) / math.pi) / 2.0 * n)
  return (xtile, ytile)

def dummy_tilename():
    return f"/8/217/98.png"
    # return f"default/{random.randint(1,2)}.png"

# def filter_tile_query(zoom:int, x:int, y:int, tile_type:str):
#     tile_type = tile_type.upper()
#     if zoom > MAX_ZOOM[tile_type] or zoom < MIN_ZOOM[tile_type]:
#         filename = dummy_tilename()
#     else:
#         if x > MAX_X[tile_type][zoom] or x < MIN_X[tile_type][zoom] or y > MAX_Y[tile_type][zoom] or y < MIN_Y[tile_type][zoom]:
#             filename = dummy_tilename()
#         else:
#             filename = f"{zoom}/{x}/{y}.png"
#     return filename

def filter_tile_query(zoom:int, x:int, y:int, objTile:tilesUploader, PATH_TO_TILE:str, PATH_TO_TILE_I:str, tile_type:str):
    print('zoom', zoom, 'x', x, 'y', y, 'tile_type', tile_type, ' MIN_ZOOM[tile_type]:', MIN_ZOOM[tile_type],' MAX_ZOOM[tile_type]:', MAX_ZOOM[tile_type])
    tile_type = tile_type.upper()
    loopIn = -1
    image_path_i = f"no_inpol"

    if zoom > MAX_ZOOM[tile_type]:
        outOfBound, loopIn, image_path_i = objTile.tile(zoom, x, y)  

    if os.path.isfile(PATH_TO_TILE + f"{zoom}/{x}/{y}.png"):
        filename = PATH_TO_TILE + f"{zoom}/{x}/{y}.png"
    elif os.path.isfile(PATH_TO_TILE_I + f"{zoom}/{x}/{y}.png"):
        filename = PATH_TO_TILE_I + f"{zoom}/{x}/{y}.png"
    else:
        filename = (PATH_TO_TILE + dummy_tilename())    
    print('1).', 'loopIn', loopIn, 'image_path_i', image_path_i,'\n')

    return filename

@app.route("/")
def home():
    # output = BytesIO()
    # return base64.b64encode(output.getvalue()).decode('utf-8')
    z = 14
    x = 14038   
    y = 6429
    
    z = 15
    x = 28120
    y = 12971
    # /tile/abs/13/6990/3165.png
#     return get_dem_tile(z, x, y)
    return "Hello, ASCL"

@app.route("/tile/abs/<int:zoom>/<int:x>/<int:y>.png")
def get_abs_tile(zoom=13,x=None,y=None):
    return send_file(filter_tile_query(zoom,x,y,objTileABS,PATH_TO_TILE_ABS,PATH_TO_TILE_ABS_I,"ABS"), mimetype='image/png')

@app.route("/tile/sat/<int:zoom>/<int:x>/<int:y>.png")
def get_sat_tile(zoom=13,x=None,y=None):
    return send_file(filter_tile_query(zoom,x,y,objTileSAT,PATH_TO_TILE_SAT,PATH_TO_TILE_SAT_I,"SAT"), mimetype='image/png')

@app.route("/tile/dem/<int:zoom>/<int:x>/<int:y>.png")
def get_dem_tile(zoom=13,x=None,y=None):
    return send_file(filter_tile_query(zoom,x,y,objTileDEM,PATH_TO_TILE_DEM,PATH_TO_TILE_DEM_I,"DEM"), mimetype='image/png')

@app.route("/tile/<float:lat>/<float:lon>/<int:zoom>")
def get_image_ll(lat=None,lon=None,zoom=13):
    if (zoom > 18 or zoom < 1) or (lat is None or lon is None) or (lat > 37 or lat < 35) or (lon > 129 or lon < 127):
        filename = dummy_tilename()
    else:
        x,y = deg2num(lat,lon,zoom)
        filename = f"{zoom}/{x}/{y}.png"
    return send_file(PATH_TO_TILE_ABS + filename, mimetype='image/png')

if __name__=="__main__":
    app.run(host='0.0.0.0', port=3722)