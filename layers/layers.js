ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([93.820708, -15.801101, 142.171245, 10.870436]);
var wms_layers = [];


        var lyr_WorldOcean_0 = new ol.layer.Tile({
            'title': 'World Ocean',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_WorldBoundariesandPlaces_1 = new ol.layer.Tile({
            'title': 'World Boundaries and Places',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_PuSGeN2024_Megahtrust_v4_Map_2 = new ol.format.GeoJSON();
var features_PuSGeN2024_Megahtrust_v4_Map_2 = format_PuSGeN2024_Megahtrust_v4_Map_2.readFeatures(json_PuSGeN2024_Megahtrust_v4_Map_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PuSGeN2024_Megahtrust_v4_Map_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuSGeN2024_Megahtrust_v4_Map_2.addFeatures(features_PuSGeN2024_Megahtrust_v4_Map_2);
var lyr_PuSGeN2024_Megahtrust_v4_Map_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuSGeN2024_Megahtrust_v4_Map_2, 
                style: style_PuSGeN2024_Megahtrust_v4_Map_2,
                popuplayertitle: 'PuSGeN2024_Megahtrust_v4_Map',
                interactive: true,
                title: '<img src="styles/legend/PuSGeN2024_Megahtrust_v4_Map_2.png" /> PuSGeN2024_Megahtrust_v4_Map'
            });
var format_Slab_3 = new ol.format.GeoJSON();
var features_Slab_3 = format_Slab_3.readFeatures(json_Slab_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Slab_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Slab_3.addFeatures(features_Slab_3);
var lyr_Slab_3 = new ol.layer.Vector({
    declutter: false,
    source:jsonSource_Slab_3,
    style: style_Slab_3,
    popuplayertitle: 'Slab',
    interactive: true,
    title: 'Slab'
});
var lyr_Topography_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Topography<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Topography_4.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [94.975000, -11.004167, 141.016667, 6.075000]
        })
    });
var format_BatasAdministrasi_5 = new ol.format.GeoJSON();
var features_BatasAdministrasi_5 = format_BatasAdministrasi_5.readFeatures(json_BatasAdministrasi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BatasAdministrasi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasi_5.addFeatures(features_BatasAdministrasi_5);
var lyr_BatasAdministrasi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasi_5, 
                style: style_BatasAdministrasi_5,
                popuplayertitle: 'Batas Administrasi',
                interactive: false,
                title: '<img src="styles/legend/BatasAdministrasi_5.png" /> Batas Administrasi'
            });
var format_Subduction_Trench_6 = new ol.format.GeoJSON();
var features_Subduction_Trench_6 = format_Subduction_Trench_6.readFeatures(json_Subduction_Trench_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Subduction_Trench_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Subduction_Trench_6.addFeatures(features_Subduction_Trench_6);
var lyr_Subduction_Trench_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Subduction_Trench_6, 
                style: style_Subduction_Trench_6,
                popuplayertitle: 'Subduction_Trench',
                interactive: false,
                title: '<img src="styles/legend/Subduction_Trench_6.png" /> Subduction_Trench'
            });
var format_TheGEMGlobalActiveFaults_7 = new ol.format.GeoJSON();
var features_TheGEMGlobalActiveFaults_7 = format_TheGEMGlobalActiveFaults_7.readFeatures(json_TheGEMGlobalActiveFaults_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TheGEMGlobalActiveFaults_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TheGEMGlobalActiveFaults_7.addFeatures(features_TheGEMGlobalActiveFaults_7);
var lyr_TheGEMGlobalActiveFaults_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TheGEMGlobalActiveFaults_7, 
                style: style_TheGEMGlobalActiveFaults_7,
                popuplayertitle: 'The GEM Global Active Faults',
                interactive: true,
                title: '<img src="styles/legend/TheGEMGlobalActiveFaults_7.png" /> The GEM Global Active Faults'
            });
var format_PSG_PULAUJAWA_8 = new ol.format.GeoJSON();
var features_PSG_PULAUJAWA_8 = format_PSG_PULAUJAWA_8.readFeatures(json_PSG_PULAUJAWA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PSG_PULAUJAWA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSG_PULAUJAWA_8.addFeatures(features_PSG_PULAUJAWA_8);
var lyr_PSG_PULAUJAWA_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PSG_PULAUJAWA_8, 
                style: style_PSG_PULAUJAWA_8,
                popuplayertitle: 'PSG_PULAU JAWA',
                interactive: true,
                title: '<img src="styles/legend/PSG_PULAUJAWA_8.png" /> PSG_PULAU JAWA'
            });
var format_PSG_2024_9 = new ol.format.GeoJSON();
var features_PSG_2024_9 = format_PSG_2024_9.readFeatures(json_PSG_2024_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PSG_2024_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSG_2024_9.addFeatures(features_PSG_2024_9);
var lyr_PSG_2024_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PSG_2024_9, 
                style: style_PSG_2024_9,
                popuplayertitle: 'PSG_2024',
                interactive: true,
                title: '<img src="styles/legend/PSG_2024_9.png" /> PSG_2024'
            });
var format_PusGeN2024_10 = new ol.format.GeoJSON();
var features_PusGeN2024_10 = format_PusGeN2024_10.readFeatures(json_PusGeN2024_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PusGeN2024_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PusGeN2024_10.addFeatures(features_PusGeN2024_10);
var lyr_PusGeN2024_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PusGeN2024_10, 
                style: style_PusGeN2024_10,
                popuplayertitle: 'PusGeN 2024',
                interactive: true,
                title: '<img src="styles/legend/PusGeN2024_10.png" /> PusGeN 2024'
            });

lyr_WorldOcean_0.setVisible(true);lyr_WorldBoundariesandPlaces_1.setVisible(true);lyr_PuSGeN2024_Megahtrust_v4_Map_2.setVisible(false);lyr_Slab_3.setVisible(false);lyr_Topography_4.setVisible(false);lyr_BatasAdministrasi_5.setVisible(true);lyr_Subduction_Trench_6.setVisible(true);lyr_TheGEMGlobalActiveFaults_7.setVisible(false);lyr_PSG_PULAUJAWA_8.setVisible(false);lyr_PSG_2024_9.setVisible(false);lyr_PusGeN2024_10.setVisible(false);
var layersList = [lyr_WorldOcean_0,lyr_WorldBoundariesandPlaces_1,lyr_PuSGeN2024_Megahtrust_v4_Map_2,lyr_Slab_3,lyr_Topography_4,lyr_BatasAdministrasi_5,lyr_Subduction_Trench_6,lyr_TheGEMGlobalActiveFaults_7,lyr_PSG_PULAUJAWA_8,lyr_PSG_2024_9,lyr_PusGeN2024_10];
lyr_PuSGeN2024_Megahtrust_v4_Map_2.set('fieldAliases', {'fid': 'fid', 'OID_': 'OID_', 'Name': 'Nama Segmen', 'SymbolID': 'SymbolID', 'Trench_len': 'Trench_len', 'Slab_lengt': 'Slab_lengt', 'left_width': 'left_width', 'Right_widt': 'Right_widt', 'av_length': 'av_length', 'av_width': 'av_width', 'ar_auto': 'ar_auto', 'ar_LxW': 'ar_LxW', 'Remark': 'Remark', 'Dip': 'Dip', 'MMax': 'MMax', 'Periode_ul': 'Periode_ul', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', 'layer': 'Sumber', 'path': 'path', });
lyr_Slab_3.set('fieldAliases', {'DEPTH': 'DEPTH', 'REGION': 'REGION', 'layer': 'layer', 'path': 'path', });
lyr_BatasAdministrasi_5.set('fieldAliases', {'fid': 'fid', 'WADMPR': 'Region', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'Shape Area', 'Scale': 'Scale', 'PULAU': 'PULAU', });
lyr_Subduction_Trench_6.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'TrenchName': 'TrenchName', 'Remarks': 'Remarks', });
lyr_TheGEMGlobalActiveFaults_7.set('fieldAliases', {'fid': 'fid', 'WKT_GEOMETRY': 'WKT_GEOMETRY', 'accuracy': 'accuracy', 'activity_confidence': 'activity_confidence', 'average_dip': 'average_dip', 'average_rake': 'average_rake', 'catalog_id': 'catalog_id', 'catalog_name': 'catalog_name', 'dip_dir': 'dip_dir', 'downthrown_side_dir': 'downthrown_side_dir', 'downthrown_side_id': 'downthrown_side_id', 'epistemic_quality': 'epistemic_quality', 'exposure_quality': 'exposure_quality', 'fs_name': 'fs_name', 'is_active': 'is_active', 'last_movement': 'last_movement', 'lower_seis_depth': 'lower_seis_depth', 'name': 'Nama Sesar', 'net_slip_rate': 'net_slip_rate', 'notes': 'notes', 'ogc_fid': 'ogc_fid', 'reference': 'reference', 'shortening_rate': 'shortening_rate', 'slip_type': 'Tipe Sesar', 'strike_slip_rate': 'strike_slip_rate', 'upper_seis_depth': 'upper_seis_depth', 'vert_sep_rate': 'vert_sep_rate', 'Sumber': 'Sumber', });
lyr_PSG_PULAUJAWA_8.set('fieldAliases', {'objectid_1': 'objectid_1', 'objectid': 'objectid', 'layer': 'layer', 'nomor_pata': 'Nomer Sesar', 'nama_patah': 'Nama Sesar', 'jenis_pata': 'Tipe Sesar', 'panjang_zo': 'panjang_zo', 'tempat': 'Lokasi', 'arah_patah': 'Arah Sesar', 'geologi': 'geologi', 'sejarah_ke': 'sejarah_ke', 'st_length_': 'Panjang Sesar (km)', 'st_length(': 'st_length(', 'Sumber': 'Sumber', });
lyr_PSG_2024_9.set('fieldAliases', {'objectid_1': 'objectid_1', 'objectid': 'objectid', 'layer': 'layer', 'nama_patah': 'Nama Sesar', 'no_patahan': 'Nomer Sesar', 'st_length_': 'Panjang Sesar (km)', 'Sumber': 'Sumber', });
lyr_PusGeN2024_10.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Name': 'Nama Sesar', 'Segment': 'Segmen Sesar', 'Region': 'Region', 'Type': 'Tipe Sesar', 'LENGTH_KM': 'Panjang Sesar (km)', 'Mmax_d': 'Mmax_d', 'Sumber': 'Sumber', 'Contrib_': 'Contrib_', 'Sliprate_1': 'Sliprate_1', 'LCLASSSTR': 'LCLASSSTR', });
lyr_PuSGeN2024_Megahtrust_v4_Map_2.set('fieldImages', {'fid': 'Hidden', 'OID_': 'Hidden', 'Name': 'TextEdit', 'SymbolID': 'Hidden', 'Trench_len': 'Hidden', 'Slab_lengt': 'Hidden', 'left_width': 'Hidden', 'Right_widt': 'Hidden', 'av_length': 'Hidden', 'av_width': 'Hidden', 'ar_auto': 'Hidden', 'ar_LxW': 'Hidden', 'Remark': 'Hidden', 'Dip': 'Hidden', 'MMax': 'Hidden', 'Periode_ul': 'Hidden', 'auxiliary_': 'Hidden', 'auxiliar_1': 'Hidden', 'layer': 'TextEdit', 'path': 'Hidden', });
lyr_Slab_3.set('fieldImages', {'DEPTH': 'Range', 'REGION': 'TextEdit', 'layer': 'Hidden', 'path': 'Hidden', });
lyr_BatasAdministrasi_5.set('fieldImages', {'fid': 'Hidden', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', 'Scale': 'Hidden', 'PULAU': '', });
lyr_Subduction_Trench_6.set('fieldImages', {'fid': 'Hidden', 'Id': '', 'TrenchName': '', 'Remarks': '', });
lyr_TheGEMGlobalActiveFaults_7.set('fieldImages', {'fid': 'Hidden', 'WKT_GEOMETRY': 'Hidden', 'accuracy': 'Hidden', 'activity_confidence': 'Hidden', 'average_dip': 'Hidden', 'average_rake': 'Hidden', 'catalog_id': 'TextEdit', 'catalog_name': 'Hidden', 'dip_dir': 'Hidden', 'downthrown_side_dir': 'Hidden', 'downthrown_side_id': 'Hidden', 'epistemic_quality': 'Hidden', 'exposure_quality': 'Hidden', 'fs_name': 'Hidden', 'is_active': 'Hidden', 'last_movement': 'Hidden', 'lower_seis_depth': 'Hidden', 'name': 'TextEdit', 'net_slip_rate': 'Hidden', 'notes': 'Hidden', 'ogc_fid': 'Hidden', 'reference': 'Hidden', 'shortening_rate': 'Hidden', 'slip_type': 'TextEdit', 'strike_slip_rate': 'Hidden', 'upper_seis_depth': 'Hidden', 'vert_sep_rate': 'Hidden', 'Sumber': 'TextEdit', });
lyr_PSG_PULAUJAWA_8.set('fieldImages', {'objectid_1': 'Hidden', 'objectid': 'Hidden', 'layer': 'Hidden', 'nomor_pata': 'Hidden', 'nama_patah': 'TextEdit', 'jenis_pata': 'TextEdit', 'panjang_zo': 'Hidden', 'tempat': 'TextEdit', 'arah_patah': 'TextEdit', 'geologi': 'Hidden', 'sejarah_ke': 'Hidden', 'st_length_': 'TextEdit', 'st_length(': 'Hidden', 'Sumber': '', });
lyr_PSG_2024_9.set('fieldImages', {'objectid_1': 'Hidden', 'objectid': 'Hidden', 'layer': 'Hidden', 'nama_patah': 'TextEdit', 'no_patahan': 'Hidden', 'st_length_': 'TextEdit', 'Sumber': '', });
lyr_PusGeN2024_10.set('fieldImages', {'fid': 'Hidden', 'Id': 'Hidden', 'Name': 'TextEdit', 'Segment': 'TextEdit', 'Region': 'TextEdit', 'Type': 'TextEdit', 'LENGTH_KM': 'TextEdit', 'Mmax_d': 'TextEdit', 'Sumber': 'TextEdit', 'Contrib_': 'Hidden', 'Sliprate_1': 'Hidden', 'LCLASSSTR': 'Hidden', });
lyr_PuSGeN2024_Megahtrust_v4_Map_2.set('fieldLabels', {'Name': 'inline label - visible with data', 'layer': 'inline label - visible with data', });
lyr_Slab_3.set('fieldLabels', {'DEPTH': 'inline label - visible with data', 'REGION': 'inline label - visible with data', });
lyr_BatasAdministrasi_5.set('fieldLabels', {'WADMPR': 'inline label - visible with data', 'PULAU': 'inline label - visible with data', });
lyr_Subduction_Trench_6.set('fieldLabels', {'Id': 'inline label - visible with data', 'TrenchName': 'inline label - visible with data', 'Remarks': 'inline label - visible with data', });
lyr_TheGEMGlobalActiveFaults_7.set('fieldLabels', {'catalog_id': 'inline label - visible with data', 'name': 'inline label - visible with data', 'slip_type': 'inline label - visible with data', 'Sumber': 'inline label - visible with data', });
lyr_PSG_PULAUJAWA_8.set('fieldLabels', {'nama_patah': 'inline label - visible with data', 'jenis_pata': 'inline label - visible with data', 'tempat': 'inline label - visible with data', 'arah_patah': 'inline label - visible with data', 'st_length_': 'inline label - visible with data', 'Sumber': 'inline label - visible with data', });
lyr_PSG_2024_9.set('fieldLabels', {'nama_patah': 'inline label - visible with data', 'st_length_': 'inline label - visible with data', 'Sumber': 'inline label - visible with data', });
lyr_PusGeN2024_10.set('fieldLabels', {'Name': 'inline label - visible with data', 'Segment': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'LENGTH_KM': 'inline label - visible with data', 'Mmax_d': 'inline label - visible with data', 'Sumber': 'inline label - visible with data', });
lyr_PusGeN2024_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});