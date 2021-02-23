var map = L.map( 'map', {
    center: [52, 19],
    minZoom: 6,
	maxZoom: 15,
    zoom: 6.7,
	zoomSnap:0.01
});

L.tileLayer( 'https://api.mapbox.com/styles/v1/adryanque/ckd99v6j000ke1jmwyr4u4pfi/tiles/512/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWRyeWFucXVlIiwiYSI6ImNrZDliYXBidjA2YzYzM3J4em02aHZlN2oifQ.ZzMhhePg7yuqu2nhm5jXww', {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
}).addTo( map );

/*var wojewodztwa = new L.GeoJSON.AJAX("https://dl.dropboxusercontent.com/s/1n6b8fa7lmhvp66/wojewodztwa.json?dl=0",{onEachFeature:function forEachFeature (feature,layer){
	
},style:function style(feature) {
    return {
        fillColor: '#666',
        weight: 2,
        opacity: 1,
        color: '#333',
        dashArray: '1',
        fillOpacity: 0.40
    };  }
});
wojewodztwa.addTo(map);
*/





	function style(feature) {
		return {
			fillColor: 'transparent',
			weight: 1,
			opacity: 0.7,
			color: '#777',
			dashArray: '1',
			fillOpacity: 0.4,
		};
	}

	function highlightFeature(e) {
		var layer = e.target;

		layer.setStyle({
			weight: 5,
			color: '#333',
			dashArray: '',
			fillOpacity: 0.7
		});
	}
	function aktywne(e) {
		var layer1 = e.target;

		layer1.setStyle({
			fillColor: '#444',
			dashArray: '',
			fillOpacity: 0.7
		});
	}
	
	var geojson;

	function resetHighlight(e) {
		geojson.resetStyle(e.target);
	}

	function zoomToFeature(e) {
		map.fitBounds(e.target.getBounds());
	}

	function onEachFeature(feature, layer) {
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: aktywne
		});
		layer.on({
			click: zoomToFeature});
	}

	geojson = L.geoJson(wojewodztwa, {
		style: style,
		onEachFeature: onEachFeature,
		click: aktywne
	}).addTo(map);











var parki = new L.GeoJSON.AJAX("https://dl.dropboxusercontent.com/s/ghh6sf9quob0u3a/parki_narodowe.json?dl=0",{onEachFeature:function forEachFeature (feature,layer){
	
},style:function style(feature) {
    return {
        fillColor: '#164527',
        weight: 2,
        opacity: 1,
        color: '#333',
        dashArray: '1',
        fillOpacity: 0.95
    };  }
});
parki.addTo(map);



var parki_krajobrazowe = new L.GeoJSON.AJAX("https://dl.dropboxusercontent.com/s/6m2cga98muuwuky/prki_krajobrazowe.json?dl=0",{onEachFeature:function forEachFeature (feature,layer){
	
},style:function style(feature) {
    return {
        fillColor: '#169843',
        weight: 2,
        opacity: 1,
        color: '#333',
        dashArray: '1',
        fillOpacity: 0.95
    };  }
});
parki_krajobrazowe.addTo(map);


var loga = new L.GeoJSON.AJAX("https://dl.dropboxusercontent.com/s/k0ncgalt2nf9za7/parki_punkty1.json?dl=0",{onEachFeature:function (feature,layer) {
	if (feature.properties.Park != null){
layer.bindPopup('<h2>'+feature.properties.Park+'</h2>')
layer.on('mouseover', function (e) {
    this.openPopup();
});
layer.on('mouseout', function (e) {
    this.closePopup();
});
}
	
		if (feature.properties.Park == "Kampinoski PN"){
			layer.on('click',function(e){
			document.getElementById("container").style.display = 'block';
			document.getElementById("title").innerHTML=feature.properties.Park;
			document.getElementById("photo").innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Wisent.jpg" id = "maskotka_image" width = 450px height = 300px;>';
			})}
		else if (feature.properties.Park == "Babiogórski PN"){
			layer.on('click',function(e){
			document.getElementById("container").style.display = 'block';
			document.getElementById("title").innerHTML=feature.properties.Park;
			document.getElementById("photo").innerHTML = '<img src="http://www.bgpn.pl/images/gallery/vancuver_430.jpg" id = "maskotka_image" width = 450px height = 300px;>';
			})}
},
pointToLayer: function (feature, latlng) {
        switch (feature.properties.Park) {
            case 'Kampinoski PN': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/v1axl831if7xrpz/Kampinoski_okragle_podstawowe.png?dl=0',
				className:"logo",
				iconAnchor:   [32, 25], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
            case 'Białowieski PN': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/itlaikdguwhqzpp/Logo_Bia%C5%82owieskiego_Parku_Narodowego.png?dl=0',
				className:"logo",
				iconAnchor:   [32, 25], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'Gorczański PN': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/gxzfi82ti9gipnh/LOGO_GORCZA%C5%83SKIEGO_PARKU_NARODOWEGO.png?dl=0',
				className:"logo",
				iconAnchor:   [32, 25], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'PN Ujście Warty': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/fof5zt51e62kk4e/Logo_Park_Narodowy__Uj%C5%9Bcie_Warty_.png?dl=0',
				className:"logo",
				iconAnchor:   [32, 25], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'PN Gór Stołowych': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/gaf0t803axwz213/LOGO_PARKU_NARODOWEGO_G%C3%93R_STO%C5%81OWYCH.png?dl=0',
				className:"logo",
				iconAnchor:   [32, 25], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'Pieniński PN': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/jfenh0jgddtxrq3/Logo_Pieninskiego_Parku_Narodowego_Polska.png?dl=0',
				className:"logo",
				iconAnchor:   [32, 25], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'Poleski PN': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/07iix3xep5t9x6e/Logo_Poleskiego_Parku_Narodowego.png?dl=0',
				className:"logo",
				iconAnchor:   [32, 25], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'Słowiński PN': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/0kv2fdvqhizlsuj/Logo_S%C5%82owi%C5%84skiego_Parku_Narodowego.png?dl=0',
				className:"logo",
				iconAnchor:   [32, 25], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'Wigierski PN': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/r87pi73iyp7s9pr/LOGO_WIGIERSKIEGO_PARKU_NARODOWEGO.png?dl=0',
				className:"logo",
				iconAnchor:   [32, 25], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'Ojcowski PN': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/65cskv6whc3kggi/Ojcowski_Park_Narodowy_LOGO.png?dl=0',
				className:"logo",
				iconAnchor:   [32, 25], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'Babiogórski PN': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/l5qbbicmdatvh6a/POL_Babiog%C3%B3rski_Park_Narodowy_LOGO.png?dl=0',
				className:"logo",
				iconAnchor:   [32, 25], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'Narwiański': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/u93zkdo5ywl4ksy/LOGO_NARWIA%C5%83SKIEGO_PARKU_NARODOWEGO.png?dl=0',
				className:"logo",
				iconAnchor:   [32, 25], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'Biebrzański PN': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/qumwgnel44anf2n/POL_Biebrza%C5%84ski_Park_Narodowy_LOGO.png?dl=0',
				className:"logo",
				iconAnchor:   [32, 25], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'Bieszczadzki PN': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/8okvuhenldmump1/POL_Bieszczadzki_Park_Narodowy_LOGO.png?dl=0',
				className:"logo",
				iconAnchor:   [32, 25], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'Drawieński PN': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/w12smxcl9tqqltl/POL_Drawie%C5%84ski_Park_Narodowy_LOGO.png?dl=0',
				className:"logo",
				iconAnchor:   [32, 25], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'Karkonoski PN': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/5e0icdm8oyc798k/POL_Karkonoski_Park_Narodowy_Logo.png?dl=0',
				className:"logo",
				iconAnchor:   [32, 25], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'PN Bory Tucholskie': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/ftq76qt4qtbbqv7/POL_Park_Narodowy__Bory_Tucholskie__LOGO.png?dl=0',
				className:"logo",
				iconAnchor:   [32, 25], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'Roztoczański PN': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/860t5qkgdmkakf1/POL_Roztocza%C5%84ski_Park_Narodowy_LOGO.png?dl=0',
				className:"logo",
				iconAnchor:   [32, 25], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'Tatrzański PN': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/opm4ls11y4a2obh/Tatrzanski_PN.png?dl=0',
				className:"logo",
				iconAnchor:   [32, 25], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'Wielkopolski PN': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/p40ldsiygwtbhct/POL_Wielkopolski_Park_Narodowy_LOGO.png?dl=0',
				className:"logo",
				iconAnchor:   [32, 25], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'Woliński PN': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/cb1gwqba9orcq9l/POL_Woli%C5%84ski_Park_Narodowy_LOGO.png?dl=0',
				className:"logo",
				iconAnchor:   [32, 25], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'Świętokrzyski PN': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/6y62ji03k9fibvy/Swietokrzyski_Park_Narodowy.png?dl=0',
				className:"logo",
				iconAnchor:   [32, 25], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'Magurski PN': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/ofgxhqw0a01ro1r/Logo_Magurskiego_Parku_Narodowego.png?dl=0',
				className:"logo",
				iconAnchor:   [32, 25], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
		}
	}		
}); 
loga.addTo(map);




map.on('click', function(){
    //map.setView([52, 19], 6.7);
	document.getElementById('container').style.display = 'none';
});

var narodowe = document.getElementById("narodowe_button");
narodowe_button.addEventListener("click", function(){
	map.removeLayer(parki_krajobrazowe);
    parki.addTo(map);
	loga.addTo(map);
})

var krajobrazowe = document.getElementById("krajobrazowe_button");
krajobrazowe_button.addEventListener("click", function(){
	parki_krajobrazowe.addTo(map);
    map.removeLayer(parki);
	map.removeLayer(loga);
})

