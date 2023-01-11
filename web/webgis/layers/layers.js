ol.proj.get("EPSG:4326").setExtent([105.372691, -6.854856, 109.815278, -4.601739]);
var wms_layers = [];
var format_wilayah_0 = new ol.format.GeoJSON();
var features_wilayah_0 = format_wilayah_0.readFeatures(json_wilayah_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_wilayah_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_wilayah_0.addFeatures(features_wilayah_0);var lyr_wilayah_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_wilayah_0, 
                style: style_wilayah_0,
    title: 'wilayah<br />\
    <img src="styles/legend/wilayah_0_0.png" /> Bandung<br />\
    <img src="styles/legend/wilayah_0_1.png" /> BandungBarat<br />\
    <img src="styles/legend/wilayah_0_2.png" /> Bogor<br />\
    <img src="styles/legend/wilayah_0_3.png" /> Ciamis<br />\
    <img src="styles/legend/wilayah_0_4.png" /> Cianjur<br />\
    <img src="styles/legend/wilayah_0_5.png" /> Cirebon<br />\
    <img src="styles/legend/wilayah_0_6.png" /> Garut<br />\
    <img src="styles/legend/wilayah_0_7.png" /> Indramayu<br />\
    <img src="styles/legend/wilayah_0_8.png" /> Karawang<br />\
    <img src="styles/legend/wilayah_0_9.png" /> KotaBandung<br />\
    <img src="styles/legend/wilayah_0_10.png" /> KotaBanjar<br />\
    <img src="styles/legend/wilayah_0_11.png" /> KotaBogor<br />\
    <img src="styles/legend/wilayah_0_12.png" /> KotaCimahi<br />\
    <img src="styles/legend/wilayah_0_13.png" /> KotaCirebon<br />\
    <img src="styles/legend/wilayah_0_14.png" /> KotaDepok<br />\
    <img src="styles/legend/wilayah_0_15.png" /> KotaSukabumi<br />\
    <img src="styles/legend/wilayah_0_16.png" /> KotaTasikmalaya<br />\
    <img src="styles/legend/wilayah_0_17.png" /> Kuningan<br />\
    <img src="styles/legend/wilayah_0_18.png" /> Majalengka<br />\
    <img src="styles/legend/wilayah_0_19.png" /> Pangandaran<br />\
    <img src="styles/legend/wilayah_0_20.png" /> Purwakarta<br />\
    <img src="styles/legend/wilayah_0_21.png" /> Subang<br />\
    <img src="styles/legend/wilayah_0_22.png" /> Sukabumi<br />\
    <img src="styles/legend/wilayah_0_23.png" /> Sumedang<br />\
    <img src="styles/legend/wilayah_0_24.png" /> Tasikmalaya<br />\
    <img src="styles/legend/wilayah_0_25.png" /> <br />'
        });

lyr_wilayah_0.setVisible(true);
var layersList = [lyr_wilayah_0];
lyr_wilayah_0.set('fieldAliases', {'id': 'id', 'nama_wil': 'nama_wil', 'tahun': 'tahun', 'jumlah': 'jumlah', });
lyr_wilayah_0.set('fieldImages', {'id': 'TextEdit', 'nama_wil': 'TextEdit', 'tahun': 'TextEdit', 'jumlah': 'TextEdit', });
lyr_wilayah_0.set('fieldLabels', {'id': 'inline label', 'nama_wil': 'inline label', 'tahun': 'inline label', 'jumlah': 'inline label', });
lyr_wilayah_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});