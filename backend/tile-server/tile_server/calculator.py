import math

def deg2num(lat_deg, lon_deg, zoom):
	lat_rad = math.radians(lat_deg)
	n = 2.0 ** zoom
	xtile = int((lon_deg + 180.0) / 360.0 * n)
	ytile = int((1.0 - math.asinh(math.tan(lat_rad)) / math.pi) / 2.0 * n)
	return (xtile, ytile)

def num2deg(xtile, ytile, zoom):
	n = 1 << zoom
	lon_deg = xtile / n * 360.0 - 180.0
	lat_rad = math.atan(math.sinh(math.pi * (1 - 2 * ytile / n)))
	lat_deg = math.degrees(lat_rad)
	return lat_deg, lon_deg

if __name__=="__main__":
    lat1, lon1 = num2deg(6963,3159,13)
    lat2, lon2 = num2deg(6963,3160,13)
    # lat1, lon1 = num2deg(55705,25279,16)
    # lat2, lon2 = num2deg(55705,25280,16)
    # lat1, lon1 = num2deg(111411,50558,17)
    # lat2, lon2 = num2deg(111411,50559,17)
    # lat1, lon1 = num2deg(222822,101116,18)
    # lat2, lon2 = num2deg(222822,101117,18)
    dlat2m = math.pi/180*6378137/256
    print((lat1-lat2)*dlat2m)