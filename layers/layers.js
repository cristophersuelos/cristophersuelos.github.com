ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-72.290190, 4.619733, -58.184195, 11.785952]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Cdigosdeunidades_1 = new ol.format.GeoJSON();
var features_Cdigosdeunidades_1 = format_Cdigosdeunidades_1.readFeatures(json_Cdigosdeunidades_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Cdigosdeunidades_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cdigosdeunidades_1.addFeatures(features_Cdigosdeunidades_1);
var lyr_Cdigosdeunidades_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cdigosdeunidades_1, 
                style: style_Cdigosdeunidades_1,
                interactive: true,
    title: 'Códigos de unidades<br />\
    <img src="styles/legend/Cdigosdeunidades_1_0.png" /> AA<br />\
    <img src="styles/legend/Cdigosdeunidades_1_1.png" /> AC<br />\
    <img src="styles/legend/Cdigosdeunidades_1_2.png" /> ACO<br />\
    <img src="styles/legend/Cdigosdeunidades_1_3.png" /> AO1<br />\
    <img src="styles/legend/Cdigosdeunidades_1_4.png" /> AO2<br />\
    <img src="styles/legend/Cdigosdeunidades_1_5.png" /> AO3<br />\
    <img src="styles/legend/Cdigosdeunidades_1_6.png" /> C0<br />\
    <img src="styles/legend/Cdigosdeunidades_1_7.png" /> C1<br />\
    <img src="styles/legend/Cdigosdeunidades_1_8.png" /> C2<br />\
    <img src="styles/legend/Cdigosdeunidades_1_9.png" /> C3<br />\
    <img src="styles/legend/Cdigosdeunidades_1_10.png" /> C4<br />\
    <img src="styles/legend/Cdigosdeunidades_1_11.png" /> C5<br />\
    <img src="styles/legend/Cdigosdeunidades_1_12.png" /> C6<br />\
    <img src="styles/legend/Cdigosdeunidades_1_13.png" /> PA1<br />\
    <img src="styles/legend/Cdigosdeunidades_1_14.png" /> PA2<br />\
    <img src="styles/legend/Cdigosdeunidades_1_15.png" /> PA3<br />\
    <img src="styles/legend/Cdigosdeunidades_1_16.png" /> PA4<br />\
    <img src="styles/legend/Cdigosdeunidades_1_17.png" /> PA5<br />\
    <img src="styles/legend/Cdigosdeunidades_1_18.png" /> PL<br />\
    <img src="styles/legend/Cdigosdeunidades_1_19.png" /> PM1<br />\
    <img src="styles/legend/Cdigosdeunidades_1_20.png" /> PM2<br />\
    <img src="styles/legend/Cdigosdeunidades_1_21.png" /> PP1<br />\
    <img src="styles/legend/Cdigosdeunidades_1_22.png" /> PP2<br />\
    <img src="styles/legend/Cdigosdeunidades_1_23.png" /> PP3<br />\
    <img src="styles/legend/Cdigosdeunidades_1_24.png" /> PP4<br />\
    <img src="styles/legend/Cdigosdeunidades_1_25.png" /> PP5<br />\
    <img src="styles/legend/Cdigosdeunidades_1_26.png" /> PP6<br />\
    <img src="styles/legend/Cdigosdeunidades_1_27.png" /> PP7<br />\
    <img src="styles/legend/Cdigosdeunidades_1_28.png" /> PP8<br />\
    <img src="styles/legend/Cdigosdeunidades_1_29.png" /> PP9<br />\
    <img src="styles/legend/Cdigosdeunidades_1_30.png" /> PR1<br />\
    <img src="styles/legend/Cdigosdeunidades_1_31.png" /> PR2<br />\
    <img src="styles/legend/Cdigosdeunidades_1_32.png" /> PR3<br />\
    <img src="styles/legend/Cdigosdeunidades_1_33.png" /> PR4<br />\
    <img src="styles/legend/Cdigosdeunidades_1_34.png" /> PR5<br />\
    <img src="styles/legend/Cdigosdeunidades_1_35.png" /> PR6<br />\
    <img src="styles/legend/Cdigosdeunidades_1_36.png" /> PR7<br />\
    <img src="styles/legend/Cdigosdeunidades_1_37.png" /> PR8<br />\
    <img src="styles/legend/Cdigosdeunidades_1_38.png" /> PRP<br />\
    <img src="styles/legend/Cdigosdeunidades_1_39.png" /> T1<br />\
    <img src="styles/legend/Cdigosdeunidades_1_40.png" /> T2<br />\
    <img src="styles/legend/Cdigosdeunidades_1_41.png" /> T3<br />\
    <img src="styles/legend/Cdigosdeunidades_1_42.png" /> T4<br />'
        });
var format_Troncales_2 = new ol.format.GeoJSON();
var features_Troncales_2 = format_Troncales_2.readFeatures(json_Troncales_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Troncales_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Troncales_2.addFeatures(features_Troncales_2);
var lyr_Troncales_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Troncales_2, 
                style: style_Troncales_2,
                interactive: true,
                title: '<img src="styles/legend/Troncales_2.png" /> Troncales'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Cdigosdeunidades_1.setVisible(true);lyr_Troncales_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Cdigosdeunidades_1,lyr_Troncales_2];
lyr_Cdigosdeunidades_1.set('fieldAliases', {'CO_UNIDAD_': 'CO_UNIDAD_', 'PERIMETER': 'PERIMETER', 'HECTARES': 'HECTARES', 'Area_Km2': 'Area_Km2', 'Area (km2)': 'Area (km2)', });
lyr_Troncales_2.set('fieldAliases', {'Tipo_vía': 'Tipo_vía', });
lyr_Cdigosdeunidades_1.set('fieldImages', {'CO_UNIDAD_': 'TextEdit', 'PERIMETER': 'Hidden', 'HECTARES': 'Hidden', 'Area_Km2': 'Hidden', 'Area (km2)': 'TextEdit', });
lyr_Troncales_2.set('fieldImages', {'Tipo_vía': 'TextEdit', });
lyr_Cdigosdeunidades_1.set('fieldLabels', {'CO_UNIDAD_': 'no label', 'Area (km2)': 'no label', });
lyr_Troncales_2.set('fieldLabels', {'Tipo_vía': 'no label', });
lyr_Troncales_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});