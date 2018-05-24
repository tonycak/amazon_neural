//////////////////////////////////////////////////////////////////////////////////////////
// STUDY LOCATION EXAMPLE
var altamira = ee.Geometry.Polygon(
	[[
		[-52.89, -3.00],
		[-52.89, -3.75],
		[-52.14, -3.75],
		[-52.14, -3.00]
	]]
);

var region = altamira;
//////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////
// DATE
var start_date = '2017-01-01';
var end_date = '2017-12-31';
//////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////
// BANDS

// https://landsat.usgs.gov/what-are-band-designations-landsat-satellites
// *bands to be used here

// Landsat 4-5:
// Band 1* - Blue, 0.45-0.52 micrometers, 30 m resolution
// Band 2* - Green, 0.52-0.60 micrometers, 30 m resolution
// Band 3* - Red, 0.63-0.69 micrometers, 30 m resolution
// Band 4* - Near Infrared (NIR), 0.76-0.90 micrometers, 30 m resolution
// Band 5* - Shortwave Infrared (SWIR) 1, 1.55-1.75 micrometers, 30 m resolution
// Band 6* - Thermal, 10.40-12.50 micrometers, 120* (30) m resolution
// Band 7* - Shortwave Infrared (SWIR) 2, 2.08-2.35 micrometers, 30 m resolution

// Landsat 7:
// Band 1* - Blue, 0.45-0.52 micrometers, 30 m resolution
// Band 2* - Green, 0.52-0.60 micrometers, 30 m resolution
// Band 3* - Red, 0.63-0.69 micrometers, 30 m resolution
// Band 4* - Near Infrared (NIR), 0.77-0.90 micrometers, 30 m resolution
// Band 5* - Shortwave Infrared (SWIR) 1, 1.55-1.75 micrometers, 30 m resolution
// Band 6* - Thermal, 10.40-12.50 micrometers, 60 * (30) m resolution
// Band 7* - Shortwave Infrared (SWIR) 2, 2.09-2.35 micrometers, 30 m resolution
// Band 8 - Panchromatic, .52-.90 micrometers, 15 m resolution

// Landsat 8:
// Band 1* - Ultra Blue (coastal/aerosol), 0.435 - 0.451 micrometers, 30 m resolution
// Band 2* - Blue, 0.452 - 0.512 micrometers, 30 m resolution
// Band 3* - Green, 0.533 - 0.590 micrometers, 30 m resolution
// Band 4* - Red, 0.636 - 0.673 micrometers, 30 m resolution
// Band 5* - Near Infrared (NIR), 0.851 - 0.879 micrometers, 30 m resolution
// Band 6* - Shortwave Infrared (SWIR) 1, 1.566 - 1.651 micrometers, 30 m resolution
// Band 7* - Shortwave Infrared (SWIR) 2, 2.107 - 2.294 micrometers, 30 m resolution
// Band 8 - Panchromatic, 0.503 - 0.676 micrometers, 15 m resolution
// Band 9 - Cirrus, 1.363 - 1.384 micrometers, 30 m resolution
// Band 10* - Thermal Infrared (TIRS) 1, 10.60 - 11.19 micrometers, 100 * (30) m resolution
// Band 11 - Thermal Infrared (TIRS) 2, 11.50 - 12.51 micrometers, 100 * (30) m resolution
//////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////
// CALCULATED INDICES:
// https://landsat.usgs.gov/sites/default/files/documents/si_product_guide.pdf

// Normalized Difference Vegetation Index (NDVI): 
// Landsat 4-7: (Band 4 – Band 3) / (Band 4 + Band 3)
// Landsat 8: (Band 5 – Band 4) / (Band 5 + Band 4)
var addNDVI5 = function(image) {
	return image.addBands(image.normalizedDifference(['B4', 'B3']).rename('NDVI'));
};

var addNDVI8 = function(image) {
	return image.addBands(image.normalizedDifference(['B5', 'B4']).rename('NDVI'));
};


// Enhanced Vegetation Index (EVI)
// Landsat 4-7: 2.5 * ((Band 4 – Band 3) / (Band 4 + 6 * Band 3 – 7.5 * Band 1 + 1))
// Landsat 8: 2.5 * ((Band 5 – Band 4) / (Band 5 + 6 * Band 4 – 7.5 * Band 2 + 1))
var addEVI5 = function(image) {
	return image.addBands(image.expression('2.5*((B4-B3)/(B4+6*B3-7.5*B1+1))', {
		'B1': image.select('B1'), 
		'B3': image.select('B3'), 
		'B4': image.select('B4')
}).rename('EVI')
)};

var addEVI8 = function(image) {
	return image.addBands(image.expression('2.5*((B5-B4)/(B5+6*B4-7.5*B2+1))', {
		'B2': image.select('B2'), 
		'B4': image.select('B4'), 
		'B5': image.select('B5')
}).rename('EVI')
)};


// Soil Adjusted Vegetation Index (SAVI)
// Landsat 4-7: ((Band 4 – Band 3) / (Band 4 + Band 3 + 0.5)) * (1.5)
// Landsat 8: ((Band 5 – Band 4) / (Band 5 + Band 4 + 0.5)) * (1.5)
var addSAVI5 = function(image) {
	return image.addBands(image.expression('((B4-B3)/(B4+B3+0.5))*1.5', {
		'B3': image.select('B3'), 
		'B4': image.select('B4')
}).rename('SAVI')
)};

var addSAVI8 = function(image) {
	return image.addBands(image.expression('((B5-B4)/(B5+B4+0.5))*1.5', {
		'B4': image.select('B4'), 
		'B5': image.select('B5')
}).rename('SAVI')
)};


// Modified Soil Adjusted Vegetation Index (MSAVI)
// Landsat 4-7: (2 * Band 4 + 1 – sqrt ((2 * Band 4 + 1)^2 – 8 * (Band 4 – Band 3))) / 2
// Landsat 8: (2 * Band 5 + 1 – sqrt ((2 * Band 5 + 1)^2 – 8 * (Band 5 – Band 4))) / 2
var addMSAVI5 = function(image) {
	return image.addBands(image.expression('(2*B4+1-sqrt((2*B4+1)**2-8*(B4-B3)))/2', {
		'B3': image.select('B3'), 
		'B4': image.select('B4')
}).rename('MSAVI')
)};

var addMSAVI8 = function(image) {
	return image.addBands(image.expression('(2*B5+1-sqrt((2*B5+1)**2-8*(B5-B4)))/2', {
		'B4': image.select('B4'), 
		'B5': image.select('B5')
}).rename('MSAVI')
)};


// Normalized Difference Moisture Index (NDMI)
// Landsat 4-7: (Band 4 – Band 5) / (Band 4 + Band 5)
// Landsat 8: (Band 5 – Band 6) / (Band 5 + Band 6)
var addNDMI5 = function(image) {
	return image.addBands(image.normalizedDifference(['B4', 'B5']).rename('NDMI'));
};

var addNDMI8 = function(image) {
	return image.addBands(image.normalizedDifference(['B5', 'B6']).rename('NDMI'));
};


// Normalized Burn Ratio (NBR)
// Landsat 4-7: (Band 4 – Band 7) / (Band 4 + Band 7)
// Landsat 8: (Band 5 – Band 7) / (Band 5 + Band 7)
var addNBR5 = function(image) {
	return image.addBands(image.normalizedDifference(['B4', 'B7']).rename('NBR'));
};

var addNBR8 = function(image) {
	return image.addBands(image.normalizedDifference(['B5', 'B7']).rename('NBR'));
};


// Normalized Burn Ratio 2 (NBR2)
// Landsat 4-7: (Band 5 – Band 7) / (Band 5 + Band 7)
// Landsat 8: (Band 6 – Band 7) / (Band 6 + Band 7)
var addNBR25 = function(image) {
	return image.addBands(image.normalizedDifference(['B5', 'B7']).rename('NBR2'));
};

var addNBR28 = function(image) {
	return image.addBands(image.normalizedDifference(['B6', 'B7']).rename('NBR2'));
};


// Normalized Difference Water Index (NDWI)
// Landsat 4-7: (Band 2 – Band 4) / (Band 2 + Band 4)
// Landsat 8: (Band 3 – Band 5) / (Band 3 + Band 5)
var addNDWI5 = function(image) {
	return image.addBands(image.normalizedDifference(['B2', 'B4']).rename('NDWI'));
};

var addNDWI8 = function(image) {
	return image.addBands(image.normalizedDifference(['B3', 'B5']).rename('NDWI'));
};
//////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////
// Landsat cloud mask for TOA images; currently set at 30%.
var cloudMask = function(image) {
	var clouds = ee.Algorithms.Landsat.simpleCloudScore(image).select(['cloud']);
	return image.updateMask(clouds.lte(30));
};
//////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////
// This is a function for making a band with the QA bits (to be used for cloud masking surface reflectance images)
// Code taken from https://gis.stackexchange.com/questions/271322/cloud-mask-in-surface-reflectance-landsat-8-test
var getQABits = function(image, start, end, newName) {
    // Compute the bits we need to extract.
    var pattern = 0;
    for (var i = start; i <= end; i++) {
       pattern += Math.pow(2, i);
    }
    // Return a single band image of the extracted QA bits, giving the band
    // a new name.
    return image.select([0], [newName])
                  .bitwiseAnd(pattern)
                  .rightShift(start);
};

// A function to mask out cloudy pixels.
var cloud_shadows = function(image) {
  // Select the QA band.
  var QA = image.select(['pixel_qa']);
  // Get the internal_cloud_algorithm_flag bit.
  return getQABits(QA, 3,3, 'Cloud_shadows').eq(0);
  // Return an image masking out cloudy areas.
};

// A function to mask out cloudy pixels.
var clouds = function(image) {
  // Select the QA band.
  var QA = image.select(['pixel_qa']);
  // Get the internal_cloud_algorithm_flag bit.
  return getQABits(QA, 5,5, 'Cloud').eq(0);
  // Return an image masking out cloudy areas.
};

var maskClouds = function(image) {
  var cs = cloud_shadows(image);
  var c = clouds(image);
  image = image.updateMask(cs);
  return image.updateMask(c);
};
//////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////
// LANDSAT IMAGE COLLECTION

// TOA collection
var l5toa = ee.ImageCollection('LANDSAT/LC05/C01/T1_TOA')
	.filterBounds(region)
	.filterDate(start_date, end_date)
	.map(addNDVI5)
	.map(addEVI5)
	.map(addSAVI5)
	.map(addMSAVI5)
	.map(addNDMI5)
	.map(addNBR5)
	.map(addNBR25)
	.map(addNDWI5)
	.map(cloudMask);

var l5toa_sel = l5toa.select('B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'NDVI', 'EVI', 'SAVI', 'MSAVI', 'NDMI', 'NBR', 'NBR2', 'NDWI');


var l7toa = ee.ImageCollection('LANDSAT/LC05/C01/T1_RT_TOA')
	.filterBounds(region)
	.filterDate(start_date, end_date)
	.map(addNDVI5)
	.map(addEVI5)
	.map(addSAVI5)
	.map(addMSAVI5)
	.map(addNDMI5)
	.map(addNBR5)
	.map(addNBR25)
	.map(addNDWI5)
	.map(cloudMask);

var l7toa_sel = l5toa.select('B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'NDVI', 'EVI', 'SAVI', 'MSAVI', 'NDMI', 'NBR', 'NBR2', 'NDWI');


var l8toa = ee.ImageCollection('LANDSAT/LC08/C01/T1_RT_TOA')
	.filterBounds(region)
	.filterDate(start_date, end_date)
	.map(addNDVI8)
	.map(addEVI8)
	.map(addSAVI8)
	.map(addMSAVI8)
	.map(addNDMI8)
	.map(addNBR8)
	.map(addNBR28)
	.map(addNDWI8)
	.map(cloudMask);

var l8toa_sel = l8toa.select('B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B10', 'NDVI', 'EVI', 'SAVI', 'MSAVI', 'NDMI', 'NBR', 'NBR2', 'NDWI');


// SR collection
var l5sr = ee.ImageCollection('LANDSAT/LC05/C01/T2_SR')
	.filterBounds(region)
	.filterDate(start_date, end_date)
	.map(addNDVI5)
	.map(addEVI5)
	.map(addSAVI5)
	.map(addMSAVI5)
	.map(addNDMI5)
	.map(addNBR5)
	.map(addNBR25)
	.map(addNDWI5)
	.map(maskClouds);

var l5sr_sel = l5sr.select('B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'NDVI', 'EVI', 'SAVI', 'MSAVI', 'NDMI', 'NBR', 'NBR2', 'NDWI');


var l7sr = ee.ImageCollection('LANDSAT/LC07/C01/T2_SR')
	.filterBounds(region)
	.filterDate(start_date, end_date)
	.map(addNDVI5)
	.map(addEVI5)
	.map(addSAVI5)
	.map(addMSAVI5)
	.map(addNDMI5)
	.map(addNBR5)
	.map(addNBR25)
	.map(addNDWI5)
	.map(maskClouds);

var l7sr_sel = l7sr.select('B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'NDVI', 'EVI', 'SAVI', 'MSAVI', 'NDMI', 'NBR', 'NBR2', 'NDWI');


var l8sr = ee.ImageCollection('LANDSAT/LC08/C01/T2_SR')
	.filterBounds(region)
	.filterDate(start_date, end_date)
	.map(addNDVI8)
	.map(addEVI8)
	.map(addSAVI8)
	.map(addMSAVI8)
	.map(addNDMI8)
	.map(addNBR8)
	.map(addNBR28)
	.map(addNDWI8)
	.map(maskClouds);

var l8sr_sel = l8sr.select('B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B10', 'NDVI', 'EVI', 'SAVI', 'MSAVI', 'NDMI', 'NBR', 'NBR2', 'NDWI');
//////////////////////////////////////////////////////////////////////////////////////////


// Visualization test
var med = l8sr_sel.median();

var visParams8sr = {bands: ['B4', 'B3', 'B2'],min: [0,0,0],max: [3400, 2800, 1900]};
Map.addLayer(med, visParams8sr, 'landsat 8 sr median');
