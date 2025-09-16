var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_kalyani_buildingsbuilding_main_bu_1 = new ol.format.GeoJSON();
var features_kalyani_buildingsbuilding_main_bu_1 = format_kalyani_buildingsbuilding_main_bu_1.readFeatures(json_kalyani_buildingsbuilding_main_bu_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kalyani_buildingsbuilding_main_bu_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kalyani_buildingsbuilding_main_bu_1.addFeatures(features_kalyani_buildingsbuilding_main_bu_1);
var lyr_kalyani_buildingsbuilding_main_bu_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kalyani_buildingsbuilding_main_bu_1, 
                style: style_kalyani_buildingsbuilding_main_bu_1,
                popuplayertitle: 'kalyani_buildings — building_main_bu',
                interactive: true,
    title: 'kalyani_buildings — building_main_bu<br />\
    <img src="styles/legend/kalyani_buildingsbuilding_main_bu_1_0.png" /> beige<br />\
    <img src="styles/legend/kalyani_buildingsbuilding_main_bu_1_1.png" /> brown<br />\
    <img src="styles/legend/kalyani_buildingsbuilding_main_bu_1_2.png" /> grey<br />\
    <img src="styles/legend/kalyani_buildingsbuilding_main_bu_1_3.png" /> orange<br />\
    <img src="styles/legend/kalyani_buildingsbuilding_main_bu_1_4.png" /> white<br />\
    <img src="styles/legend/kalyani_buildingsbuilding_main_bu_1_5.png" /> yellow<br />\
    <img src="styles/legend/kalyani_buildingsbuilding_main_bu_1_6.png" /> <br />' });
var format_kalyani_neighbourhood__neighbourhood_05_2 = new ol.format.GeoJSON();
var features_kalyani_neighbourhood__neighbourhood_05_2 = format_kalyani_neighbourhood__neighbourhood_05_2.readFeatures(json_kalyani_neighbourhood__neighbourhood_05_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kalyani_neighbourhood__neighbourhood_05_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kalyani_neighbourhood__neighbourhood_05_2.addFeatures(features_kalyani_neighbourhood__neighbourhood_05_2);
var lyr_kalyani_neighbourhood__neighbourhood_05_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kalyani_neighbourhood__neighbourhood_05_2, 
                style: style_kalyani_neighbourhood__neighbourhood_05_2,
                popuplayertitle: 'kalyani_neighbourhood__neighbourhood_05',
                interactive: true,
                title: '<img src="styles/legend/kalyani_neighbourhood__neighbourhood_05_2.png" /> kalyani_neighbourhood__neighbourhood_05'
            });
var format_kalyani_roadsroad_3 = new ol.format.GeoJSON();
var features_kalyani_roadsroad_3 = format_kalyani_roadsroad_3.readFeatures(json_kalyani_roadsroad_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kalyani_roadsroad_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kalyani_roadsroad_3.addFeatures(features_kalyani_roadsroad_3);
var lyr_kalyani_roadsroad_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kalyani_roadsroad_3, 
                style: style_kalyani_roadsroad_3,
                popuplayertitle: 'kalyani_roads — road',
                interactive: true,
                title: '<img src="styles/legend/kalyani_roadsroad_3.png" /> kalyani_roads — road'
            });
var format_kalyani_vegetationtree_4 = new ol.format.GeoJSON();
var features_kalyani_vegetationtree_4 = format_kalyani_vegetationtree_4.readFeatures(json_kalyani_vegetationtree_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kalyani_vegetationtree_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kalyani_vegetationtree_4.addFeatures(features_kalyani_vegetationtree_4);
cluster_kalyani_vegetationtree_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_kalyani_vegetationtree_4
});
var lyr_kalyani_vegetationtree_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_kalyani_vegetationtree_4, 
                style: style_kalyani_vegetationtree_4,
                popuplayertitle: 'kalyani_vegetation — tree',
                interactive: true,
                title: '<img src="styles/legend/kalyani_vegetationtree_4.png" /> kalyani_vegetation — tree'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_kalyani_buildingsbuilding_main_bu_1.setVisible(true);lyr_kalyani_neighbourhood__neighbourhood_05_2.setVisible(true);lyr_kalyani_roadsroad_3.setVisible(true);lyr_kalyani_vegetationtree_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_kalyani_buildingsbuilding_main_bu_1,lyr_kalyani_neighbourhood__neighbourhood_05_2,lyr_kalyani_roadsroad_3,lyr_kalyani_vegetationtree_4];
lyr_kalyani_buildingsbuilding_main_bu_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'bldg_id': 'bldg_id', 'bldg_use': 'bldg_use', 'wall_ml': 'wall_ml', 'bldg_ht': 'bldg_ht', 'bldg_flr': 'bldg_flr', 'bldg_clr': 'bldg_clr', 'roof_ml': 'roof_ml', 'bldg_fp': 'bldg_fp', 'no_hh': 'no_hh', 'cool_sys': 'cool_sys', 'bldg_cond': 'bldg_cond', 'bldg_area': 'bldg_area', });
lyr_kalyani_neighbourhood__neighbourhood_05_2.set('fieldAliases', {'fid': 'fid', 'nei_id': 'nei_id', 'name': 'name', 'typo': 'typo', 'area': 'area', 'no_bldg': 'no_bldg', 'pop': 'pop', 'density': 'density', });
lyr_kalyani_roadsroad_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'ro_name': 'ro_name', 'ro_width': 'ro_width', 'ro_ml': 'ro_ml', 'ro_typo': 'ro_typo', });
lyr_kalyani_vegetationtree_4.set('fieldAliases', {'fid': 'fid', 'veg_id': 'veg_id', 'name': 'name', 'girth_rad': 'girth_rad', 'crown_rad': 'crown_rad', 'species': 'species', 'seas_type': 'seas_type', 'flaura_typ': 'flaura_typ', });
lyr_kalyani_buildingsbuilding_main_bu_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'bldg_id': 'TextEdit', 'bldg_use': 'TextEdit', 'wall_ml': 'TextEdit', 'bldg_ht': 'TextEdit', 'bldg_flr': 'TextEdit', 'bldg_clr': 'TextEdit', 'roof_ml': 'TextEdit', 'bldg_fp': 'TextEdit', 'no_hh': 'TextEdit', 'cool_sys': 'TextEdit', 'bldg_cond': 'TextEdit', 'bldg_area': 'TextEdit', });
lyr_kalyani_neighbourhood__neighbourhood_05_2.set('fieldImages', {'fid': 'TextEdit', 'nei_id': 'TextEdit', 'name': 'TextEdit', 'typo': 'TextEdit', 'area': 'TextEdit', 'no_bldg': 'TextEdit', 'pop': 'TextEdit', 'density': 'TextEdit', });
lyr_kalyani_roadsroad_3.set('fieldImages', {'fid': '', 'id': '', 'ro_name': '', 'ro_width': '', 'ro_ml': '', 'ro_typo': '', });
lyr_kalyani_vegetationtree_4.set('fieldImages', {'fid': '', 'veg_id': '', 'name': '', 'girth_rad': '', 'crown_rad': '', 'species': '', 'seas_type': '', 'flaura_typ': '', });
lyr_kalyani_buildingsbuilding_main_bu_1.set('fieldLabels', {'fid': 'inline label - always visible', 'id': 'inline label - always visible', 'bldg_id': 'inline label - always visible', 'bldg_use': 'inline label - always visible', 'wall_ml': 'inline label - always visible', 'bldg_ht': 'inline label - always visible', 'bldg_flr': 'inline label - always visible', 'bldg_clr': 'inline label - always visible', 'roof_ml': 'inline label - always visible', 'bldg_fp': 'inline label - always visible', 'no_hh': 'inline label - always visible', 'cool_sys': 'inline label - always visible', 'bldg_cond': 'inline label - always visible', 'bldg_area': 'inline label - always visible', });
lyr_kalyani_neighbourhood__neighbourhood_05_2.set('fieldLabels', {'fid': 'inline label - always visible', 'nei_id': 'inline label - always visible', 'name': 'inline label - always visible', 'typo': 'inline label - always visible', 'area': 'inline label - always visible', 'no_bldg': 'inline label - always visible', 'pop': 'inline label - always visible', 'density': 'inline label - always visible', });
lyr_kalyani_roadsroad_3.set('fieldLabels', {'fid': 'inline label - always visible', 'id': 'inline label - always visible', 'ro_name': 'inline label - always visible', 'ro_width': 'inline label - always visible', 'ro_ml': 'inline label - always visible', 'ro_typo': 'inline label - always visible', });
lyr_kalyani_vegetationtree_4.set('fieldLabels', {'fid': 'inline label - always visible', 'veg_id': 'inline label - always visible', 'name': 'inline label - always visible', 'girth_rad': 'inline label - always visible', 'crown_rad': 'inline label - always visible', 'species': 'inline label - always visible', 'seas_type': 'inline label - always visible', 'flaura_typ': 'inline label - always visible', });
lyr_kalyani_vegetationtree_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});