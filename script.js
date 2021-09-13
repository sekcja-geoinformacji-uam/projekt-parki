
var map = L.map( 'map', {
    center: [52, 19],
    minZoom: 1,
	maxZoom: 15,
    zoom: 6.7,
	zoomSnap:0.001,
});
var openstreetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var rzezba_terenu = L.tileLayer('https://api.mapbox.com/styles/v1/adryanque/cktfqqyu33jij17p7h1sv27co/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWRyeWFucXVlIiwiYSI6ImNrZDk5bzd3YTAyMTkycG16MnVqeDJtOTEifQ.7tl32VrqOcLSfXMTj2X-YA', {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
});


var satelita = L.tileLayer('https://api.mapbox.com/styles/v1/adryanque/ckqqyye3r4st018letzv7n099/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWRyeWFucXVlIiwiYSI6ImNrZDk5bzd3YTAyMTkycG16MnVqeDJtOTEifQ.7tl32VrqOcLSfXMTj2X-YA', {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
});

	function style(feature) {
		return {
			fillColor: 'transparent',
			weight: 1,
			opacity: 0.7,
			color: '#222',
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
        weight: 3,
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









var MyIcon = L.icon({
    iconUrl: 'https://dl.dropboxusercontent.com/s/f2tugtmrtypey74/peak.png?dl=0',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [100, 100], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [20, 60],  // the same for the shadow
    popupAnchor:  [-3, -20] // point from which the popup should open relative to the iconAnchor
});


var szczyty = new L.GeoJSON.AJAX("https://dl.dropboxusercontent.com/s/fbiqsw93wyrzosv/szczyty.json?dl=0",{onEachFeature:function (feature,layer) {
	if (feature.properties.name != null){
layer.bindPopup('<h2>'+feature.properties.name +'</h2>')
layer.on('mouseover', function (e) {
    this.openPopup();
});
layer.on('mouseout', function (e) {
    this.closePopup();
});
	}},
	pointToLayer: function(feature,latlng){
		return L.marker(latlng,{icon: MyIcon});
	}
});

var markery = L.markerClusterGroup()

szczyty.on('data:loaded', function () {
    markery.addLayer(szczyty);
    console.log(markery);
    map.addLayer(markery);
});







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
			document.getElementById("title").innerHTML = '<img src="https://dl.dropboxusercontent.com/s/v1axl831if7xrpz/Kampinoski_okragle_podstawowe.png?dl=0" width = 70px height = 70px;>';
			document.getElementById("title2").innerHTML = feature.properties.Park;
			document.getElementById("photo").innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Poland_Kampinos_April_1.jpg" id = "natura" width = 450px height = 300px;>';
			document.getElementById("rok").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Rok założenia:</span></br>'  + feature.properties.rok;
			document.getElementById("siedziba").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Siedziba:</span></br>'  + feature.properties.siedziba;
			document.getElementById("symbol").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Symbol:</span></br>'  + feature.properties.symbol;
			document.getElementById("photo2").innerHTML = '<img src="https://naukawpolsce.pap.pl/sites/default/files/styles/strona_glowna_slider_750x420/public/201710/13130799_13130792.jpg?itok=xj9b_AF6" id = "natura" width = 450px height = 300px;>';
			})}
		else if (feature.properties.Park == "Białowieski PN"){
			layer.on('click',function(e){
			document.getElementById("container").style.display = 'block';
			document.getElementById("title").innerHTML= '<img src="https://dl.dropboxusercontent.com/s/itlaikdguwhqzpp/Logo_Bia%C5%82owieskiego_Parku_Narodowego.png?dl=0" width = 70px height = 70px;>';
			document.getElementById("title2").innerHTML=feature.properties.Park;
			document.getElementById("photo").innerHTML = '<img src="https://bpn.com.pl/images/stories/gallery/lotnicze/DSC_4669.jpg" id = "natura" width = 450px height = 300px;>';
			document.getElementById("rok").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Rok założenia:</span></br>'  + feature.properties.rok;
			document.getElementById("siedziba").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Siedziba:</span></br>'  + feature.properties.siedziba;				
			document.getElementById("symbol").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Symbol:</span></br>'  + feature.properties.symbol;
			document.getElementById("photo2").innerHTML = '<img src="https://bpn.com.pl/images/stories/gallery/zubry1/f11.jpg" id = "natura" width = 450px height = 300px;>';
			})}
		else if (feature.properties.Park == "Gorczański PN"){
			layer.on('click',function(e){
			document.getElementById("container").style.display = 'block';
			document.getElementById("title").innerHTML= '<img src="https://dl.dropboxusercontent.com/s/gxzfi82ti9gipnh/LOGO_GORCZA%C5%83SKIEGO_PARKU_NARODOWEGO.png?dl=0" width = 70px height = 70px;>';
			document.getElementById("title2").innerHTML=feature.properties.Park;
			document.getElementById("photo").innerHTML = '<img src="https://zpppn.pl/img/images/Gorczanski/g12.JPG" id = "natura" width = 450px height = 300px;>';
			document.getElementById("rok").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Rok założenia:</span></br>'  + feature.properties.rok;
			document.getElementById("siedziba").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Siedziba:</span></br>'  + feature.properties.siedziba;				
			document.getElementById("symbol").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Symbol:</span></br>'  + feature.properties.symbol;
			document.getElementById("photo2").innerHTML = '<img src="https://przyrodniczo.pl/wp-content/uploads/2017/11/salamandra6.jpg" id = "natura" width = 450px height = 300px;>';
			})}
		else if (feature.properties.Park == "PN Ujście Warty"){
			layer.on('click',function(e){
			document.getElementById("container").style.display = 'block';
			document.getElementById("title").innerHTML= '<img src="https://dl.dropboxusercontent.com/s/fof5zt51e62kk4e/Logo_Park_Narodowy__Uj%C5%9Bcie_Warty_.png?dl=0" width = 70px height = 70px;>';
			document.getElementById("title2").innerHTML=feature.properties.Park;
			document.getElementById("photo").innerHTML = '<img src="https://www.pnujsciewarty.gov.pl/grafika,223,fot-o-w.jpg" id = "natura" width = 450px height = 300px;>';
			document.getElementById("rok").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Rok założenia:</span></br>'  + feature.properties.rok;
			document.getElementById("siedziba").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Siedziba:</span></br>'  + feature.properties.siedziba;				
			document.getElementById("symbol").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Symbol:</span></br>'  + feature.properties.symbol;
			document.getElementById("photo2").innerHTML = '<img src="https://www.pnujsciewarty.gov.pl/grafika,147,gegawa-fot-o-w.jpg" id = "natura" width = 450px height = 300px;>';
			})}
		else if (feature.properties.Park == "PN Gór Stołowych"){
			layer.on('click',function(e){
			document.getElementById("container").style.display = 'block';
			document.getElementById("title").innerHTML= '<img src="https://dl.dropboxusercontent.com/s/gaf0t803axwz213/LOGO_PARKU_NARODOWEGO_G%C3%93R_STO%C5%81OWYCH.png?dl=0" width = 70px height = 70px;>';
			document.getElementById("title2").innerHTML=feature.properties.Park;
			document.getElementById("photo").innerHTML = '<img src="https://zpppn.pl/photo/objects14/park-narodowy-gor-stolowych-pl_6_min.jpg" id = "natura" width = 450px height = 300px;>';
			document.getElementById("rok").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Rok założenia:</span></br>'  + feature.properties.rok;
			document.getElementById("siedziba").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Siedziba:</span></br>'  + feature.properties.siedziba;				
			document.getElementById("symbol").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Symbol:</span></br>'  + feature.properties.symbol;
			document.getElementById("photo2").innerHTML = '<img src="https://www.ziemia-klodzka.pl/wp-content/uploads/szczeliniec-650x340.jpg" id = "natura" width = 450px height = 300px;>';
			})}
		else if (feature.properties.Park == "Pieniński PN"){
			layer.on('click',function(e){
			document.getElementById("container").style.display = 'block';
			document.getElementById("title").innerHTML= '<img src="https://dl.dropboxusercontent.com/s/jfenh0jgddtxrq3/Logo_Pieninskiego_Parku_Narodowego_Polska.png?dl=0" width = 70px height = 70px;>';
			document.getElementById("title2").innerHTML=feature.properties.Park;
			document.getElementById("photo").innerHTML = '<img src="https://zpppn.pl/img/images/Pieninski/Pieninski%201/173.jpg" id = "natura" width = 450px height = 300px;>';
			document.getElementById("rok").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Rok założenia:</span></br>'  + feature.properties.rok;
			document.getElementById("siedziba").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Siedziba:</span></br>'  + feature.properties.siedziba;				
			document.getElementById("symbol").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Symbol:</span></br>'  + feature.properties.symbol;
			document.getElementById("photo2").innerHTML = '<img src="https://pliki.portalsamorzadowy.pl/i/13/66/21/136621_r2_940.jpg" id = "natura" width = 450px height = 300px;>';
			})}
		else if (feature.properties.Park == "Poleski PN"){
			layer.on('click',function(e){
			document.getElementById("container").style.display = 'block';
			document.getElementById("title").innerHTML= '<img src="https://dl.dropboxusercontent.com/s/07iix3xep5t9x6e/Logo_Poleskiego_Parku_Narodowego.png?dl=0" width = 70px height = 70px;>';
			document.getElementById("title2").innerHTML=feature.properties.Park;
			document.getElementById("photo").innerHTML = '<img src="https://zpppn.pl/img/images/Poleski/175.jpg" id = "natura" width = 450px height = 300px;>';
			document.getElementById("rok").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Rok założenia:</span></br>'  + feature.properties.rok;
			document.getElementById("siedziba").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Siedziba:</span></br>'  + feature.properties.siedziba;				
			document.getElementById("symbol").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Symbol:</span></br>'  + feature.properties.symbol;
			document.getElementById("photo2").innerHTML = '<img src="http://www.poleskipn.pl/images/galeria//zwierzeta/17.jpg" id = "natura" width = 450px height = 300px;>';
			})}
		else if (feature.properties.Park == "Słowiński PN"){
			layer.on('click',function(e){
			document.getElementById("container").style.display = 'block';
			document.getElementById("title").innerHTML= '<img src="https://dl.dropboxusercontent.com/s/0kv2fdvqhizlsuj/Logo_S%C5%82owi%C5%84skiego_Parku_Narodowego.png?dl=0" width = 70px height = 70px;>';
			document.getElementById("title2").innerHTML=feature.properties.Park;
			document.getElementById("photo").innerHTML = '<img src="https://zpppn.pl/img/images/Słowinski/244.jpg" id = "natura" width = 450px height = 300px;>';
			document.getElementById("rok").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Rok założenia:</span></br>'  + feature.properties.rok;
			document.getElementById("siedziba").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Siedziba:</span></br>'  + feature.properties.siedziba;				
			document.getElementById("symbol").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Symbol:</span></br>'  + feature.properties.symbol;
			document.getElementById("photo2").innerHTML = '<img src="https://dinoanimals.pl/wp-content/uploads/2016/01/Mewa_1.jpg" id = "natura" width = 450px height = 300px;>';
			})}
		else if (feature.properties.Park == "Wigierski PN"){
			layer.on('click',function(e){
			document.getElementById("container").style.display = 'block';
			document.getElementById("title").innerHTML= '<img src="https://dl.dropboxusercontent.com/s/r87pi73iyp7s9pr/LOGO_WIGIERSKIEGO_PARKU_NARODOWEGO.png?dl=0" width = 70px height = 70px;>';
			document.getElementById("title2").innerHTML=feature.properties.Park;
			document.getElementById("photo").innerHTML = '<img src="https://zpppn.pl/img/images/Wigierski/image01.jpg" id = "natura" width = 450px height = 300px;>';
			document.getElementById("rok").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Rok założenia:</span></br>'  + feature.properties.rok;
			document.getElementById("siedziba").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Siedziba:</span></br>'  + feature.properties.siedziba;				
			document.getElementById("symbol").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Symbol:</span></br>'  + feature.properties.symbol;
			document.getElementById("photo2").innerHTML = '<img src="http://1.bp.blogspot.com/-hACuJUdcCRY/UzbbF7hWlmI/AAAAAAAAAL0/Nf8c0yEYngw/s1600/10153495_623062361097363_645138807_n.jpg" id = "natura" width = 450px height = 300px;>';
			})}
		else if (feature.properties.Park == "Ojcowski PN"){
			layer.on('click',function(e){
			document.getElementById("container").style.display = 'block';
			document.getElementById("title").innerHTML= '<img src="https://dl.dropboxusercontent.com/s/65cskv6whc3kggi/Ojcowski_Park_Narodowy_LOGO.png?dl=0" width = 70px height = 70px;>';
			document.getElementById("title2").innerHTML=feature.properties.Park;
			document.getElementById("photo").innerHTML = '<img src="https://zpppn.pl/img/images/Ojcowski/Ojcowski%201/P1100703A.jpg" id = "natura" width = 450px height = 300px;>';
			document.getElementById("rok").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Rok założenia:</span></br>'  + feature.properties.rok;
			document.getElementById("siedziba").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Siedziba:</span></br>'  + feature.properties.siedziba;				
			document.getElementById("symbol").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Symbol:</span></br>'  + feature.properties.symbol;
			document.getElementById("photo2").innerHTML = '<img src="https://naukawpolsce.pap.pl/sites/default/files/styles/strona_glowna_slider_750x420/public/202002/35097381_35097343.jpg?h=57edc7dd&itok=TctvwwSJ" id = "natura" width = 450px height = 300px;>';
			})}
		else if (feature.properties.Park == "Babiogórski PN"){
			layer.on('click',function(e){
			document.getElementById("container").style.display = 'block';
			document.getElementById("title").innerHTML= '<img src="https://dl.dropboxusercontent.com/s/l5qbbicmdatvh6a/POL_Babiog%C3%B3rski_Park_Narodowy_LOGO.png?dl=0" width = 70px height = 70px;>';
			document.getElementById("title2").innerHTML=feature.properties.Park;
			document.getElementById("photo").innerHTML = '<img src="http://www.bgpn.pl/images/gallery/vancuver_430.jpg" id = "maskotka_image" width = 450px height = 300px;>';
			document.getElementById("rok").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Rok założenia:</span></br>'  + feature.properties.rok;
			document.getElementById("siedziba").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Siedziba:</span></br>'  + feature.properties.siedziba;
			document.getElementById("symbol").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Symbol:</span></br>'  + feature.properties.symbol;
			document.getElementById("photo2").innerHTML = '<img src="https://zielnik-karpacki.pl/application/images/uploads/albums/album_24/roslina_405/2450.jpeg" id = "natura" width = 450px height = 300px;>';
			})}
		else if (feature.properties.Park == "Narwiański PN"){
			layer.on('click',function(e){
			document.getElementById("container").style.display = 'block';
			document.getElementById("title").innerHTML= '<img src="https://dl.dropboxusercontent.com/s/u93zkdo5ywl4ksy/LOGO_NARWIA%C5%83SKIEGO_PARKU_NARODOWEGO.png?dl=0" width = 70px height = 70px;>';
			document.getElementById("title2").innerHTML=feature.properties.Park;
			document.getElementById("photo").innerHTML = '<img src="https://zpppn.pl/img/images/Narwianski/125.jpg" id = "natura" width = 450px height = 300px;>';
			document.getElementById("rok").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Rok założenia:</span></br>'  + feature.properties.rok;
			document.getElementById("siedziba").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Siedziba:</span></br>'  + feature.properties.siedziba;				
			document.getElementById("symbol").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Symbol:</span></br>'  + feature.properties.symbol;
			document.getElementById("photo2").innerHTML = '<img src="https://www.turystycznapolska.pl/var/ezwebin_site/storage/images/fotogalerie/parki-narodowe-w-polsce/narwianski-park-narodowy/blotniak-stawowy/33027-1-pol-PL/Blotniak-stawowy_imagelarge.jpg" id = "natura" width = 450px height = 300px;>';
			})}
		else if (feature.properties.Park == "Biebrzański PN"){
			layer.on('click',function(e){
			document.getElementById("container").style.display = 'block';
			document.getElementById("title").innerHTML= '<img src="https://dl.dropboxusercontent.com/s/qumwgnel44anf2n/POL_Biebrza%C5%84ski_Park_Narodowy_LOGO.png?dl=0" width = 70px height = 70px;>';
			document.getElementById("title2").innerHTML=feature.properties.Park;
			document.getElementById("photo").innerHTML = '<img src="https://zpppn.pl/img/images/Biebrzanski/18.jpg" id = "natura" width = 450px height = 300px;>';
			document.getElementById("rok").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Rok założenia:</span></br>'  + feature.properties.rok;
			document.getElementById("siedziba").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Siedziba:</span></br>'  + feature.properties.siedziba;				
			document.getElementById("symbol").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Symbol:</span></br>'  + feature.properties.symbol;
			document.getElementById("photo2").innerHTML = '<img src="https://www.biebrza.org.pl/grafika,923,fot-pawel-swiatkiewicz.jpg" id = "natura" width = 450px height = 300px;>';
			})}
		else if (feature.properties.Park == "Bieszczadzki PN"){
			layer.on('click',function(e){
			document.getElementById("container").style.display = 'block';
			document.getElementById("title").innerHTML= '<img src="https://dl.dropboxusercontent.com/s/8okvuhenldmump1/POL_Bieszczadzki_Park_Narodowy_LOGO.png?dl=0" width = 70px height = 70px;>';
			document.getElementById("title2").innerHTML=feature.properties.Park;
			document.getElementById("photo").innerHTML = '<img src="https://zpppn.pl/img/images/Drawienski/75.jpg" id = "natura" width = 450px height = 300px;>';
			document.getElementById("rok").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Rok założenia:</span></br>'  + feature.properties.rok;
			document.getElementById("siedziba").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Siedziba:</span></br>'  + feature.properties.siedziba;				
			document.getElementById("symbol").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Symbol:</span></br>'  + feature.properties.symbol;
			document.getElementById("photo2").innerHTML = '<img src="https://www.lasy.gov.pl/++theme++lasy/cache/img/static_161112089213/ff2fa700-f3ff-41a3-a39d-6073062ecc22.jpeg" id = "natura" width = 450px height = 300px;>';
			})}
		else if (feature.properties.Park == "Drawieński PN"){
			layer.on('click',function(e){
			document.getElementById("container").style.display = 'block';
			document.getElementById("title").innerHTML= '<img src="https://dl.dropboxusercontent.com/s/w12smxcl9tqqltl/POL_Drawie%C5%84ski_Park_Narodowy_LOGO.png?dl=0" width = 70px height = 70px;>';
			document.getElementById("title2").innerHTML=feature.properties.Park;
			document.getElementById("photo").innerHTML = '<img src="https://zpppn.pl/img/images/Bieszczadzki/41.jpg" id = "natura" width = 450px height = 300px;>';
			document.getElementById("rok").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Rok założenia:</span></br>'  + feature.properties.rok;
			document.getElementById("siedziba").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Siedziba:</span></br>'  + feature.properties.siedziba;				
			document.getElementById("symbol").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Symbol:</span></br>'  + feature.properties.symbol;
			document.getElementById("photo2").innerHTML = '<img src="https://zpppn.pl/img/images/Bieszczadzki/rys.jpg" id = "natura" width = 450px height = 300px;>';
			})}
		else if (feature.properties.Park == "Karkonowski PN"){
			layer.on('click',function(e){
			document.getElementById("container").style.display = 'block';
			document.getElementById("title").innerHTML= '<img src="https://dl.dropboxusercontent.com/s/5e0icdm8oyc798k/POL_Karkonoski_Park_Narodowy_Logo.png?dl=0" width = 70px height = 70px;>';
			document.getElementById("title2").innerHTML=feature.properties.Park;
			document.getElementById("photo").innerHTML = '<img src="https://kpnmab.pl/img/images/Geomorfo/Sniezkaa.JPG" id = "natura" width = 450px height = 300px;>';
			document.getElementById("rok").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Rok założenia:</span></br>'  + feature.properties.rok;
			document.getElementById("siedziba").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Siedziba:</span></br>'  + feature.properties.siedziba;				
			document.getElementById("symbol").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Symbol:</span></br>'  + feature.properties.symbol;
			document.getElementById("photo2").innerHTML = '<img src="https://kpnmab.pl/img/images/Flora1/Dzwonek.jpg" id = "natura" width = 450px height = 300px;>';
			})}
		else if (feature.properties.Park == "PN Bory Tucholskie"){
			layer.on('click',function(e){
			document.getElementById("container").style.display = 'block';
			document.getElementById("title").innerHTML= '<img src="https://dl.dropboxusercontent.com/s/ftq76qt4qtbbqv7/POL_Park_Narodowy__Bory_Tucholskie__LOGO.png?dl=0" width = 70px height = 70px;>';
			document.getElementById("title2").innerHTML=feature.properties.Park;
			document.getElementById("photo").innerHTML = '<img src="http://www.pnbt.com.pl/foto/2240" id = "natura" width = 450px height = 300px;>';
			document.getElementById("rok").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Rok założenia:</span></br>'  + feature.properties.rok;
			document.getElementById("siedziba").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Siedziba:</span></br>'  + feature.properties.siedziba;				
			document.getElementById("symbol").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Symbol:</span></br>'  + feature.properties.symbol;
			document.getElementById("photo2").innerHTML = '<img src="https://epochtimes.pl/media/2019/03/2019-03-14-David_Palmer_Capercaillie_gluszec-Wikimedia_CCBY20-800x533.jpg" id = "natura" width = 450px height = 300px;>';
			})}
		else if (feature.properties.Park == "Roztoczański PN"){
			layer.on('click',function(e){
			document.getElementById("container").style.display = 'block';
			document.getElementById("title").innerHTML= '<img src="https://dl.dropboxusercontent.com/s/860t5qkgdmkakf1/POL_Roztocza%C5%84ski_Park_Narodowy_LOGO.png?dl=0" width = 70px height = 70px;>';
			document.getElementById("title2").innerHTML=feature.properties.Park;
			document.getElementById("photo").innerHTML = '<img src="https://zpppn.pl/img/images/Roztoczanski/202.jpg" id = "natura" width = 450px height = 300px;>';
			document.getElementById("rok").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Rok założenia:</span></br>'  + feature.properties.rok;
			document.getElementById("siedziba").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Siedziba:</span></br>'  + feature.properties.siedziba;				
			document.getElementById("symbol").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Symbol:</span></br>'  + feature.properties.symbol;
			document.getElementById("photo2").innerHTML = '<img src="https://phr.pl/wp-content/uploads/2017/11/Konik-Polski-2.jpg" id = "natura" width = 450px height = 300px;>';
			})}
		else if (feature.properties.Park == "Tatrzański PN"){
			layer.on('click',function(e){
			document.getElementById("container").style.display = 'block';
			document.getElementById("title").innerHTML= '<img src="https://dl.dropboxusercontent.com/s/opm4ls11y4a2obh/Tatrzanski_PN.png?dl=0" width = 70px height = 70px;>';
			document.getElementById("title2").innerHTML=feature.properties.Park;
			document.getElementById("photo").innerHTML = '<img src="https://zpppn.pl/img/images/Tatrzanski/t6.jpg" id = "natura" width = 450px height = 300px;>';
			document.getElementById("rok").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Rok założenia:</span></br>'  + feature.properties.rok;
			document.getElementById("siedziba").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Siedziba:</span></br>'  + feature.properties.siedziba;				
			document.getElementById("symbol").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Symbol:</span></br>'  + feature.properties.symbol;
			document.getElementById("photo2").innerHTML = '<img src="https://zasoby.ekologia.pl/artykulyNew/23377/xxl/shutterstock-1675331029_800x600.jpg" id = "natura" width = 450px height = 300px;>';
			})}
		else if (feature.properties.Park == "Wielkopolski PN"){
			layer.on('click',function(e){
			document.getElementById("container").style.display = 'block';
			document.getElementById("title").innerHTML= '<img src="https://dl.dropboxusercontent.com/s/p40ldsiygwtbhct/POL_Wielkopolski_Park_Narodowy_LOGO.png?dl=0" width = 70px height = 70px;>';
			document.getElementById("title2").innerHTML=feature.properties.Park;
			document.getElementById("photo").innerHTML = '<img src="https://zpppn.pl/img/images/Wielkopolski/Wielkopolski%201/image14.jpg" id = "natura" width = 450px height = 300px;>';
			document.getElementById("rok").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Rok założenia:</span></br>'  + feature.properties.rok;
			document.getElementById("siedziba").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Siedziba:</span></br>'  + feature.properties.siedziba;				
			document.getElementById("symbol").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Symbol:</span></br>'  + feature.properties.symbol;
			document.getElementById("photo2").innerHTML = '<img src="https://static.wgorysowie.pl/data/articles/s4_puszczyk_zwyczajny_1549455095_70.jpg" id = "natura" width = 450px height = 300px;>';
			})}
		else if (feature.properties.Park == "Woliński PN"){
			layer.on('click',function(e){
			document.getElementById("container").style.display = 'block';
			document.getElementById("title").innerHTML = '<img src="https://dl.dropboxusercontent.com/s/cb1gwqba9orcq9l/POL_Woli%C5%84ski_Park_Narodowy_LOGO.png?dl=0" width = 70px height = 70px;>';
			document.getElementById("title2").innerHTML=feature.properties.Park;
			document.getElementById("photo").innerHTML = '<img src="https://zpppn.pl/img/images/Wolinski/image01.jpg" id = "natura" width = 450px height = 300px;>';
			document.getElementById("rok").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Rok założenia:</span></br>'  + feature.properties.rok;
			document.getElementById("siedziba").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Siedziba:</span></br>'  + feature.properties.siedziba;
			document.getElementById("symbol").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Symbol:</span></br>'  + feature.properties.symbol;
			document.getElementById("photo2").innerHTML = '<img src="https://www.lasy.gov.pl/pl/informacje/aktualnosci/populacja-bielika-podopiecznego-lesnikow-caly-czas-rosnie/bielik-2-antoni-kasprzak.jpg/@@images/image" id = "natura" width = 450px height = 300px;>';
			})}
		else if (feature.properties.Park == "Świętokrzyski PN"){
			layer.on('click',function(e){
			document.getElementById("container").style.display = 'block';
			document.getElementById("title").innerHTML= '<img src="https://dl.dropboxusercontent.com/s/6y62ji03k9fibvy/Swietokrzyski_Park_Narodowy.png?dl=0" width = 70px height = 70px;>';
			document.getElementById("title2").innerHTML=feature.properties.Park;
			document.getElementById("photo").innerHTML = '<img src="https://zpppn.pl/img/images/Swietokrzyski/154.jpg" id = "natura" width = 450px height = 300px;>';
			document.getElementById("rok").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Rok założenia:</span></br>'  + feature.properties.rok;
			document.getElementById("siedziba").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Siedziba:</span></br>'  + feature.properties.siedziba;				
			document.getElementById("symbol").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Symbol:</span></br>'  + feature.properties.symbol;
			document.getElementById("photo2").innerHTML = '<img src="https://www.medianauka.pl/biologia/grafika/ssaki/jelen-szlachetny.jpg" id = "natura" width = 450px height = 300px;>';
			})}
		else if (feature.properties.Park == "Magurski PN"){
			layer.on('click',function(e){
			document.getElementById("container").style.display = 'block';
			document.getElementById("title").innerHTML= '<img src="https://dl.dropboxusercontent.com/s/ofgxhqw0a01ro1r/Logo_Magurskiego_Parku_Narodowego.png?dl=0" width = 70px height = 70px;>';
			document.getElementById("title2").innerHTML=feature.properties.Park;
			document.getElementById("photo").innerHTML = '<img src="https://zpppn.pl/img/images/Swietokrzyski/154.jpg" id = "natura" width = 450px height = 300px;>';
			document.getElementById("rok").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Rok założenia:</span></br>'  + feature.properties.rok;
			document.getElementById("siedziba").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Siedziba:</span></br>'  + feature.properties.siedziba;				
			document.getElementById("symbol").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Symbol:</span></br>'  + feature.properties.symbol;
			document.getElementById("photo2").innerHTML = '<img src="https://fajnepodroze.pl/wp-content/uploads/2020/04/Orlik-krzykliwy.jpg" id = "natura" width = 450px height = 300px;>';
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

//warstwy rastrowe numerycznego modelu terenu parków
var warstwa_gory_stolowe = L.imageOverlay('https://dl.dropboxusercontent.com/s/94xrqqw3aag0b9r/gory_stolowe.png?dl=0', [[50.511349759, 16.262960679], [50.422894720, 16.447147861]])

var warstwa_karkonoski = L.imageOverlay('https://dl.dropboxusercontent.com/s/m7doaadrhsvay22/karkonoski.png?dl=0', [[50.855941611, 15.454902321], [50.72818689, 15.83475647]])

var warstwa_gorczanski = L.imageOverlay('https://dl.dropboxusercontent.com/s/3xle26wfcibw934/gorczanski.png?dl=0', [[49.6297068, 20.0152318], [49.5020153, 20.2681160]])

var warstwa_tatrzanski = L.imageOverlay('https://dl.dropboxusercontent.com/s/5k800s4k7b8bfzq/tatrzanski.png?dl=0', [[49.3556376, 19.7365790], [49.1685861, 20.1602903]])

var warstwa_babiogorski = L.imageOverlay('https://dl.dropboxusercontent.com/s/u7wbd8p98kng789/babiogorski.png?dl=0', [[49.62215728, 19.46423408], [49.55473111, 19.61120239]])

var warstwa_pieninski = L.imageOverlay('https://dl.dropboxusercontent.com/s/p8w7qewbo8jio96/pieninski.png?dl=0', [[49.44222409, 20.27924980], [49.391760307, 20.464828845]])

var warstwa_ojcowski = L.imageOverlay('https://dl.dropboxusercontent.com/s/arrr00jpur15gen/ojcowski.png?dl=0', [[50.2549479, 19.7624461], [50.1530324, 19.8855363]])

var warstwa_poleski = L.imageOverlay('https://dl.dropboxusercontent.com/s/671jtyls9vujyg7/poleski.png?dl=0', [[51.5164785, 23.0025527], [51.3117426, 23.3724593]])

var warstwa_roztoczanski = L.imageOverlay('https://dl.dropboxusercontent.com/s/j7hyo40fj6yuszn/roztoczanski.png?dl=0', [[50.685493, 22.881411], [50.5036113, 23.1510262]])

var warstwa_swietokrzyski= L.imageOverlay('https://dl.dropboxusercontent.com/s/8ibf1zojmvu19dr/swietokrzyski.png?dl=0', [[50.9726288, 20.7928800], [50.82805624, 21.13283127]])

var warstwa_ujscie_warty = L.imageOverlay('https://dl.dropboxusercontent.com/s/b2g51nmyspikc2r/ujscie_warty.png?dl=0', [[52.666038, 14.623495], [52.5339246, 14.9347796]])

var warstwa_wielkopolski = L.imageOverlay('https://dl.dropboxusercontent.com/s/8ntmxu4bbh7m4ey/wielkopolski.png?dl=0', [[52.3381915, 16.6286550], [52.2206600, 16.9301937]])




var warstwa_bialowieski = L.imageOverlay('https://dl.dropboxusercontent.com/s/2u27ilz6aujuax6/bialowieski.png?dl=0', [[52.8234587, 23.7066286], [52.694406, 23.953721]])

var warstwa_bory_tucholskie = L.imageOverlay('https://dl.dropboxusercontent.com/s/i68jpevqu0pb4iy/bory_tucholskie.png?dl=0', [[53.85891643, 17.43980335], [53.7259034, 17.6275328]])

var warstwa_drawienski = L.imageOverlay('https://dl.dropboxusercontent.com/s/54u7haak3vdyr4e/drawienski.png?dl=0', [[53.2212619, 15.7177730], [53.012987, 16.115389]])

var warstwa_slowinski = L.imageOverlay('https://dl.dropboxusercontent.com/s/dtzvdbvs7vix6nt/slowinski.png?dl=0', [[54.7637991, 17.0439893], [54.6185677, 17.5554648]])

var warstwa_wigierski = L.imageOverlay('https://dl.dropboxusercontent.com/s/3mtczklcb3wal6m/wigierski.png?dl=0', [[54.1727220, 22.9719895], [53.9711934, 23.2700094]])

var warstwa_wolinski = L.imageOverlay('https://dl.dropboxusercontent.com/s/st3mvn2epvuegaz/wolinski2.png?dl=0', [[53.9978224, 14.2864101], [53.8289088, 14.6909706]])

var warstwa_narwianski = L.imageOverlay('https://dl.dropboxusercontent.com/s/zeal4kztfaps95g/narwianski.png?dl=0', [[53.1508457, 22.7667435], [52.94717258, 22.99291044]])


//zgrupowanie wszystkich warstw rastrowych w jedną zmienną
var warstwa_nmt = L.layerGroup([warstwa_gory_stolowe, warstwa_karkonoski, warstwa_gorczanski, warstwa_tatrzanski, warstwa_pieninski, 
	warstwa_babiogorski, warstwa_ojcowski, warstwa_poleski, warstwa_roztoczanski, warstwa_ujscie_warty, warstwa_wielkopolski, warstwa_swietokrzyski,
	warstwa_bialowieski, warstwa_bory_tucholskie, warstwa_narwianski, warstwa_wolinski, warstwa_slowinski, warstwa_drawienski, warstwa_wigierski]);


//wyswietlanie opisow szlakow po nakliknieciu
function opis_rozwiniety(){
	if(document.getElementById("opis_1").style.display == "none"){
	document.getElementById("opis_1").style.display = "block"; 
	document.getElementsByClassName("szlak_head")[0].style.backgroundColor = "#222";
	}
	else{
	document.getElementById("opis_1").style.display= "none";
	document.getElementsByClassName("szlak_head")[0].style.backgroundColor = "#2e3039";
	}
}

function opis_rozwiniety2(){
	if(document.getElementById("opis_2").style.display == "none"){
	document.getElementById("opis_2").style.display = "block"; 
	document.getElementsByClassName("szlak_head")[1].style.backgroundColor = "#222";
	}
	else{
	document.getElementById("opis_2").style.display= "none";
	document.getElementsByClassName("szlak_head")[1].style.backgroundColor = "#2e3039";
	}
}
function opis_rozwiniety3(){
	if(document.getElementById("opis_3").style.display == "none"){
	document.getElementById("opis_3").style.display = "block"; 
	document.getElementsByClassName("szlak_head")[2].style.backgroundColor = "#222";
	}
	else{
	document.getElementById("opis_3").style.display= "none";
	document.getElementsByClassName("szlak_head")[2].style.backgroundColor = "#2e3039";
	}
}
function opis_rozwiniety4(){
	if(document.getElementById("opis_4").style.display == "none"){
	document.getElementById("opis_4").style.display = "block"; 
	document.getElementsByClassName("szlak_head")[3].style.backgroundColor = "#222";
	}
	else{
	document.getElementById("opis_4").style.display= "none";
	document.getElementsByClassName("szlak_head")[3].style.backgroundColor = "#2e3039";
	}
}
function opis_rozwiniety5(){
	if(document.getElementById("opis_5").style.display == "none"){
	document.getElementById("opis_5").style.display = "block"; 
	document.getElementsByClassName("szlak_head")[4].style.backgroundColor = "#222";
	}
	else{
	document.getElementById("opis_5").style.display= "none";
	document.getElementsByClassName("szlak_head")[4].style.backgroundColor = "#2e3039";
	}
}
function opis_rozwiniety6(){
	if(document.getElementById("opis_6").style.display == "none"){
	document.getElementById("opis_6").style.display = "block"; 
	document.getElementsByClassName("szlak_head")[5].style.backgroundColor = "#222";
	}
	else{
	document.getElementById("opis_6").style.display= "none";
	document.getElementsByClassName("szlak_head")[5].style.backgroundColor = "#2e3039";
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


//wyszukiwarka po nazwach obiektów w warstwach

var searchControl = new L.Control.Search({
	layer: L.featureGroup([parki, szczyty]),
	propertyName: 'name',
	marker: false,
	moveToLocation: function(latlng, title, map) {
        map.setView(latlng, 11); 
		//map.fitBounds( latlng.layer.getBounds() );
		//var zoom = map.getBoundsZoom(latlng.layer.getBounds());
		  //map.setView(latlng, zoom); // access the zoom
	}
});

searchControl.on('search:locationfound', function(e) {
	
	//console.log('search:locationfound', );

	//map.removeLayer(this._markerSearch)
	e.layer.setStyle({fillColor: '#ffffff', color: '#333'});		//ustawienie podwójnego błyskania po wyszukaniu danego obiektu
	setTimeout(function(){
		e.layer.setStyle({fillColor: '#169843', color: '#333'});
		
    },100); 
    setTimeout(function(){
	e.layer.setStyle({fillColor: '#ffffff', color: '#333'});
	
	},170); 
	setTimeout(function(){
		e.layer.setStyle({fillColor: '#169843', color: '#333'});
		
   },240); 
   
	if(e.layer._popup)
		e.layer.openPopup();

});
//.on('search:collapsed', function(e) {

	//loga.eachLayer(function(layer) {	//restore feature color
	//	loga.resetStyle(layer);
	//});	
//});

map.addControl( searchControl );  //inizialize search control




//poligon cieniujący resztę świata oprócz Polski 
var podklad_cien = new L.GeoJSON.AJAX("https://dl.dropboxusercontent.com/s/4clbk4wvf8fkw31/reszta_swiata.json?dl=0",{onEachFeature:function forEachFeature (feature,layer){
},style:function style(feature) {
    return {
		fillColor: '#111111',
        color: '#111111',
        opacity: 1,
        fillOpacity: 0.7
    };  }
});
podklad_cien.addTo(map);

//przeźroczystość warstw rastrowych
$(document).ready(function(){
	$("#opacity-slider").on('change', function(){
	$("#image-opacity").html(this.value);
	warstwa_gory_stolowe.setOpacity(this.value);
	warstwa_karkonoski.setOpacity(this.value);
	warstwa_gorczanski.setOpacity(this.value); 
	warstwa_tatrzanski.setOpacity(this.value);
	warstwa_babiogorski.setOpacity(this.value); 
	warstwa_pieninski.setOpacity(this.value);
	warstwa_ojcowski.setOpacity(this.value);
	warstwa_poleski.setOpacity(this.value);
	warstwa_swietokrzyski.setOpacity(this.value);
	warstwa_roztoczanski.setOpacity(this.value); 
	warstwa_ujscie_warty.setOpacity(this.value); 
	warstwa_wielkopolski.setOpacity(this.value);
	warstwa_bialowieski.setOpacity(this.value);
	warstwa_bory_tucholskie.setOpacity(this.value);
	warstwa_narwianski.setOpacity(this.value); 
	warstwa_wolinski.setOpacity(this.value);
	warstwa_slowinski.setOpacity(this.value);
	warstwa_drawienski.setOpacity(this.value);
	warstwa_wigierski.setOpacity(this.value);
	})
});


map.zoomControl.setPosition('bottomleft');


document.getElementById("narodowe_button").addEventListener("click", function () {
	if(!(map.hasLayer(parki))){
		parki.addTo(map)
	}
	else if(map.hasLayer(parki)){
	map.removeLayer(parki);
}});
document.getElementById("menu_krajobrazowe").addEventListener("click", function(){
	if(!(map.hasLayer(parki_krajobrazowe))){
		parki_krajobrazowe.addTo(map)
	}
	else if(map.hasLayer(parki_krajobrazowe)){
	map.removeLayer(parki_krajobrazowe);
}})

document.getElementById("menu_szlaki").addEventListener("click", function(){
	if(!(map.hasLayer(warstwa_szlaki))){
		warstwa_szlaki.addTo(map);
		document.getElementById("szlaki_turystyczne").style.display = "block";
	}
	else if(map.hasLayer(warstwa_szlaki)){
	map.removeLayer(warstwa_szlaki);
	document.getElementById("szlaki_turystyczne").style.display = "none";
}})

document.getElementById("menu_nmt").addEventListener("click", function(){
	if(!(map.hasLayer(warstwa_nmt))){
		warstwa_nmt.addTo(map);
		document.getElementById("uksztaltowanie_terenu").style.display = 'block';
	}
	else if(map.hasLayer(warstwa_nmt)){
	map.removeLayer(warstwa_nmt);
	document.getElementById("uksztaltowanie_terenu").style.display = 'none';
}})

document.getElementById("legenda_div").style.opacity = 0;
document.getElementById("legenda_div").style.visibility = 'hidden';

//ukazanie legendy po kliknięciu przycisku 
document.getElementById("menu_legenda").addEventListener("click", function(){
	if (document.getElementById("legenda_div").style.visibility == 'hidden'){
		document.getElementById("legenda_div").style.visibility = 'visible';
		document.getElementById("warstwy_div").style.visibility = 'hidden';
		document.getElementById("informacje_div").style.visibility = 'hidden';
		document.getElementById("statystyki_div").style.visibility = 'hidden';
		document.getElementById("legenda_div").style.opacity = '0.95';
	}
		else{
			document.getElementById("legenda_div").style.visibility = 'hidden';
			document.getElementById("legenda_div").style.opacity = '0';
		}
	});
//ukazanie odpowiedniej legendy, w zależności czy włączona jest turystyka, szlaki turystyczne lub ukształtowanie terenu






document.getElementById("warstwy_div").style.opacity = 0;
document.getElementById("warstwy_div").style.visibility = 'hidden';

//ukazanie diva z warstwami po kliknięciu przycisku 
document.getElementById("menu_warstwy").addEventListener("click", function(){
	if (document.getElementById("warstwy_div").style.visibility === 'hidden'){
		document.getElementById("warstwy_div").style.visibility = 'visible';
		document.getElementById("legenda_div").style.visibility = 'hidden';
		document.getElementById("informacje_div").style.visibility = 'hidden';
		document.getElementById("statystyki_div").style.visibility = 'hidden';
		document.getElementById("warstwy_div").style.opacity = '0.95';
	}
		else {
			document.getElementById("warstwy_div").style.visibility = 'hidden';
			document.getElementById("warstwy_div").style.opacity = '0';
		}
	});


document.getElementById("informacje_div").style.opacity = 0;
document.getElementById("informacje_div").style.visibility = 'hidden';

//ukazanie diva z informacjami po kliknięciu przycisku 
document.getElementById("menu_informacje").addEventListener("click", function(){
	if (document.getElementById("informacje_div").style.visibility === 'hidden'){
		document.getElementById("informacje_div").style.visibility = 'visible';
		document.getElementById("legenda_div").style.visibility = 'hidden';
		document.getElementById("warstwy_div").style.visibility = 'hidden';
		document.getElementById("statystyki_div").style.visibility = 'hidden';
		document.getElementById("informacje_div").style.opacity = '0.95';
	}
		else {
			document.getElementById("informacje_div").style.visibility = 'hidden';
			document.getElementById("informacje_div").style.opacity = '0';
		}
	});


document.getElementById("statystyki_div").style.opacity = 0;
document.getElementById("statystyki_div").style.visibility = 'hidden';

//ukazanie diva ze statystykami po kliknięciu przycisku 
document.getElementById("menu_statystyki").addEventListener("click", function(){
	if (document.getElementById("statystyki_div").style.visibility === 'hidden'){
		document.getElementById("statystyki_div").style.visibility = 'visible';
		document.getElementById("legenda_div").style.visibility = 'hidden';
		document.getElementById("warstwy_div").style.visibility = 'hidden';
		document.getElementById("informacje_div").style.visibility = 'hidden';
		document.getElementById("statystyki_div").style.opacity = '0.95';
	}
		else {
			document.getElementById("statystyki_div").style.visibility = 'hidden';
			document.getElementById("statystyki_div").style.opacity = '0';
		}
	});

document.getElementById("mapa_bazowa_1").addEventListener("click", function(){
	openstreetmap.addTo(map);
	map.removeLayer(satelita);
	map.removeLayer(rzezba_terenu);
});
document.getElementById("mapa_bazowa_2").addEventListener("click", function(){
	satelita.addTo(map);
	map.removeLayer(openstreetmap);
	map.removeLayer(rzezba_terenu);
});
document.getElementById("mapa_bazowa_3").addEventListener("click", function(){
	rzezba_terenu.addTo(map);
	map.removeLayer(openstreetmap);
	map.removeLayer(satelita);
});