////
// VECTOR
////

//////////////////////////////////////////////////////////////////////////////////////////
// national agricultural statistics/census data
// Date: various
// [various data from country statistics/agricultural websites and the FAO; 
// data included for Bolivia, Brasil, Colombia, Ecuador, French Guiana, Guyana, Peru, 
// Suriname, and Venezuela]
//////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////
// Imazon deforestation/degradation
// Date: 2008-2017
// http://www.imazongeo.org.br/doc/downloads.php; https://infoamazonia.org/en/datasets/deforestation-imazon-sad/
// [notes TBD]
//////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////
// OSM
// Date: downloaded on February 7, 2018
// http://download.geofabrik.de/south-america.html
// [notes TBD]
//////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////
// PRODES/INPE deforestation; 2000-2016
// Date: 2000-2017
// http://www.dpi.inpe.br/prodesdigital/prodes.php
//////////////////////////////////////////////////////////////////////////////////////////




////
// RASTER
////

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
// GHSL: Global Human Settlement Layers, Built-Up Grid
// Dates: 1975-2014
// https://code.earthengine.google.com/dataset/JRC/GHSL/P2016/BUILT_LDS_GLOBE_V1
// https://code.earthengine.google.com/dataset/JRC/GHSL/P2016/BUILT_LDSMT_GLOBE_V1
// https://code.earthengine.google.com/dataset/JRC/GHSL/P2016/SMOD_POP_GLOBE_V1





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
// Hansen Global Forest Change v1.5
// Dates: 2000-2017
// https://code.earthengine.google.com/dataset/UMD/hansen/global_forest_change_2017_v1_5
var hansen = ee.Image('UMD/hansen/global_forest_change_2017_v1_5');
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
// https://code.earthengine.google.com/dataset/MODIS/006/MCD64A1
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
// Dates: 2000-2016
// https://explorer.earthengine.google.com/#detail/MODIS%2F051%2FMCD12Q1
// https://code.earthengine.google.com/dataset/MODIS/006/MCD12Q1
var start_date = '2012-01-01';
var end_date = '2012-12-31';

// this seems to be the new repository:
var lc_type1 = ee.ImageCollection('MODIS/006/MCD12Q1');
//var lc_type1 = ee.ImageCollection('MODIS/051/MCD12Q1')
	.filterDate(start_date, end_date)
	.select('LC_Type1');

var sld_intervals_lc1 = '<RasterSymbolizer>' +
 '<ColorMap  type="intervals" extended="false" >' +
    '<ColorMapEntry color="#05450a" quantity="1" label="Evergreen Needleleaf Forests: dominated by evergreen conifer trees (canopy >2m). Tree cover >60%."/>' +
    '<ColorMapEntry color="#086a10" quantity="2" label="Evergreen Broadleaf Forests: dominated by evergreen broadleaf and palmate trees (canopy >2m). Tree cover >60%."/>' +
    '<ColorMapEntry color="#54a708" quantity="3" label="Deciduous Needleleaf Forests: dominated by deciduous needleleaf (larch) trees (canopy >2m). Tree cover >60%."/>' +
    '<ColorMapEntry color="#78d203" quantity="4" label="Deciduous Broadleaf Forests: dominated by deciduous broadleaf trees (canopy >2m). Tree cover >60%."/>' +
    '<ColorMapEntry color="#009900" quantity="5" label="Mixed Forests: dominated by neither deciduous nor evergreen (40-60% of each) tree type (canopy >2m). Tree cover >60%."/>' +
    '<ColorMapEntry color="#c6b044" quantity="6" label="Closed Shrublands: dominated by woody perennials (1-2m height) >60% cover."/>' +
    '<ColorMapEntry color="#dcd159" quantity="7" label="Open Shrublands: dominated by woody perennials (1-2m height) 10-60% cover."/>' +
    '<ColorMapEntry color="#dade48" quantity="8" label="Woody Savannas: tree cover 30-60% (canopy >2m)."/>' +
    '<ColorMapEntry color="#fbff13" quantity="9" label="Savannas: tree cover 10-30% (canopy >2m)."/>' +
    '<ColorMapEntry color="#b6ff05" quantity="10" label="Grasslands: dominated by herbaceous annuals (<2m)."/>' +
    '<ColorMapEntry color="#27ff87" quantity="11" label="Permanent Wetlands: permanently inundated lands with 30-60% water cover and >10% vegetated cover."/>' +
    '<ColorMapEntry color="#c24f44" quantity="12" label="Croplands: at least 60% of area is cultivated cropland."/>' +
    '<ColorMapEntry color="#a5a5a5" quantity="13" label="Urban and Built-up Lands: at least 30% impervious surface area including building materials, asphalt and vehicles."/>' +
    '<ColorMapEntry color="#ff6d4c" quantity="14" label="Cropland/Natural Vegetation Mosaics: mosaics of small-scale cultivation 40-60% with natural tree, shrub, or herbaceous vegetation."/>' +
    '<ColorMapEntry color="#69fff8" quantity="15" label="Permanent Snow and Ice: at least 60% of area is covered by snow and ice for at least 10 months of the year."/>' +
    '<ColorMapEntry color="#f9ffa4" quantity="16" label="Barren: at least 60% of area is non-vegetated barren (sand, rock, soil) areas with less than 10% vegetation."/>' +
    '<ColorMapEntry color='#1c0dff' quantity='17' label="Water Bodies: at least 60% of area is covered by permanent water bodies."/>' + 
    '<ColorMapEntry color="#ffffff" quantity="254" label="Unclassified"/>' +
  '</ColorMap>' +
'</RasterSymbolizer>';

var lc_type1_med = lc_type1.median();

Map.addLayer(lc_type1_med.sldStyle(sld_intervals_lc1), {}, 'type1');

// this seems to be the new repository:
var lc_type2 = ee.ImageCollection('MODIS/006/MCD12Q1');
//var lc_type2 = ee.ImageCollection('MODIS/051/MCD12Q1')
	.filterDate(start_date, end_date)
	.select('LC_Type2');

var sld_intervals_lc2 = '<RasterSymbolizer>' +
 '<ColorMap  type="intervals" extended="false" >' +
    '<ColorMapEntry color="#1c0dff" quantity="0" label="Water Bodies: at least 60% of area is covered by permanent water bodies."/>' +
    '<ColorMapEntry color="#05450a" quantity="1" label="Evergreen Needleleaf Forests: dominated by evergreen conifer trees (canopy >2m). Tree cover >60%."/>' +
    '<ColorMapEntry color="#086a10" quantity="2" label="Evergreen Broadleaf Forests: dominated by evergreen broadleaf and palmate trees (canopy >2m). Tree cover >60%."/>' +
    '<ColorMapEntry color="#54a708" quantity="3" label="Deciduous Needleleaf Forests: dominated by deciduous needleleaf (larch) trees (canopy >2m). Tree cover >60%."/>' +
    '<ColorMapEntry color="#78d203" quantity="4" label="Deciduous Broadleaf Forests: dominated by deciduous broadleaf trees (canopy >2m). Tree cover >60%."/>' +
    '<ColorMapEntry color="#009900" quantity="5" label="Mixed Forests: dominated by neither deciduous nor evergreen (40-60% of each) tree type (canopy >2m). Tree cover >60%."/>' +
    '<ColorMapEntry color="#c6b044" quantity="6" label="Closed Shrublands: dominated by woody perennials (1-2m height) >60% cover."/>' +
    '<ColorMapEntry color="#dcd159" quantity="7" label="Open Shrublands: dominated by woody perennials (1-2m height) 10-60% cover."/>' +
    '<ColorMapEntry color="#dade48" quantity="8" label="Woody Savannas: tree cover 30-60% (canopy >2m)."/>' +
    '<ColorMapEntry color="#fbff13" quantity="9" label="Savannas: tree cover 10-30% (canopy >2m)."/>' +
    '<ColorMapEntry color="#b6ff05" quantity="10" label="Grasslands: dominated by herbaceous annuals (<2m)."/>' +
    '<ColorMapEntry color="#27ff87" quantity="11" label="Permanent Wetlands: permanently inundated lands with 30-60% water cover and >10% vegetated cover."/>' + 
    '<ColorMapEntry color="#c24f44" quantity="12" label="Croplands: at least 60% of area is cultivated cropland."/>' +
    '<ColorMapEntry color="#a5a5a5" quantity="13" label="Urban and Built-up Lands: at least 30% impervious surface area including building materials, asphalt and vehicles."/>' +
    '<ColorMapEntry color="#ff6d4c" quantity="14" label="Cropland/Natural Vegetation Mosaics: mosaics of small-scale cultivation 40-60% with natural tree, shrub, or herbaceous vegetation."/>' +
    '<ColorMapEntry color="#69fff8" quantity="15" label="Non-Vegetated Lands: at least 60% of area is non-vegetated barren (sand, rock, soil) or permanent snow and ice with less than 10% vegetation."/>'
  '</ColorMap>' +
'</RasterSymbolizer>';

var lc_type2_med = lc_type2.median();

Map.addLayer(lc_type2_med.sldStyle(sld_intervals_lc2), {}, 'type2');

// this seems to be the new repository:
var lc_type3 = ee.ImageCollection('MODIS/006/MCD12Q1');
//var lc_type3 = ee.ImageCollection('MODIS/051/MCD12Q1')
	.filterDate(start_date, end_date)
	.select('LC_Type3');

var sld_intervals_lc3 = '<RasterSymbolizer>' +
 '<ColorMap  type="intervals" extended="false" >' +
    '<ColorMapEntry color="#1c0dff" quantity="0" label="Water Bodies: at least 60% of area is covered by permanent water bodies."/>' +
    '<ColorMapEntry color="#b6ff05" quantity="1" label="Grasslands: dominated by herbaceous annuals (<2m) including cereal croplands."/>' +
    '<ColorMapEntry color="#dcd159" quantity="2" label="Shrublands: shrub (1-2m) cover >10%."/>' +
    '<ColorMapEntry color="#c24f44" quantity="3" label="Broadleaf Croplands: bominated by herbaceous annuals (<2m) that are cultivated with broadleaf crops."/>' +
    '<ColorMapEntry color="#fbff13" quantity="4" label="Savannas: between 10-60% tree cover (>2m)."/>' +
    '<ColorMapEntry color="#086a10" quantity="5" label="Evergreen Broadleaf Forests: dominated by evergreen broadleaf and palmate trees (canopy >2m). Tree cover >60%."/>' +
    '<ColorMapEntry color="#78d203" quantity="6" label="Deciduous Broadleaf Forests: dominated by deciduous broadleaf trees (canopy >2m). Tree cover >60%."/>' +
    '<ColorMapEntry color="#05450a" quantity="7" label="Evergreen Needleleaf Forests: dominated by evergreen conifer trees (canopy >2m). Tree cover >60%."/>' +
    '<ColorMapEntry color="#54a708" quantity="8" label="Deciduous Needleleaf Forests: dominated by deciduous needleleaf (larch) trees (canopy >2m). Tree cover >60%."/>' +
    '<ColorMapEntry color="#f9ffa4" quantity="9" label="Non-Vegetated Lands: at least 60% of area is non-vegetated barren (sand, rock, soil) or permanent snow and ice with less than 10% vegetation."/>' +
    '<ColorMapEntry color="#a5a5a5" quantity="10" label="Urban and Built-up Lands: at least 30% impervious surface area including building materials, asphalt and vehicles."/>' +
  '</ColorMap>' +
'</RasterSymbolizer>';

var lc_type3_med = lc_type3.median();

Map.addLayer(lc_type3_med.sldStyle(sld_intervals_lc3), {}, 'type3');

// this seems to be the new repository:
var lc_type4 = ee.ImageCollection('MODIS/006/MCD12Q1');
//var lc_type4 = ee.ImageCollection('MODIS/051/MCD12Q1')
	.filterDate(start_date, end_date)
	.select('LC_Type4');

var sld_intervals_lc4 = '<RasterSymbolizer>' +
 '<ColorMap  type="intervals" extended="false" >' +
    '<ColorMapEntry color="#1c0dff" quantity="0" label="Water Bodies: at least 60% of area is covered by permanent water bodies."/>' +
    '<ColorMapEntry color="#05450a" quantity="1" label="Evergreen Needleleaf Vegetation: dominated by evergreen conifer trees and shrubs (>1m). Woody vegetation cover >10%."/>' +
    '<ColorMapEntry color="#086a10" quantity="2" label="Evergreen Broadleaf Vegetation: dominated by evergreen broadleaf and palmate trees and shrubs (>1m). Woody vegetation cover >10%."/>' +
    '<ColorMapEntry color="#54a708" quantity="3" label="Deciduous Needleleaf Vegetation: dominated by deciduous needleleaf (larch) trees and shrubs (>1m). Woody vegetation cover >10%."/>' +
    '<ColorMapEntry color="#78d203" quantity="4" label="Deciduous Broadleaf Vegetation: dominated by deciduous broadleaf trees and shrubs (>1m). Woody vegetation cover >10%."/>' +
    '<ColorMapEntry color="#009900" quantity="5" label="Annual Broadleaf Vegetation: dominated by herbaceous annuals (<2m). At least 60% cultivated broadleaf crops."/>' +
    '<ColorMapEntry color="#b6ff05" quantity="6" label="Annual Grass Vegetation: dominated by herbaceous annuals (<2m) including cereal croplands."/>' +
    '<ColorMapEntry color="#f9ffa4" quantity="7" label="Non-Vegetated Lands: at least 60% of area is non-vegetated barren (sand, rock, soil) or permanent snow/ice with less than 10% vegetation."/>' +
    '<ColorMapEntry color="#a5a5a5" quantity="8" label="Urban and Built-up Lands: at least 30% impervious surface area including building materials, asphalt, and vehicles."/>' +
    '<ColorMapEntry color="#ffffff" quantity="254" label="Unclassified"/>' +
  '</ColorMap>' +
'</RasterSymbolizer>';

var lc_type4_med = lc_type4.median();

Map.addLayer(lc_type4_med.sldStyle(sld_intervals_lc4), {}, 'type4');

// this seems to be the new repository:
var lc_type5 = ee.ImageCollection('MODIS/006/MCD12Q1');
//var lc_type5 = ee.ImageCollection('MODIS/051/MCD12Q1')
	.filterDate(start_date, end_date)
	.select('LC_Type5');

var sld_intervals_lc5 = '<RasterSymbolizer>' +
 '<ColorMap  type="intervals" extended="false" >' +
    '<ColorMapEntry color="#1c0dff" quantity="0" label="Water Bodies: at least 60% of area is covered by permanent water bodies."/>' +
    '<ColorMapEntry color="#05450a" quantity="1" label="Evergreen Needleleaf Trees: dominated by evergreen conifer trees (>2m). Tree cover >10%."/>' +
    '<ColorMapEntry color="#086a10" quantity="2" label="Evergreen Broadleaf Trees: dominated by evergreen broadleaf and palmate trees (>2m). Tree cover >10%."/>' +
    '<ColorMapEntry color="#54a708" quantity="3" label="Deciduous Needleleaf Trees: dominated by deciduous needleleaf (larch) trees (>2m). Tree cover >10%."/>' +
    '<ColorMapEntry color="#78d203" quantity="4" label="Deciduous Broadleaf Trees: dominated by deciduous broadleaf trees (>2m). Tree cover >10%."/>' +
    '<ColorMapEntry color="#dcd159" quantity="5" label="Shrub: Shrub (1-2m) cover >10%."/>' +
    '<ColorMapEntry color="#b6ff05" quantity="6" label="Grass: dominated by herbaceous annuals (<2m) that are not cultivated."/>' +
    '<ColorMapEntry color="#dade48" quantity="7" label="Cereal Croplands: dominated by herbaceous annuals (<2m). At least 60% cultivated cereal crops."/>' +
    '<ColorMapEntry color="#c24f44" quantity="8" label="Broadleaf Croplands: dominated by herbaceous annuals (<2m). At least 60% cultivated broadleaf crops."/>' +
    '<ColorMapEntry color="#a5a5a5" quantity="9" label="Urban and Built-up Lands: at least 30% impervious surface area including building materials, asphalt, and vehicles."/>' +
    '<ColorMapEntry color="#69fff8" quantity="10" label="Permanent Snow and Ice: at least 60% of area is covered by snow and ice for at least 10 months of the year."/>' +
    '<ColorMapEntry color="#f9ffa4" quantity="11" label="Non-Vegetated Lands: at least 60% of area is non-vegetated barren (sand, rock, soil) with less than 10% vegetation."/>'     
    '<ColorMapEntry color="#ffffff" quantity="254" label="Unclassified"/>' +
  '</ColorMap>' +
'</RasterSymbolizer>';

var lc_type5_med = lc_type5.median();

Map.addLayer(lc_type5_med.sldStyle(sld_intervals_lc5), {}, 'type5');


var lc_prop1 = ee.ImageCollection('MODIS/006/MCD12Q1');
	.filterDate(start_date, end_date)
	.select('LC_Prop1');

var sld_intervals_lcp1 = '<RasterSymbolizer>' +
 '<ColorMap  type="intervals" extended="false" >' +
    '<ColorMapEntry color="#f9ffa4" quantity="1" label="Barren: at least of area 60% is non-vegetated barren (sand, rock, soil) or permanent snow/ice with less than 10% vegetation."/>' +
    '<ColorMapEntry color="#69fff8" quantity="2" label="Permanent Snow and Ice: at least 60% of area is covered by snow and ice for at least 10 months of the year."/>' +
    '<ColorMapEntry color="#1c0dff" quantity="3" label="Water Bodies: at least 60% of area is covered by permanent water bodies."/>' +
    '<ColorMapEntry color="#05450a" quantity="11" label="Evergreen Needleleaf Forests: dominated by evergreen conifer trees (>2m). Tree cover >60%."/>' +   
    '<ColorMapEntry color="#086a10" quantity="12" label="Evergreen Broadleaf Forests: dominated by evergreen broadleaf and palmate trees (>2m). Tree cover >60%."/>' +    
    '<ColorMapEntry color="#54a708" quantity="13" label="Deciduous Needleleaf Forests: dominated by deciduous needleleaf (larch) trees (>2m). Tree cover >60%."/>' +    
    '<ColorMapEntry color="#78d203" quantity="14" label="Deciduous Broadleaf Forests: dominated by deciduous broadleaf trees (>2m). Tree cover >60%."/>' +
    '<ColorMapEntry color="#005a00" quantity="15" label="Mixed Broadleaf/Needleleaf Forests: co-dominated (40-60%) by broadleaf deciduous and evergreen needleleaf tree (>2m) types. Tree cover >60%."/>' +
    '<ColorMapEntry color="#009900" quantity="16" label="Mixed Broadleaf Evergreen/Deciduous Forests: co-dominated (40-60%) by broadleaf evergreen and deciduous tree (>2m) types. Tree cover >60%."/>' +
    '<ColorMapEntry color="#006c00" quantity="21" label="Open Forests: tree cover 30-60% (canopy >2m)."/>' +
    '<ColorMapEntry color="#00d000" quantity="22" label="Sparse Forests: tree cover 10-30% (canopy >2m)."/>' +
    '<ColorMapEntry color="#b6ff05" quantity="31" label="Dense Herbaceous: dominated by herbaceous annuals (<2m) at least 60% cover."/>' +
    '<ColorMapEntry color="#98d604" quantity="32" label="Sparse Herbaceous: dominated by herbaceous annuals (<2m) 10-60% cover."/>' +
    '<ColorMapEntry color="#dcd159" quantity="41" label="Dense Shrublands: dominated by woody perennials (1-2m) >60% cover."/>' +
    '<ColorMapEntry color="#f1fb58" quantity="42" label="Shrubland/Grassland Mosaics: dominated by woody perennials (1-2m) 10-60% cover with dense herbaceous annual understory."/>' +
    '<ColorMapEntry color="#fbee65" quantity="43" label="Sparse Shrublands: dominated by woody perennials (1-2m) 10-60% cover with minimal herbaceous understory."/>' +
  '</ColorMap>' +
'</RasterSymbolizer>';

var lc_prop1_med = lc_prop1.median();

Map.addLayer(lc_prop1_med.sldStyle(sld_intervals_lcp1), {}, 'prop1');


var lc_prop2 = ee.ImageCollection('MODIS/006/MCD12Q1');
	.filterDate(start_date, end_date)
	.select('LC_Prop2');

var sld_intervals_lcp2 = '<RasterSymbolizer>' +
 '<ColorMap  type="intervals" extended="false" >' +
    '<ColorMapEntry color="#f9ffa4" quantity="1" label="Barren: at least of area 60% is non-vegetated barren (sand, rock, soil) or permanent snow/ice with less than 10% vegetation."/>' +
    '<ColorMapEntry color="#69fff8" quantity="2" label="Permanent Snow and Ice: at least 60% of area is covered by snow and ice for at least 10 months of the year."/>' +
    '<ColorMapEntry color="#1c0dff" quantity="3" label="Water Bodies: at least 60% of area is covered by permanent water bodies."/>' +
    '<ColorMapEntry color="#a5a5a5" quantity="9" label="Urban and Built-up Lands: at least 30% of area is made up ofimpervious surfaces including building materials, asphalt, and vehicles."/>' +
    '<ColorMapEntry color="#003f00" quantity="10" label="Dense Forests: tree cover >60% (canopy >2m)."/>' +
    '<ColorMapEntry color="#006c00" quantity="20" label="Open Forests: tree cover 10-60% (canopy >2m)."/>' + 
    '<ColorMapEntry color="#e3ff77" quantity="25" label="Forest/Cropland Mosaics: mosaics of small-scale cultivation 40-60% with >10% natural tree cover."/>' + 
    '<ColorMapEntry color="#b6ff05" quantity="30" label="Natural Herbaceous: dominated by herbaceous annuals (<2m). At least 10% cover."/>' + 
    '<ColorMapEntry color="#93ce04" quantity="35" label="Natural Herbaceous/Croplands Mosaics: mosaics of small-scale cultivation 40-60% with natural shrub or herbaceous vegetation."/>' +
    '<ColorMapEntry color="#77a703" quantity="36" label="Herbaceous Croplands: dominated by herbaceous annuals (<2m). At least 60% cover. Cultivated fraction >60%."/>' +
    '<ColorMapEntry color="#dcd159" quantity="40" label="Shrublands: shrub cover >60% (1-2m)."/>' +
  '</ColorMap>' +
'</RasterSymbolizer>';

var lc_prop2_med = lc_prop2.median();

Map.addLayer(lc_prop2_med.sldStyle(sld_intervals_lcp2), {}, 'prop2');


var lc_prop3 = ee.ImageCollection('MODIS/006/MCD12Q1');
	.filterDate(start_date, end_date)
	.select('LC_Prop3');

var sld_intervals_lcp3 = '<RasterSymbolizer>' +
 '<ColorMap  type="intervals" extended="false" >' +
    '<ColorMapEntry color="#f9ffa4" quantity="1" label="Barren: at least of area 60% is non-vegetated barren (sand, rock, soil) or permanent snow/ice with less than 10% vegetation."/>' +
    '<ColorMapEntry color="#69fff8" quantity="2" label="Permanent Snow and Ice: at least 60% of area is covered by snow and ice for at least 10 months of the year."/>' +
    '<ColorMapEntry color="#1c0dff" quantity="3" label="Water Bodies: at least 60% of area is covered by permanent water bodies."/>' +
    '<ColorMapEntry color="#003f00" quantity="10" label="Dense Forests: tree cover >60% (canopy >2m)."/>' +
    '<ColorMapEntry color="#006c00" quantity="20" label="Open Forests: tree cover 10-60% (canopy >2m)."/>' + 
    '<ColorMapEntry color="#72834a" quantity="27" label="Woody Wetlands: shrub and tree cover >10% (>1m). Permanently or seasonally inundated."/>' + 
    '<ColorMapEntry color="#b6ff05" quantity="30" label="Grasslands: dominated by herbaceous annuals (<2m) >10% cover."/>' + 
    '<ColorMapEntry color="#dcd159" quantity="40" label="Shrublands: shrub cover >60% (1-2m)."/>' +
    '<ColorMapEntry color="#3aba73" quantity="50" label="Herbaceous Wetlands: dominated by herbaceous annuals (<2m) >10% cover. Permanently or seasonally inundated."/>' +
    '<ColorMapEntry color="#1e9db3" quantity="51" label="Tundra: tree cover <10%. Snow-covered for at least 8 months of the year."/>' +
  '</ColorMap>' +
'</RasterSymbolizer>';

var lc_prop3_med = lc_prop3.median();

Map.addLayer(lc_prop3_med.sldStyle(sld_intervals_lcp3), {}, 'prop3');


var lc_qc = ee.ImageCollection('MODIS/006/MCD12Q1');
	.filterDate(start_date, end_date)
	.select('WC');

var sld_intervals_lcqc = '<RasterSymbolizer>' +
 '<ColorMap  type="intervals" extended="false" >' +
    '<ColorMapEntry color="#f9ffa4" quantity="0" label="Classified land: has a classification label and is land according to the water mask."/>' +
    '<ColorMapEntry color="#69fff8" quantity="1" label="Unclassified land: not classified because of missing data but land according to the water mask, labeled as barren."/>' +
    '<ColorMapEntry color="#1c0dff" quantity="2" label="Classified water: has a classification label and is water according to the water mask."/>' +
    '<ColorMapEntry color="#003f00" quantity="3" label="Unclassified water: not classified because of missing data but water according to the water mask."/>' +
    '<ColorMapEntry color="#006c00" quantity="4" label="Classified sea ice: classified as snow/ice but water mask says it is water and less than 100m elevation, switched to water."/>' + 
    '<ColorMapEntry color="#72834a" quantity="5" label="Misclassified water: classified as water but water mask says it is land, switched to secondary label."/>' + 
    '<ColorMapEntry color="#b6ff05" quantity="6" label="Omitted snow/ice: land according to the water mask that was classified as something other than snow but with a maximum annual temperature below 1◦C, relabeled as snow/ice."/>' + 
    '<ColorMapEntry color="#dcd159" quantity="7" label="Misclassified snow/ice: land according to the water mask that was classified as snow but with a minimum annual temperature greater than 1◦C, relabeled as barren."/>' +
    '<ColorMapEntry color="#3aba73" quantity="8" label="Backfilled label: missing label from stabilization, filled with the pre-stabilized result."/>' +
    '<ColorMapEntry color="#1e9db3" quantity="9" label="Forest type changed: climate-based change to forest class."/>' +
  '</ColorMap>' +
'</RasterSymbolizer>';

var lc_qc_med = lc_qc.median();

Map.addLayer(lc_qc_med.sldStyle(sld_intervals_lcqc), {}, 'qc');

//////////////////////////////////////////////////////////////////////////////////////////
