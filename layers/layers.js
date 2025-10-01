var wms_layers = [];


        var lyr_CartoLight_0 = new ol.layer.Tile({
            'title': 'Carto Light',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });

        var lyr_CartoDark_1 = new ol.layer.Tile({
            'title': 'Carto Dark',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var format_kalyani_plotboundaryplot_140725_2 = new ol.format.GeoJSON();
var features_kalyani_plotboundaryplot_140725_2 = format_kalyani_plotboundaryplot_140725_2.readFeatures(json_kalyani_plotboundaryplot_140725_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kalyani_plotboundaryplot_140725_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kalyani_plotboundaryplot_140725_2.addFeatures(features_kalyani_plotboundaryplot_140725_2);
var lyr_kalyani_plotboundaryplot_140725_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kalyani_plotboundaryplot_140725_2, 
                style: style_kalyani_plotboundaryplot_140725_2,
                popuplayertitle: 'kalyani_plotboundary — plot_140725',
                interactive: true,
                title: '<img src="styles/legend/kalyani_plotboundaryplot_140725_2.png" /> kalyani_plotboundary — plot_140725'
            });
var format_kalyani_waterbodywaterway_140725_3 = new ol.format.GeoJSON();
var features_kalyani_waterbodywaterway_140725_3 = format_kalyani_waterbodywaterway_140725_3.readFeatures(json_kalyani_waterbodywaterway_140725_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kalyani_waterbodywaterway_140725_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kalyani_waterbodywaterway_140725_3.addFeatures(features_kalyani_waterbodywaterway_140725_3);
var lyr_kalyani_waterbodywaterway_140725_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kalyani_waterbodywaterway_140725_3, 
                style: style_kalyani_waterbodywaterway_140725_3,
                popuplayertitle: 'kalyani_waterbody — waterway_140725',
                interactive: true,
                title: '<img src="styles/legend/kalyani_waterbodywaterway_140725_3.png" /> kalyani_waterbody — waterway_140725'
            });
var format_kalyani_buildingsbuilding_main_bu_4 = new ol.format.GeoJSON();
var features_kalyani_buildingsbuilding_main_bu_4 = format_kalyani_buildingsbuilding_main_bu_4.readFeatures(json_kalyani_buildingsbuilding_main_bu_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kalyani_buildingsbuilding_main_bu_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kalyani_buildingsbuilding_main_bu_4.addFeatures(features_kalyani_buildingsbuilding_main_bu_4);
var lyr_kalyani_buildingsbuilding_main_bu_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kalyani_buildingsbuilding_main_bu_4, 
                style: style_kalyani_buildingsbuilding_main_bu_4,
                popuplayertitle: 'kalyani_buildings — building_main_bu',
                interactive: true,
                title: '<img src="styles/legend/kalyani_buildingsbuilding_main_bu_4.png" /> kalyani_buildings — building_main_bu'
            });
var format_kalyani_roadsroad_5 = new ol.format.GeoJSON();
var features_kalyani_roadsroad_5 = format_kalyani_roadsroad_5.readFeatures(json_kalyani_roadsroad_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kalyani_roadsroad_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kalyani_roadsroad_5.addFeatures(features_kalyani_roadsroad_5);
var lyr_kalyani_roadsroad_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kalyani_roadsroad_5, 
                style: style_kalyani_roadsroad_5,
                popuplayertitle: 'kalyani_roads — road',
                interactive: true,
                title: '<img src="styles/legend/kalyani_roadsroad_5.png" /> kalyani_roads — road'
            });
var format_kalyani_vegetationtree_6 = new ol.format.GeoJSON();
var features_kalyani_vegetationtree_6 = format_kalyani_vegetationtree_6.readFeatures(json_kalyani_vegetationtree_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kalyani_vegetationtree_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kalyani_vegetationtree_6.addFeatures(features_kalyani_vegetationtree_6);
cluster_kalyani_vegetationtree_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_kalyani_vegetationtree_6
});
var lyr_kalyani_vegetationtree_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_kalyani_vegetationtree_6, 
                style: style_kalyani_vegetationtree_6,
                popuplayertitle: 'kalyani_vegetation — tree',
                interactive: true,
                title: '<img src="styles/legend/kalyani_vegetationtree_6.png" /> kalyani_vegetation — tree'
            });
var format_kalyani_neighbourhood__neighbourhood_05_7 = new ol.format.GeoJSON();
var features_kalyani_neighbourhood__neighbourhood_05_7 = format_kalyani_neighbourhood__neighbourhood_05_7.readFeatures(json_kalyani_neighbourhood__neighbourhood_05_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kalyani_neighbourhood__neighbourhood_05_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kalyani_neighbourhood__neighbourhood_05_7.addFeatures(features_kalyani_neighbourhood__neighbourhood_05_7);
var lyr_kalyani_neighbourhood__neighbourhood_05_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kalyani_neighbourhood__neighbourhood_05_7, 
                style: style_kalyani_neighbourhood__neighbourhood_05_7,
                popuplayertitle: 'kalyani_neighbourhood__neighbourhood_05',
                interactive: true,
                title: '<img src="styles/legend/kalyani_neighbourhood__neighbourhood_05_7.png" /> kalyani_neighbourhood__neighbourhood_05'
            });

lyr_CartoLight_0.setVisible(true);lyr_CartoDark_1.setVisible(false);lyr_kalyani_plotboundaryplot_140725_2.setVisible(true);lyr_kalyani_waterbodywaterway_140725_3.setVisible(true);lyr_kalyani_buildingsbuilding_main_bu_4.setVisible(true);lyr_kalyani_roadsroad_5.setVisible(true);lyr_kalyani_vegetationtree_6.setVisible(true);lyr_kalyani_neighbourhood__neighbourhood_05_7.setVisible(true);
var layersList = [lyr_CartoLight_0,lyr_CartoDark_1,lyr_kalyani_plotboundaryplot_140725_2,lyr_kalyani_waterbodywaterway_140725_3,lyr_kalyani_buildingsbuilding_main_bu_4,lyr_kalyani_roadsroad_5,lyr_kalyani_vegetationtree_6,lyr_kalyani_neighbourhood__neighbourhood_05_7];
lyr_kalyani_plotboundaryplot_140725_2.set('fieldAliases', {'fid': 'fid', 'plot_id': 'plot_id', 'survey_no': 'survey_no', 'land_use': 'land_use', 'area': 'area', 'fsi': 'fsi', 'con_site': 'con_site', });
lyr_kalyani_waterbodywaterway_140725_3.set('fieldAliases', {'fid': 'fid', 'wt_id': 'wt_id', 'width': 'width', 'type': 'type', 'wt_ed': 'wt_ed', 'area': 'area', });
lyr_kalyani_buildingsbuilding_main_bu_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'bldg_id': 'bldg_id', 'bldg_use': 'bldg_use', 'wall_ml': 'wall_ml', 'bldg_ht': 'bldg_ht', 'bldg_flr': 'bldg_flr', 'bldg_clr': 'bldg_clr', 'roof_ml': 'roof_ml', 'bldg_fp': 'bldg_fp', 'no_hh': 'no_hh', 'cool_sys': 'cool_sys', 'bldg_cond': 'bldg_cond', 'bldg_area': 'bldg_area', });
lyr_kalyani_roadsroad_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'ro_name': 'ro_name', 'ro_width': 'ro_width', 'ro_ml': 'ro_ml', 'ro_typo': 'ro_typo', });
lyr_kalyani_vegetationtree_6.set('fieldAliases', {'fid': 'fid', 'veg_id': 'veg_id', 'name': 'name', 'girth_rad': 'girth_rad', 'crown_rad': 'crown_rad', 'species': 'species', 'seas_type': 'seas_type', 'flaura_typ': 'flaura_typ', });
lyr_kalyani_neighbourhood__neighbourhood_05_7.set('fieldAliases', {'fid': 'fid', 'nei_id': 'nei_id', 'name': 'name', 'typo': 'typo', 'area': 'area', 'no_bldg': 'no_bldg', 'pop': 'pop', 'density': 'density', });
lyr_kalyani_plotboundaryplot_140725_2.set('fieldImages', {'fid': 'TextEdit', 'plot_id': 'TextEdit', 'survey_no': 'TextEdit', 'land_use': 'TextEdit', 'area': 'TextEdit', 'fsi': 'TextEdit', 'con_site': 'TextEdit', });
lyr_kalyani_waterbodywaterway_140725_3.set('fieldImages', {'fid': 'TextEdit', 'wt_id': 'TextEdit', 'width': 'TextEdit', 'type': 'TextEdit', 'wt_ed': 'TextEdit', 'area': 'TextEdit', });
lyr_kalyani_buildingsbuilding_main_bu_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'bldg_id': 'TextEdit', 'bldg_use': 'TextEdit', 'wall_ml': 'TextEdit', 'bldg_ht': 'TextEdit', 'bldg_flr': 'TextEdit', 'bldg_clr': 'TextEdit', 'roof_ml': 'TextEdit', 'bldg_fp': 'TextEdit', 'no_hh': 'TextEdit', 'cool_sys': 'TextEdit', 'bldg_cond': 'TextEdit', 'bldg_area': 'TextEdit', });
lyr_kalyani_roadsroad_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'ro_name': 'TextEdit', 'ro_width': 'TextEdit', 'ro_ml': 'TextEdit', 'ro_typo': 'TextEdit', });
lyr_kalyani_vegetationtree_6.set('fieldImages', {'fid': 'TextEdit', 'veg_id': 'TextEdit', 'name': 'TextEdit', 'girth_rad': 'TextEdit', 'crown_rad': 'TextEdit', 'species': 'TextEdit', 'seas_type': 'TextEdit', 'flaura_typ': 'TextEdit', });
lyr_kalyani_neighbourhood__neighbourhood_05_7.set('fieldImages', {'fid': 'TextEdit', 'nei_id': 'TextEdit', 'name': 'TextEdit', 'typo': 'TextEdit', 'area': 'TextEdit', 'no_bldg': 'TextEdit', 'pop': 'TextEdit', 'density': 'TextEdit', });
lyr_kalyani_plotboundaryplot_140725_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'plot_id': 'inline label - visible with data', 'survey_no': 'inline label - visible with data', 'land_use': 'inline label - visible with data', 'area': 'inline label - visible with data', 'fsi': 'inline label - visible with data', 'con_site': 'inline label - visible with data', });
lyr_kalyani_waterbodywaterway_140725_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'wt_id': 'inline label - visible with data', 'width': 'inline label - visible with data', 'type': 'inline label - visible with data', 'wt_ed': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_kalyani_buildingsbuilding_main_bu_4.set('fieldLabels', {'fid': 'inline label - visible with data', 'id': 'inline label - visible with data', 'bldg_id': 'inline label - visible with data', 'bldg_use': 'inline label - visible with data', 'wall_ml': 'inline label - visible with data', 'bldg_ht': 'inline label - visible with data', 'bldg_flr': 'inline label - visible with data', 'bldg_clr': 'inline label - visible with data', 'roof_ml': 'inline label - visible with data', 'bldg_fp': 'inline label - visible with data', 'no_hh': 'inline label - visible with data', 'cool_sys': 'inline label - visible with data', 'bldg_cond': 'inline label - visible with data', 'bldg_area': 'inline label - visible with data', });
lyr_kalyani_roadsroad_5.set('fieldLabels', {'fid': 'inline label - visible with data', 'id': 'inline label - visible with data', 'ro_name': 'inline label - visible with data', 'ro_width': 'inline label - visible with data', 'ro_ml': 'inline label - visible with data', 'ro_typo': 'inline label - visible with data', });
lyr_kalyani_vegetationtree_6.set('fieldLabels', {'fid': 'inline label - visible with data', 'veg_id': 'inline label - visible with data', 'name': 'inline label - visible with data', 'girth_rad': 'inline label - visible with data', 'crown_rad': 'inline label - visible with data', 'species': 'inline label - visible with data', 'seas_type': 'inline label - visible with data', 'flaura_typ': 'inline label - visible with data', });
lyr_kalyani_neighbourhood__neighbourhood_05_7.set('fieldLabels', {'fid': 'inline label - visible with data', 'nei_id': 'inline label - visible with data', 'name': 'inline label - visible with data', 'typo': 'inline label - visible with data', 'area': 'inline label - visible with data', 'no_bldg': 'inline label - visible with data', 'pop': 'inline label - visible with data', 'density': 'inline label - visible with data', });
lyr_kalyani_neighbourhood__neighbourhood_05_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});