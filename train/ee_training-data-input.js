// VECTOR


//////////////////////////////////////////////////////////////////////////////////////////
// Imazon deforestation/degradation
// Date: 2008-2017
// http://www.imazongeo.org.br/doc/downloads.php; https://infoamazonia.org/en/datasets/deforestation-imazon-sad/
// [notes TBD]
//////////////////////////////////////////////////////////////////////////////////////////


// PRODES/INPE deforestation; 2000-2016
// OSM
// ag stats data





// RASTER


//////////////////////////////////////////////////////////////////////////////////////////
// Amazonia Socioambiental: 2000-2015
// Date: 2000-2015 (5 year increments)
// https://www.amazoniasocioambiental.org/es/mapas/#descargas; https://www3.socioambiental.org/geo/RAISGMapaOnline/
// [downloaded but not used here]
//////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////
// CIESIN Global Man-made Impervious Surface & Settlement Extent from Landsat
// Date: 2010
// http://sedac.ciesin.columbia.edu/data/set/ulandsat-gmis-v1
var gmis_hbase = ee.ImageCollection('users/tonycak/ciesin_gmis_hbase_amazon');

// This is the global man-made impervious surface dataset for the amazon.
var gmis = ee.Image("users/tonycak/ciesin_gmis_hbase_amazon/gmis");

Map.addLayer(gmis);


// This is the global man-made impervious surface dataset standard error for the amazon.
var gmis_stderror = ee.Image("users/tonycak/ciesin_gmis_hbase_amazon/gmis_stderror");

Map.addLayer(gmis_stderror);


// This is the global settlement extent for the amazon.
var gmis_stderror = ee.Image("users/tonycak/ciesin_gmis_hbase_amazon/hbase");

Map.addLayer(hbase);


// This is the global settlement extent probability for the amazon.
var gmis_stderror = ee.Image("users/tonycak/ciesin_gmis_hbase_amazon/hbase_probability");

Map.addLayer(hbase_probability);
//////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////
// CIESIN GPWv4: Gridded Population of the World Version 4, Population Density
// Dates: 2000-2020 (for the years 2000, 2005, 2010, 2015, and 2020)
// https://explorer.earthengine.google.com/#detail/CIESIN%2FGPWv4%2Fpopulation-density
var gpw_pop2000 = ee.ImageCollection('CIESIN/GPWv4/population-density')
	.filterDate('2000-01-01', '2000-12-31')
	.select('population-density');

var sld_intervals =
  '<RasterSymbolizer>' +
    '<ColorMap  type="intervals" extended="false" >' +
      '<ColorMapEntry color="#ffffff" quantity="0" label="0"/>' +    
      '<ColorMapEntry color="#F4C2C2" quantity="1" label="less 1"/>' +
      '<ColorMapEntry color="#CD5C5C" quantity="5" label="1-5" />' +
      '<ColorMapEntry color="#D73B3E" quantity="25" label="5-25" />' +
      '<ColorMapEntry color="#CC0000" quantity="250" label="25-250" />' +
      '<ColorMapEntry color="#701C1C" quantity="1000" label="250-1000" />' +
      '<ColorMapEntry color="#ffff00" quantity="10000" label="1000+" />' +
    '</ColorMap>' +
  '</RasterSymbolizer>';

var gpw_med2000 = gpw_pop2000.median();

Map.addLayer(gpw_med2000.sldStyle(sld_intervals), {}, '2000');


var gpw_pop2005 = ee.ImageCollection('CIESIN/GPWv4/population-density')
	.filterDate('2005-01-01', '2005-12-31')
	.select('population-density');

var sld_intervals =
  '<RasterSymbolizer>' +
    '<ColorMap  type="intervals" extended="false" >' +
      '<ColorMapEntry color="#ffffff" quantity="0" label="0"/>' +    
      '<ColorMapEntry color="#F4C2C2" quantity="1" label="less 1"/>' +
      '<ColorMapEntry color="#CD5C5C" quantity="5" label="1-5" />' +
      '<ColorMapEntry color="#D73B3E" quantity="25" label="5-25" />' +
      '<ColorMapEntry color="#CC0000" quantity="250" label="25-250" />' +
      '<ColorMapEntry color="#701C1C" quantity="1000" label="250-1000" />' +
      '<ColorMapEntry color="#ffff00" quantity="10000" label="1000+" />' +
    '</ColorMap>' +
  '</RasterSymbolizer>';

var gpw_med2005 = gpw_pop2005.median();

Map.addLayer(gpw_med2005.sldStyle(sld_intervals), {}, '2005');

var gpw_pop2010 = ee.ImageCollection('CIESIN/GPWv4/population-density')
	.filterDate('2010-01-01', '2010-12-31')
	.select('population-density');

var sld_intervals =
  '<RasterSymbolizer>' +
    '<ColorMap  type="intervals" extended="false" >' +
      '<ColorMapEntry color="#ffffff" quantity="0" label="0"/>' +    
      '<ColorMapEntry color="#F4C2C2" quantity="1" label="less 1"/>' +
      '<ColorMapEntry color="#CD5C5C" quantity="5" label="1-5" />' +
      '<ColorMapEntry color="#D73B3E" quantity="25" label="5-25" />' +
      '<ColorMapEntry color="#CC0000" quantity="250" label="25-250" />' +
      '<ColorMapEntry color="#701C1C" quantity="1000" label="250-1000" />' +
      '<ColorMapEntry color="#ffff00" quantity="10000" label="1000+" />' +
    '</ColorMap>' +
  '</RasterSymbolizer>';

var gpw_med2010 = gpw_pop2010.median();

Map.addLayer(gpw_med2010.sldStyle(sld_intervals), {}, '2010');

var gpw_pop2015 = ee.ImageCollection('CIESIN/GPWv4/population-density')
	.filterDate('2015-01-01', '2015-12-31')
	.select('population-density');

var sld_intervals =
  '<RasterSymbolizer>' +
    '<ColorMap  type="intervals" extended="false" >' +
      '<ColorMapEntry color="#ffffff" quantity="0" label="0"/>' +    
      '<ColorMapEntry color="#F4C2C2" quantity="1" label="less 1"/>' +
      '<ColorMapEntry color="#CD5C5C" quantity="5" label="1-5" />' +
      '<ColorMapEntry color="#D73B3E" quantity="25" label="5-25" />' +
      '<ColorMapEntry color="#CC0000" quantity="250" label="25-250" />' +
      '<ColorMapEntry color="#701C1C" quantity="1000" label="250-1000" />' +
      '<ColorMapEntry color="#ffff00" quantity="10000" label="1000+" />' +
    '</ColorMap>' +
  '</RasterSymbolizer>';

var gpw_med2015 = gpw_pop2015.median();

Map.addLayer(gpw_med2015.sldStyle(sld_intervals), {}, '2015');
//////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////
// ESA land use change - Amazon
// Data location: Earth Engine asset users/tonycak/esa_landcover_amazon
// Reference: http://maps.elie.ucl.ac.be/CCI/viewer/download.php
// Year coverage: 2000-2015
var esa = ee.ImageCollection('users/tonycak/esa_landcover_amazon')
  .filterDate('2012-01-01', '2012-12-31');

var sld_intervals = '<RasterSymbolizer>' +
 '<ColorMap  type="intervals" extended="false" >' +
    '<ColorMapEntry color="#000000" quantity="0" label="No data"/>' +
    '<ColorMapEntry color="#ffff64" quantity="10" label="Cropland, rainfed"/>' +
    '<ColorMapEntry color="#ffff64" quantity="11" label="Herbaceous cover"/>' +
    '<ColorMapEntry color="#ffff00" quantity="12" label="Tree or shrub cover"/>' +
    '<ColorMapEntry color="#aaaaf0" quantity="20" label="Cropland, irrigated or post-flooding"/>' +
    '<ColorMapEntry color="#dcf064" quantity="30" label="Mosaic cropland (greater than 50%) / natural vegetation (tree, shrub, herbaceous cover) (less than 50%)"/>' +
    '<ColorMapEntry color="#c8c864" quantity="40" label="Mosaic natural vegetation (tree, shrub, herbaceous cover) (greater than 50%) / cropland (less than 50%)"/>' +
    '<ColorMapEntry color="#006400" quantity="50" label="Tree cover, broadleaved, evergreen, closed to open (greater than 15%)"/>' +
    '<ColorMapEntry color="#00a000" quantity="60" label="Tree cover, broadleaved, deciduous, closed to open ( greater than 15%)"/>' +
    '<ColorMapEntry color="#00a000" quantity="61" label="Tree cover, broadleaved, deciduous, closed (greater than 40%)"/>' +
    '<ColorMapEntry color="#aac800" quantity="62" label="Tree cover, broadleaved, deciduous, open (15-40%)"/>' +
    '<ColorMapEntry color="#003c00" quantity="70" label="Tree cover, needleleaved, evergreen, closed to open (greater than 15%)"/>' +
    '<ColorMapEntry color="#003c00" quantity="71" label="Tree cover, needleleaved, evergreen, closed (greater than 40%)"/>' +
    '<ColorMapEntry color="#005000" quantity="72" label="Tree cover, needleleaved, evergreen, open (15-40%)"/>' +
    '<ColorMapEntry color="#285000" quantity="80" label="Tree cover, needleleaved, deciduous, closed to open (greater than 15%)"/>' +
    '<ColorMapEntry color="#285000" quantity="81" label="Tree cover, needleleaved, deciduous, closed (greater than 40%)"/>' +
    '<ColorMapEntry color="#286400" quantity="82" label="Tree cover, needleleaved, deciduous, open (15-40%)"/>' +
    '<ColorMapEntry color="#788200" quantity="90" label="Tree cover, mixed leaf type (broadleaved and needleleaved)"/>' +
    '<ColorMapEntry color="#8ca000" quantity="100" label="Mosaic tree and shrub (greater than 50%) / herbaceous cover (less than 50%)"/>' +
    '<ColorMapEntry color="#be9600" quantity="110" label="Mosaic herbaceous cover (>50%) / tree and shrub (less than 50%)"/>' +
    '<ColorMapEntry color="#966400" quantity="120" label="Shrubland"/>' +
    '<ColorMapEntry color="#784b00" quantity="121" label="Shrubland evergreen"/>' +
    '<ColorMapEntry color="#966400" quantity="122" label="Shrubland deciduous"/>' +
    '<ColorMapEntry color="#ffb432" quantity="130" label="Grassland"/>' +
    '<ColorMapEntry color="#ffdcd2" quantity="140" label="Lichens and mosses"/>' +
    '<ColorMapEntry color="#ffebaf" quantity="150" label="Sparse vegetation (tree, shrub, herbaceous cover) (less than 15%)"/>' +
    '<ColorMapEntry color="#ffc864" quantity="151" label="Sparse tree (less than 15%)"/>' +
    '<ColorMapEntry color="#ffd278" quantity="152" label="Sparse shrub (less than 15%)"/>' +
    '<ColorMapEntry color="#ffebaf" quantity="153" label="Sparse herbaceous cover (less than 15%)"/>' +
    '<ColorMapEntry color="#00785a" quantity="160" label="Tree cover, flooded, fresh or brakish water"/>' +
    '<ColorMapEntry color="#009678" quantity="170" label="Tree cover, flooded, saline water"/>' +
    '<ColorMapEntry color="#00dc82" quantity="180" label="Shrub or herbaceous cover, flooded, fresh/saline/brakish water"/>' +
    '<ColorMapEntry color="#c31400" quantity="190" label="Urban areas"/>' +
    '<ColorMapEntry color="#fff5d7" quantity="200" label="Bare areas"/>' +
    '<ColorMapEntry color="#dcdcdc" quantity="201" label="Consolidated bare areas"/>' +
    '<ColorMapEntry color="#fff5d7" quantity="202" label="Unconsolidated bare areas"/>' +
    '<ColorMapEntry color="#0046c8" quantity="210" label="Water bodies"/>' +
    '<ColorMapEntry color="#ffffff" quantity="220" label="Permanent snow and ice"/>' +
  '</ColorMap>' +
'</RasterSymbolizer>';

var med_esa = esa.median();

Map.addLayer(med_esa.sldStyle(sld_intervals), {}, 'esa land cover');
//////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////
// GLCF Landsat tree cover continuous fields
// Dates: 2000-2010 (three year epochs: 2000, 2005, 2010)
// https://explorer.earthengine.google.com/#detail/GLCF%2FGLS_TCC
var tree2000 = ee.ImageCollection('GLCF/GLS_TCC')
	.filterDate('2000-01-01', '2000-12-31')
	.select('tree_canopy_cover');

var tree2005 = ee.ImageCollection('GLCF/GLS_TCC')
	.filterDate('2005-01-01', '2005-12-31')
	.select('tree_canopy_cover');

Map.addLayer(tree2000, {
  min:0, 
  max: 100, 
  palette: ['000000', '50C878', '0B6623']
}, '2000');

Map.addLayer(tree2005, {
  min:0, 
  max: 100, 
  palette: ['000000', '50C878', '0B6623']
}, '2005');
//////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////
// GlobCover: Global Land Cover Map
// Dates: 2009-2010
// https://explorer.earthengine.google.com/#detail/ESA%2FGLOBCOVER_L4_200901_200912_V2_3
var gl = ee.Image('ESA/GLOBCOVER_L4_200901_200912_V2_3')
  .select('landcover');

Map.addLayer(gl);

var sld_intervals = '<RasterSymbolizer>' +
 '<ColorMap  type="intervals" extended="false" >' +
    '<ColorMapEntry color="#aaefef" quantity="11" label="Post-flooding or irrigated croplands"/>' +
    '<ColorMapEntry color="#ffff63" quantity="14" label="Rainfed croplands"/>' +
    '<ColorMapEntry color="#dcef63" quantity="20" label="Mosaic cropland (50-70%) / vegetation (grassland, shrubland, forest) (20-50%)"/>' +
    '<ColorMapEntry color="#cdcd64" quantity="30" label="Mosaic vegetation (grassland, shrubland, forest) (50-70%) / cropland (20-50%)"/>' +
    '<ColorMapEntry color="#006300" quantity="40" label="Closed to open (>15%) broadleaved evergreen and/or semi-deciduous forest (>5m)"/>' +
    '<ColorMapEntry color="#009f00" quantity="50" label="Closed (>40%) broadleaved deciduous forest (>5m)"/>' +
    '<ColorMapEntry color="#aac700" quantity="60" label="Open (15-40%) broadleaved deciduous forest (>5m)"/>' +
    '<ColorMapEntry color="#003b00" quantity="70" label="Closed (>40%) needleleaved evergreen forest (>5m)"/>' +
    '<ColorMapEntry color="#286300" quantity="90" label="Open (15-40%) needleleaved deciduous or evergreen forest (>5m)"/>' +
    '<ColorMapEntry color="#788300" quantity="100" label="Closed to open (>15%) mixed broadleaved and needleleaved forest (>5m)"/>' +
    '<ColorMapEntry color="#8d9f00" quantity="110" label="Mosaic forest-shrubland (50-70%) / grassland (20-50%)"/>' +
    '<ColorMapEntry color="#bd9500" quantity="120" label="Mosaic grassland (50-70%) / forest-shrubland (20-50%)"/>' +
    //'<ColorMapEntry color="#956300" quantity="130" label="Closed to open (>15%) shrubland (<5m)"/>' +
    '<ColorMapEntry color="#ffb431" quantity="140" label="Closed to open (>15%) grassland"/>' +
    '<ColorMapEntry color="#ffebae" quantity="150" label="Sparse (>15%) vegetation (woody vegetation, shrubs, grassland)"/>' +
    '<ColorMapEntry color="#00785a" quantity="160" label="Closed (>40%) broadleaved forest regularly flooded - Fresh water"/>' +
    '<ColorMapEntry color="#009578" quantity="170" label="Closed (>40%) broadleaved semi-deciduous and/or evergreen forest regularly flooded - saline water"/>' +
    '<ColorMapEntry color="#00dc83" quantity="180" label="Closed to open (>15%) vegetation (grassland, shrubland, woody vegetation) on regularly flooded or waterlogged soil - fresh, brackish or saline water"/>' +
    '<ColorMapEntry color="#c31300" quantity="190" label="Artificial surfaces and associated areas (urban areas >50%)"/>' +
    '<ColorMapEntry color="#fff5d6" quantity="200" label="Bare areas"/>' +
    '<ColorMapEntry color="#0046c7" quantity="210" label="Water bodies"/>' +
    '<ColorMapEntry color="#ffffff" quantity="220" label="Permanent snow and ice"/>' +
    '<ColorMapEntry color="#743411" quantity="230" label="Unclassified"/>' +
  '</ColorMap>' +
'</RasterSymbolizer>';

Map.addLayer(gl.sldStyle(sld_intervals), {}, 'globcover');
//////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////
// Global Forest Canopy Height
// Date: 2005
// https://explorer.earthengine.google.com/#detail/NASA%2FJPL%2Fglobal_forest_canopy_height_2005
var forest = ee.Image('NASA/JPL/global_forest_canopy_height_2005').select('1');

Map.addLayer(forest, {
  min:0, 
  max: 100, 
  palette: ['000000', '50C878', '0B6623']
});
//////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////
// Global PALSAR-2/PALSAR Forest/Non-Forest Map
// Dates: 2007-2016
// https://explorer.earthengine.google.com/#detail/JAXA%2FALOS%2FPALSAR%2FYEARLY%2FFNF
var fnf = ee.ImageCollection('JAXA/ALOS/PALSAR/YEARLY/FNF')
	.filterDate('2007-01-01', '2007-12-31');

var fnf2 = ee.ImageCollection('JAXA/ALOS/PALSAR/YEARLY/FNF')
	.filterDate('2016-01-01', '2016-12-31');

Map.addLayer(fnf, {min: 1, max: 3, palette: ['#006400','FEFF99', '0000FF']}, 'fnf-2007');
Map.addLayer(fnf2, {min: 1, max: 3, palette: ['#006400','FEFF99', '0000FF']}, 'fnf-2016');
//////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////
// Mapbiomas
// Dates: 2000-2016
// http://mapbiomas.org/pages/scripts
var image=ee.Image('projects/mapbiomas-workspace/public/collection2_3/mapbiomas_collection23_integration_v1');

// var bandNames = image.bandNames();
// print('Band names: ', bandNames); 

// Change year number to get results for that year
var lc = image.select('classification_2016');

var mapbiomasPalette = [
	'd5d5e5', // 0: no information
	'129912', // 1: (green)
	'1f4423', // 2: (green)
	'006400', // 3: dense forest
	'00ff00', // 4: (green)
	'687537', // 5: (green)
	'76a5af', // 6: inundated forest
	'29eee4', // 7: degraded forest
	'77a605', // 8: secondary forest
	'935132', // 9: (brown)
	'ff9966', // 10: nature non-forest formations
	'45c2a5', // 11: (teal-green)
	'b8af4f', // 12: (yellow-brown)
	'f1c232', // 13: (gold)
	'ffffb2', // 14: agriculture and pasture
	'ffd966', // 15: (orange)
	'f6b26b', // 16: (orange)
	'a0d0de', // 17: (blue-gray)
	'e974ed', // 18: (fuscha)
	'd5a6bd', // 19: (pink)
	'c27ba0', // 20; (purple)
	'fbf3c7', // 21: (light yellow)
	'ea9999', // 22: non-vegetated areas
	'dd7e6b', // 23: (salmon)
	'b7b7b7', // 24: urban areas
	'ff99ff', // 25: (pink)
	'0000ff', // 26: water
	'd5d5e5', // 27: (gray)
	'ce3d3d'  // 28: 
];

Map.addLayer(lc, {min: 0, max: 28, palette: mapbiomasPalette});
//////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////
// Hansen Global Forest Change v1.4
// Dates: 2000-2016
// https://explorer.earthengine.google.com/#detail/UMD%2Fhansen%2Fglobal_forest_change_2016_v1_4
var hansen = ee.Image('UMD/hansen/global_forest_change_2016_v1_4');
var lossImage = hansen.select(['loss']);
var gainImage = hansen.select(['gain']);
var treeCover = hansen.select(['treecover2000']);
var lossIn2015 = hansen.select(['lossyear']).eq(15);

// Use the and() method to create the lossAndGain image.
var gainAndLoss = gainImage.and(lossImage);

// Add the tree cover layer in green.
Map.addLayer(treeCover.updateMask(treeCover),
    {palette: ['000000', '00FF00'], max: 100}, 'Forest Cover');

// Add the loss layer in red.
Map.addLayer(lossImage.updateMask(lossImage),
    {palette: ['FF0000']}, 'Loss');

// Add the gain layer in blue.
Map.addLayer(gainImage.updateMask(gainImage),
    {palette: ['0000FF']}, 'Gain');

// Show the loss and gain image.
Map.addLayer(gainAndLoss.updateMask(gainAndLoss),
    {palette: 'FF00FF'}, 'Gain and Loss');

Map.addLayer(lossIn2015.updateMask(lossIn2015), {palette: ['FF0000']}, 'Loss in 2015');
//////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////
// JRC Yearly Water Classification History, v1.0
// Dates: 1984-2015
// https://explorer.earthengine.google.com/#detail/JRC%2FGSW1_0%2FYearlyHistory
// Also exists on monthly data
var jrc00 = ee.ImageCollection('JRC/GSW1_0/YearlyHistory')
	.filterDate('2000-01-01', '2000-12-31')
	.select('waterClass');

var jrc15 = ee.ImageCollection('JRC/GSW1_0/YearlyHistory')
	.filterDate('2015-01-01', '2015-12-31')
	.select('waterClass');

Map.addLayer(jrc00, {
  min:0, 
  max: 3, 
  palette: ['cccccc', 'ffffff', '99d9ea', '0000ff']
}, 'jrc-2000');

Map.addLayer(jrc15, {
  min:0, 
  max: 3, 
  palette: ['cccccc', 'ffffff', '99d9ea', '0000ff']
}, 'jrc-2015');
//////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////
// MCD64A1.006 MODIS Burned Area Monthly Global 500m
// Dates: 2000-2018
// https://explorer.earthengine.google.com/#detail/MODIS%2F006%2FMCD64A1
var start_date = '2012-01-01';
var end_date = '2012-12-31';

var burned = ee.ImageCollection('MODIS/006/MCD64A1')
	.filterDate(start_date, end_date)
	.select('BurnDate');

var burned_sum = burned.sum();

Map.addLayer(burned_sum);
//////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////
// MODIS MCD12Q1.051 Land Cover Type Yearly Global 500m
// Dates: 2000-2013
// https://explorer.earthengine.google.com/#detail/MODIS%2F051%2FMCD12Q1
var start_date = '2012-01-01';
var end_date = '2012-12-31';

var lc_type1 = ee.ImageCollection('MODIS/051/MCD12Q1')
	.filterDate(start_date, end_date)
	.select('Land_Cover_Type_1');

var sld_intervals_lc1 = '<RasterSymbolizer>' +
 '<ColorMap  type="intervals" extended="false" >' +
    '<ColorMapEntry color="#1c0dff" quantity="0" label="Water"/>' +
    '<ColorMapEntry color="#05450a" quantity="1" label="Evergreen needleleaf forest"/>' +
    '<ColorMapEntry color="#086a10" quantity="2" label="Evergreen broadleaf forest"/>' +
    '<ColorMapEntry color="#54a708" quantity="3" label="Deciduous needleleaf forest"/>' +
    '<ColorMapEntry color="#78d203" quantity="4" label="Deciduous broadleaf forest"/>' +
    '<ColorMapEntry color="#009900" quantity="5" label="Mixed forest"/>' +
    '<ColorMapEntry color="#c6b044" quantity="6" label="Closed shrublands"/>' +
    '<ColorMapEntry color="#dcd159" quantity="7" label="Open shrublands"/>' +
    '<ColorMapEntry color="#dade48" quantity="8" label="Woody savannas"/>' +
    '<ColorMapEntry color="#fbff13" quantity="9" label="Savannas"/>' +
    '<ColorMapEntry color="#b6ff05" quantity="10" label="Grasslands"/>' +
    '<ColorMapEntry color="#27ff87" quantity="11" label="Permanent wetlands"/>' +
    '<ColorMapEntry color="#c24f44" quantity="12" label="Croplands"/>' +
    '<ColorMapEntry color="#a5a5a5" quantity="13" label="Urban and built-up"/>' +
    '<ColorMapEntry color="#ff6d4c" quantity="14" label="Cropland/natural vegetation mosaic"/>' +
    '<ColorMapEntry color="#69fff8" quantity="15" label="Snow and ie"/>' +
    '<ColorMapEntry color="#f9ffa4" quantity="16" label="Barren or sparsely vegetated"/>' +
    '<ColorMapEntry color="#ffffff" quantity="254" label="Unclassified"/>' +
  '</ColorMap>' +
'</RasterSymbolizer>';

var lc_type1_med = lc_type1.median();

Map.addLayer(lc_type1_med.sldStyle(sld_intervals_lc1), {}, 'type1');


var lc_type2 = ee.ImageCollection('MODIS/051/MCD12Q1')
	.filterDate(start_date, end_date)
	.select('Land_Cover_Type_2');

var sld_intervals_lc2 = '<RasterSymbolizer>' +
 '<ColorMap  type="intervals" extended="false" >' +
    '<ColorMapEntry color="#1c0dff" quantity="0" label="Water"/>' +
    '<ColorMapEntry color="#05450a" quantity="1" label="Evergreen needleleaf forest"/>' +
    '<ColorMapEntry color="#086a10" quantity="2" label="Evergreen broadleaf forest"/>' +
    '<ColorMapEntry color="#54a708" quantity="3" label="Deciduous needleleaf forest"/>' +
    '<ColorMapEntry color="#78d203" quantity="4" label="Deciduous broadleaf forest"/>' +
    '<ColorMapEntry color="#009900" quantity="5" label="Mixed forest"/>' +
    '<ColorMapEntry color="#c6b044" quantity="6" label="Closed shrublands"/>' +
    '<ColorMapEntry color="#dcd159" quantity="7" label="Open shrublands"/>' +
    '<ColorMapEntry color="#dade48" quantity="8" label="Woody savannas"/>' +
    '<ColorMapEntry color="#fbff13" quantity="9" label="Savannas"/>' +
    '<ColorMapEntry color="#b6ff05" quantity="10" label="Grasslands"/>' +
    '<ColorMapEntry color="#c24f44" quantity="12" label="Croplands"/>' +
    '<ColorMapEntry color="#a5a5a5" quantity="13" label="Urban and built-up"/>' +
    '<ColorMapEntry color="#ff6d4c" quantity="14" label="Cropland/natural vegetation mosaic"/>' +
    '<ColorMapEntry color="#69fff8" quantity="15" label="Snow and ie"/>' +
    '<ColorMapEntry color="#f9ffa4" quantity="16" label="Barren or sparsely vegetated"/>' +
    '<ColorMapEntry color="#ffffff" quantity="254" label="Unclassified"/>' +
  '</ColorMap>' +
'</RasterSymbolizer>';

var lc_type2_med = lc_type2.median();

Map.addLayer(lc_type2_med.sldStyle(sld_intervals_lc2), {}, 'type2');


var lc_type3 = ee.ImageCollection('MODIS/051/MCD12Q1')
	.filterDate(start_date, end_date)
	.select('Land_Cover_Type_3');

var sld_intervals_lc3 = '<RasterSymbolizer>' +
 '<ColorMap  type="intervals" extended="false" >' +
    '<ColorMapEntry color="#1c0dff" quantity="0" label="Water"/>' +
    '<ColorMapEntry color="#b6ff05" quantity="1" label="Grasses/cereal crops"/>' +
    '<ColorMapEntry color="#dcd159" quantity="2" label="Shrubs"/>' +
    '<ColorMapEntry color="#c24f44" quantity="3" label="Broadleaf crops"/>' +
    '<ColorMapEntry color="#fbff13" quantity="4" label="Savanna"/>' +
    '<ColorMapEntry color="#086a10" quantity="5" label="Evergreen broadleaf forest"/>' +
    '<ColorMapEntry color="#78d203" quantity="6" label="Deciduous broadleaf forest"/>' +
    '<ColorMapEntry color="#05450a" quantity="7" label="Evergreen needleleaf forest"/>' +
    '<ColorMapEntry color="#54a708" quantity="8" label="Deciduous needleleaf forest"/>' +
    '<ColorMapEntry color="#f9ffa4" quantity="9" label="Non-vegetated"/>' +
    '<ColorMapEntry color="#a5a5a5" quantity="10" label="Urban"/>' +
    '<ColorMapEntry color="#ffffff" quantity="254" label="Unclassified"/>' +
  '</ColorMap>' +
'</RasterSymbolizer>';

var lc_type3_med = lc_type3.median();

Map.addLayer(lc_type3_med.sldStyle(sld_intervals_lc3), {}, 'type3');


var lc_type4 = ee.ImageCollection('MODIS/051/MCD12Q1')
	.filterDate(start_date, end_date)
	.select('Land_Cover_Type_4');

var sld_intervals_lc4 = '<RasterSymbolizer>' +
 '<ColorMap  type="intervals" extended="false" >' +
    '<ColorMapEntry color="#1c0dff" quantity="0" label="Water"/>' +
    '<ColorMapEntry color="#05450a" quantity="1" label="Evergreen needleleaf forest"/>' +
    '<ColorMapEntry color="#086a10" quantity="2" label="Evergreen broadleaf forest"/>' +
    '<ColorMapEntry color="#54a708" quantity="3" label="Deciduous needleleaf forest"/>' +
    '<ColorMapEntry color="#78d203" quantity="4" label="Deciduous broadleaf forest"/>' +
    '<ColorMapEntry color="#009900" quantity="5" label="Annual broadleaf vegetation"/>' +
    '<ColorMapEntry color="#b6ff05" quantity="6" label="Annual grass vegetation"/>' +
    '<ColorMapEntry color="#f9ffa4" quantity="7" label="Non-vegetated"/>' +
    '<ColorMapEntry color="#a5a5a5" quantity="8" label="Urban"/>' +
    '<ColorMapEntry color="#ffffff" quantity="254" label="Unclassified"/>' +
  '</ColorMap>' +
'</RasterSymbolizer>';

var lc_type4_med = lc_type4.median();

Map.addLayer(lc_type4_med.sldStyle(sld_intervals_lc4), {}, 'type4');


var lc_type5 = ee.ImageCollection('MODIS/051/MCD12Q1')
	.filterDate(start_date, end_date)
	.select('Land_Cover_Type_5');

var sld_intervals_lc5 = '<RasterSymbolizer>' +
 '<ColorMap  type="intervals" extended="false" >' +
    '<ColorMapEntry color="#1c0dff" quantity="0" label="Water"/>' +
    '<ColorMapEntry color="#05450a" quantity="1" label="Evergreen needleleaf trees"/>' +
    '<ColorMapEntry color="#086a10" quantity="2" label="Evergreen broadleaf trees"/>' +
    '<ColorMapEntry color="#54a708" quantity="3" label="Deciduous needleleaf trees"/>' +
    '<ColorMapEntry color="#78d203" quantity="4" label="Deciduous broadleaf trees"/>' +
    '<ColorMapEntry color="#dcd159" quantity="5" label="Shrub"/>' +
    '<ColorMapEntry color="#b6ff05" quantity="6" label="Grasses"/>' +
    '<ColorMapEntry color="#dade48" quantity="7" label="Cereal crops"/>' +
    '<ColorMapEntry color="#c24f44" quantity="8" label="Broadleaf crops"/>' +
    '<ColorMapEntry color="#a5a5a5" quantity="9" label="Urban and built-up"/>' +
    '<ColorMapEntry color="#69fff8" quantity="10" label="Snow and ie"/>' +
    '<ColorMapEntry color="#f9ffa4" quantity="11" label="Barren or sparsely vegetated"/>'     
    '<ColorMapEntry color="#ffffff" quantity="254" label="Unclassified"/>' +
  '</ColorMap>' +
'</RasterSymbolizer>';

var lc_type5_med = lc_type5.median();

Map.addLayer(lc_type5_med.sldStyle(sld_intervals_lc5), {}, 'type5');
//////////////////////////////////////////////////////////////////////////////////////////
