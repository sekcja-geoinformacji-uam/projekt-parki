var map = L.map( 'map', {
    center: [52, 19],
    minZoom: 6,
	maxZoom: 15,
    zoom: 6.7,
	zoomSnap:0.01
});


L.tileLayer( 'https://api.mapbox.com/styles/v1/adryanque/ckm0kaotk6l8m17o51p8vqzqj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWRyeWFucXVlIiwiYSI6ImNrZDk5bzd3YTAyMTkycG16MnVqeDJtOTEifQ.7tl32VrqOcLSfXMTj2X-YA', {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
}).addTo( map );


	function style(feature) {
		return {
			fillColor: 'transparent',
			weight: 1,
			opacity: 0.7,
			color: '#333',
			dashArray: '1',
			fillOpacity: 0.4,
		};
	}

	function highlightFeature(e) {
		var layer = e.target;

		layer.setStyle({
			weight: 5,
			color: '#111',
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
	
	
map.createPane('pane_szlaki');

map.getPane('pane_szlaki').style.zIndex = 500;

	
	var geojson;

	function resetHighlight(e) {
		geojson.resetStyle(e.target);
	}

	function zoomToFeature(e) {
		map.fitBounds(e.target.getBounds());
	}

	function onEachFeature(feature, layer) {
		if (feature.properties.name!= null){
		layer.bindPopup('<h2>'+feature.properties.name+'</h2>')}
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: aktywne
		});
		layer.on({
			click: zoomToFeature});
		layer.on('mouseover', function (e) {
		this.openPopup();
});
};
	

	geojson = L.geoJson(wojewodztwa, {
		style: style,
		onEachFeature: onEachFeature,
		click: aktywne,
	}).addTo(map);



function highlightFeature2(e) {
		var layer = e.target;

		layer.setStyle({
			weight: 5,
			color: '#333',
			dashArray: '10',
			fillOpacity: 0.7
		});
	}
	
function style2(feature) {
    return {
        color: getColor(feature.properties.colour),
        weight: 4,
        opacity: 1,
        dashArray: '10',
        fillOpacity: 0.95
    };  }

function getColor(d) {
    return d == "black" ? '#111111' :
           d == "blue"  ? '#0086b3' :
           d == "green"  ? '#00802b' :
           d == "yellow"  ? '#e6e60a' :
           d == "red"   ? '#cc0000' :
                      '#888881';
				}	
				
function resetHighlight2(e) {
	warstwa_szlaki.resetStyle(e.target);
}				

	function onEachFeature2(feature, layer) {
		if (feature.properties.name!= null){
		layer.bindPopup('<h2>'+feature.properties.name+'</h2>')}
		layer.on({
			mouseover: highlightFeature2,
			mouseout: resetHighlight2,
		});
		layer.on('click',function(e){
		map.setView(e.latlng,);
});
};

warstwa_szlaki = L.geoJson(szlaki, {
		style: style2,
		onEachFeature: onEachFeature2,
		pane:'pane_szlaki'
	})
	
/*
var szlaki = new L.GeoJSON.AJAX("https://dl.dropboxusercontent.com/s/qnhbt8fjuojsyif/szlaki_turystyczne.json?dl=0",{onEachFeature:function forEachFeature (feature,layer){
if (feature.properties.name != null){
layer.bindPopup('<h2>'+feature.properties.name+'</h2>')
layer.on('mouseclick', function (e) {
    //this.openPopup();
});
layer.on('mouseout', function (e) {
    this.closePopup();
});
layer.on('click',function(e){
	map.setView(e.latlng,);
});
}	
},style:function style(feature) {
    return {
        color: getColor(feature.properties.colour),
        weight: 4,
        opacity: 1,
        dashArray: '10',
        fillOpacity: 0.95
    };  }
});
szlaki.addTo(map);
*/


var parki_krajobrazowe = new L.GeoJSON.AJAX("https://dl.dropboxusercontent.com/s/co9xn8yjyd2tyih/parki_krajobrazowe.json?dl=0",{onEachFeature:function forEachFeature (feature,layer){
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


var loga = new L.GeoJSON.AJAX("https://dl.dropboxusercontent.com/s/6n5b892g9ra4m98/parki_punkty2.json?dl=0",{onEachFeature:function (feature,layer) {
	if (feature.properties.Park != null){
layer.bindPopup('<h2>'+feature.properties.Park+'</h2>')
layer.on('mouseover', function (e) {
    this.openPopup();
});
layer.on('mouseout', function (e) {
    this.closePopup();
});
layer.on('click',function(e){
	map.setView(e.latlng, 11);
});
}
	
		if (feature.properties.Park == "Kampinoski PN"){
			layer.on('click',function(e){
			document.getElementById("container").style.display = 'block';
			document.getElementById("title").innerHTML = '<img src="loga/kampinoski2.jpg" width = 70px height = 70px;>';
			document.getElementById("title2").innerHTML = feature.properties.Park;
			document.getElementById("photo").innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Poland_Kampinos_April_1.jpg" id = "natura" width = 450px height = 300px;>';
			document.getElementById("rok").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Rok założenia:</span></br>'  + feature.properties.rok;
			document.getElementById("siedziba").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Siedziba:</span></br>'  + feature.properties.siedziba;
			document.getElementById("symbol").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Symbol:</span></br>'  + feature.properties.symbol;
			document.getElementById("photo2").innerHTML = '<img src="https://naukawpolsce.pap.pl/sites/default/files/styles/strona_glowna_slider_750x420/public/201710/13130799_13130792.jpg?itok=xj9b_AF6" id = "natura" width = 450px height = 300px;>';
			})}
		else if (feature.properties.Park == "Babiogórski PN"){
			layer.on('click',function(e){
			document.getElementById("container").style.display = 'block';
			document.getElementById("title").innerHTML=feature.properties.siedziba;
			document.getElementById("photo").innerHTML = '<img src="http://www.bgpn.pl/images/gallery/vancuver_430.jpg" id = "maskotka_image" width = 450px height = 300px;>';
			})}
		else if (feature.properties.Park == "Woliński PN"){
			layer.on('click',function(e){
			document.getElementById("container").style.display = 'block';
			document.getElementById("title2").innerHTML=feature.properties.Park;
			document.getElementById("photo").innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Woliński_Park_narodowy_-_klif.jpg" id = "natura" width = 450px height = 300px;>';
			document.getElementById("rok").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Rok założenia:</span></br>'  + feature.properties.rok;
			document.getElementById("siedziba").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Siedziba:</span></br>'  + feature.properties.siedziba;
			document.getElementById("symbol").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Symbol:</span></br>'  + feature.properties.symbol;
			document.getElementById("photo2").innerHTML = '<img src="https://www.lasy.gov.pl/pl/informacje/aktualnosci/populacja-bielika-podopiecznego-lesnikow-caly-czas-rosnie/bielik-2-antoni-kasprzak.jpg/@@images/image" id = "natura" width = 450px height = 300px;>';
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
			case 'Narwiański PN': return L.marker(latlng,{icon:L.icon({
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

map.on('click', function(){
    //map.setView([52, 19], 6.7);
	document.getElementById('container').style.display = 'none';
});

var narodowe = document.getElementById("narodowe_button");
narodowe_button.addEventListener("click", function(){
	if(!(map.hasLayer(parki))){
		parki.addTo(map)
	}
	else if(map.hasLayer(parki)){
	map.removeLayer(parki);
}})
var krajobrazowe = document.getElementById("krajobrazowe_button");
krajobrazowe_button.addEventListener("click", function(){
	if(!(map.hasLayer(parki_krajobrazowe))){
		parki_krajobrazowe.addTo(map)
	}
	else if(map.hasLayer(parki_krajobrazowe)){
	map.removeLayer(parki_krajobrazowe);
}})


var szlaki = document.getElementById("szlaki_button");
szlaki_button.addEventListener("click", function(){
	if(!(map.hasLayer(warstwa_szlaki))){
		warstwa_szlaki.addTo(map);
		document.getElementById("legenda").style.display = "block";
	}
	else if(map.hasLayer(warstwa_szlaki)){
	map.removeLayer(warstwa_szlaki);
	document.getElementById("legenda").style.display = "none";
}})

//wyswietlanie opisow szlakow po nakliknieciu
function opis_rozwiniety(){
	if(document.getElementById("opis_1").style.display == "none"){
	document.getElementById("opis_1").style.display = "block"; 
	document.getElementsByClassName("szlak_head")[0].style.backgroundColor = "#222";
	}
	else{
	document.getElementById("opis_1").style.display= "none";
	document.getElementsByClassName("szlak_head")[0].style.backgroundColor = "#333";
	}
}

function opis_rozwiniety2(){
	if(document.getElementById("opis_2").style.display == "none"){
	document.getElementById("opis_2").style.display = "block"; 
	document.getElementsByClassName("szlak_head")[1].style.backgroundColor = "#222";
	}
	else{
	document.getElementById("opis_2").style.display= "none";
	document.getElementsByClassName("szlak_head")[1].style.backgroundColor = "#333";
	}
}
function opis_rozwiniety3(){
	if(document.getElementById("opis_3").style.display == "none"){
	document.getElementById("opis_3").style.display = "block"; 
	document.getElementsByClassName("szlak_head")[2].style.backgroundColor = "#222";
	}
	else{
	document.getElementById("opis_3").style.display= "none";
	document.getElementsByClassName("szlak_head")[2].style.backgroundColor = "#333";
	}
}
function opis_rozwiniety4(){
	if(document.getElementById("opis_4").style.display == "none"){
	document.getElementById("opis_4").style.display = "block"; 
	document.getElementsByClassName("szlak_head")[3].style.backgroundColor = "#222";
	}
	else{
	document.getElementById("opis_4").style.display= "none";
	document.getElementsByClassName("szlak_head")[3].style.backgroundColor = "#333";
	}
}
function opis_rozwiniety5(){
	if(document.getElementById("opis_5").style.display == "none"){
	document.getElementById("opis_5").style.display = "block"; 
	document.getElementsByClassName("szlak_head")[4].style.backgroundColor = "#222";
	}
	else{
	document.getElementById("opis_5").style.display= "none";
	document.getElementsByClassName("szlak_head")[4].style.backgroundColor = "#333";
	}
}
function opis_rozwiniety6(){
	if(document.getElementById("opis_6").style.display == "none"){
	document.getElementById("opis_6").style.display = "block"; 
	document.getElementsByClassName("szlak_head")[5].style.backgroundColor = "#222";
	}
	else{
	document.getElementById("opis_6").style.display= "none";
	document.getElementsByClassName("szlak_head")[5].style.backgroundColor = "#333";
	}
}
//pojawianie sie strzalek
function arrow(){
	if(document.getElementById("opis_1").style.display == "none"){
		document.getElementsByClassName("arrow")[0].style.display= "block";
		}
	else {document.getElementsByClassName("arrow_up")[0].style.display= "block";
}}
function arrow2(){
	if(document.getElementById("opis_2").style.display == "none"){
		document.getElementsByClassName("arrow")[1].style.display= "block";
		}
	else {document.getElementsByClassName("arrow_up")[1].style.display= "block";
}}
function arrow3(){
	if(document.getElementById("opis_3").style.display == "none"){
		document.getElementsByClassName("arrow")[2].style.display= "block";
		}
	else {document.getElementsByClassName("arrow_up")[2].style.display= "block";
}}
function arrow4(){
	if(document.getElementById("opis_4").style.display == "none"){
		document.getElementsByClassName("arrow")[3].style.display= "block";
		}
	else {document.getElementsByClassName("arrow_up")[3].style.display= "block";
}}
function arrow5(){
	if(document.getElementById("opis_5").style.display == "none"){
		document.getElementsByClassName("arrow")[4].style.display= "block";
		}
	else {document.getElementsByClassName("arrow_up")[4].style.display= "block";
}}
function arrow6(){
	if(document.getElementById("opis_6").style.display == "none"){
		document.getElementsByClassName("arrow")[5].style.display= "block";
		}
	else {document.getElementsByClassName("arrow_up")[5].style.display= "block";
}}

//znikanie strzalek
function hidden_arrow(){
	document.getElementsByClassName("arrow")[0].style.display= "none";
	document.getElementsByClassName("arrow_up")[0].style.display= "none";
}
function hidden_arrow2(){
	document.getElementsByClassName("arrow")[1].style.display= "none";
	document.getElementsByClassName("arrow_up")[1].style.display= "none";
}
function hidden_arrow3(){
	document.getElementsByClassName("arrow")[2].style.display= "none";
	document.getElementsByClassName("arrow_up")[2].style.display= "none";
}
function hidden_arrow4(){
	document.getElementsByClassName("arrow")[3].style.display= "none";
	document.getElementsByClassName("arrow_up")[3].style.display= "none";
}
function hidden_arrow5(){
	document.getElementsByClassName("arrow")[4].style.display= "none";
	document.getElementsByClassName("arrow_up")[4].style.display= "none";
}
function hidden_arrow6(){
	document.getElementsByClassName("arrow")[5].style.display= "none";
	document.getElementsByClassName("arrow_up")[5].style.display= "none";
}

