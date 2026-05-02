var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_TitikPangkalan_1 = new ol.format.GeoJSON();
var features_TitikPangkalan_1 = format_TitikPangkalan_1.readFeatures(json_TitikPangkalan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikPangkalan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikPangkalan_1.addFeatures(features_TitikPangkalan_1);
cluster_TitikPangkalan_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_TitikPangkalan_1
});
var lyr_TitikPangkalan_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_TitikPangkalan_1, 
                style: style_TitikPangkalan_1,
                popuplayertitle: 'Titik Pangkalan',
                interactive: true,
                title: '<img src="styles/legend/TitikPangkalan_1.png" /> Titik Pangkalan'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_TitikPangkalan_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_TitikPangkalan_1];
lyr_TitikPangkalan_1.set('fieldAliases', {'No': 'No', 'Nama Agen': 'Nama Agen', 'Nama Pangk': 'Nama Pangk', 'No KTP Pem': 'No KTP Pem', 'No HP Pang': 'No HP Pang', 'Kota / Kab': 'Kota / Kab', 'Kecamatan': 'Kecamatan', 'Kelurahan/': 'Kelurahan/', 'Kode Pos': 'Kode Pos', 'Alamat Pan': 'Alamat Pan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_TitikPangkalan_1.set('fieldImages', {'No': 'TextEdit', 'Nama Agen': 'TextEdit', 'Nama Pangk': 'TextEdit', 'No KTP Pem': 'TextEdit', 'No HP Pang': 'TextEdit', 'Kota / Kab': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan/': 'TextEdit', 'Kode Pos': 'TextEdit', 'Alamat Pan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_TitikPangkalan_1.set('fieldLabels', {'No': 'inline label - always visible', 'Nama Agen': 'inline label - always visible', 'Nama Pangk': 'inline label - always visible', 'No KTP Pem': 'inline label - always visible', 'No HP Pang': 'inline label - always visible', 'Kota / Kab': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Kelurahan/': 'inline label - always visible', 'Kode Pos': 'inline label - always visible', 'Alamat Pan': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_TitikPangkalan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});