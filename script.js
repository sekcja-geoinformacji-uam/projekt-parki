var map = L.map( 'map', {
    center: [38, -97],
    minZoom: 4,
	maxZoom: 9.5,
    zoom: 5.1,
	zoomSnap:0.02
});

L.tileLayer( 'https://api.mapbox.com/styles/v1/adryanque/ckdcy52na0j701imgnwx4q8gl/tiles/512/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWRyeWFucXVlIiwiYSI6ImNrZDk5bzd3YTAyMTkycG16MnVqeDJtOTEifQ.7tl32VrqOcLSfXMTj2X-YA', {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
}).addTo(map);



var zespoly = new L.GeoJSON.AJAX("https://dl.dropboxusercontent.com/s/9vr68tj2857drze/json_zespoly.json?dl=0",{onEachFeature:function (feature,layer) {
	if (feature.properties.Rok != null){
layer.bindPopup('<table id = "tabela_zespoly">\
  <caption>'+feature.properties.Zespol+'</caption>\
  <tr class = "wiersz">\
    <td id = "komorka_zespoly">Rok założenia</td>\
    <td id = "komorka2_zespoly">'+feature.properties.Rok+'</td>\
  </tr>\
  <tr class = "wiersz">\
    <td id = "komorka_zespoly">Dywizja</td>\
    <td id = "komorka2_zespoly">'+feature.properties.Dywizja+'</td>\
  </tr>\
  </tr>\
  <tr class = "wiersz">\
    <td id = "komorka_zespoly">Występy w finałach</td>\
    <td id = "komorka2_zespoly">'+feature.properties.Wystepy+'</td>\
  </tr>\
  <tr class = "wiersz">\
    <td id = "komorka_zespoly">Mistrzostwa</td>\
    <td id = "komorka2_zespoly">'+feature.properties.Mistrzostwa+'</td>\
  </tr>\
  <tr class = "wiersz">\
    <td id = "komorka_zespoly">Konferencja</td>\
    <td id = "komorka2_zespoly">'+feature.properties.Konferencja+'</td>\
  </tr>\
  <tr class = "wiersz">\
    <td id = "komorka_zespoly">Stan</td>\
    <td id = "komorka2_zespoly">'+feature.properties.Stan+'</td>\
  </tr>\
  </table>')
 
  layer.on('click', function(e){
    map.setView ([feature.properties.ycoord,feature.properties.xcoord], 6.5);
});


  if (feature.properties.Zespol =="Cleveland Cavaliers" || feature.properties.Zespol =="Dallas Mavericks"){
layer.on('click',function(e){
	 //var arena_1a = arena.getElementsByClassName("arena_photo")[0].style.display = "block";
	 //var arena_1b = arena.getElementsByClassName("arena_photo")[1].style.display = "none";
	 arena_div.scrollTo(0, 0);
	 document.getElementById("arena").style.display='block';
	 document.getElementById("text").innerHTML = feature.properties.Arena;
	 document.getElementById("background").style.backgroundPosition ='0 55%';
	 document.getElementById("background").style.backgroundImage = 'url('+feature.properties.Background+')';
	 document.getElementById("pojemnosc").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/> Pojemność: </span></br>'  + feature.properties.Pojemnosc;
	 document.getElementById("maskotka").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Maskotka:</span></br>'  + feature.properties.Maskotka+' & '+feature.properties.Maskotka_2;
	 document.getElementById("otwarcie").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"> Rok otwarcia: </span></br>' + feature.properties.Otwarcie;
	 document.getElementById("photo").style.height = "300px";
	 document.getElementsByClassName("photo_slider")[0].style.marginTop = "10px";
	 var arena_1 = arena.getElementsByClassName("arena_photo")[0].src = feature.properties.Image;
	 var arena_2 = arena.getElementsByClassName("arena_photo")[1].src = feature.properties.Arena2_link;
	 var arena_wysokosc_1 = arena.getElementsByClassName("arena_photo")[0].style.height = "300px";
	 var arena_wysokosc_2 = arena.getElementsByClassName("arena_photo")[1].style.height = "300px";
	 var zawodnik_photo_image_1 = zawodnik_photo_1.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_1_link;
	 var zawodnik_tekst_1 = zawodnik_1.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_1;
	 var zawodnik_photo_image_2 = zawodnik_photo_2.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_2_link;
	 var zawodnik_tekst_2 = zawodnik_2.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_2;
	 var zawodnik_photo_image_3 = zawodnik_photo_3.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_3_link;
	 var zawodnik_tekst_3 = zawodnik_3.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_3;
	 var zawodnik_photo_image_4 = zawodnik_photo_4.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_4_link;
	 var zawodnik_tekst_4 = zawodnik_4.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_4;
	 var zawodnik_photo_image_5 = zawodnik_photo_5.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_5_link;
	 var zawodnik_tekst_5 = zawodnik_5.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_5;
	 var numer_1 = zawodnik_photo_1.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_1;
	 var numer_2 = zawodnik_photo_2.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_2;
	 var numer_3 = zawodnik_photo_3.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_3;
	 var numer_4 = zawodnik_photo_4.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_4;
	 var numer_5 = zawodnik_photo_5.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_5;
	 var flaga_1 = zawodnik_photo_1.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_1+")";
	 var flaga_2 = zawodnik_photo_2.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_2+")";
	 var flaga_3 = zawodnik_photo_3.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_3+")";
	 var flaga_4 = zawodnik_photo_4.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_4+")";
	 var flaga_5 = zawodnik_photo_5.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_5+")";
	 var pozycja_1 = pierwsza_dwojka.getElementsByClassName("pozycja")[0].innerHTML = feature.properties.Pozycja_1;
	 var pozycja_2 = pierwsza_dwojka.getElementsByClassName("pozycja")[1].innerHTML = feature.properties.Pozycja_2;
	 var pozycja_3 = druga_dwojka.getElementsByClassName("pozycja")[0].innerHTML = feature.properties.Pozycja_3;
	 var pozycja_4 = druga_dwojka.getElementsByClassName("pozycja")[1].innerHTML = feature.properties.Pozycja_4;
	 var pozycja_5 = zawodnik_5.getElementsByClassName("pozycja")[0].innerHTML = feature.properties.Pozycja_5;
	 var wiek_1 = zawodnik_photo_1.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_1;
	 var wiek_2 = zawodnik_photo_2.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_2;
	 var wiek_3 = zawodnik_photo_3.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_3;
	 var wiek_4 = zawodnik_photo_4.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_4;
	 var wiek_5 = zawodnik_photo_5.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_5;
	 var wzrost_1 = zawodnik_photo_1.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_1;
	 var wzrost_2 = zawodnik_photo_2.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_2;
	 var wzrost_3 = zawodnik_photo_3.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_3;
	 var wzrost_4 = zawodnik_photo_4.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_4;
	 var wzrost_5 = zawodnik_photo_5.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_5;
	 document.getElementById("twitter_arena_1").innerHTML = '<a id = "twitter_link" target="_blank" href="'+feature.properties.wikimedia_arena_1+'">'+feature.properties.wikimedia_autor+'<img id = "wikipedia_logo"  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Tango_style_Wikipedia_Icon.svg/100px-Tango_style_Wikipedia_Icon.svg.png"</a>';
	 document.getElementById("twitter_arena_2").innerHTML = '<a id = "twitter_link" target="_blank" href="'+feature.properties.twitter_arena+'">'+feature.properties.Zespol+'<i id = "twitter_icon" class="fa fa-twitter"></i></a>';
	 document.getElementById("twitter_arena_3").innerHTML = '<a id = "twitter_link" target="_blank" href="'+feature.properties.twitter_maskotka+'">'+feature.properties.Maskotka_2+'<i id = "twitter_icon" class="fa fa-twitter"></i></a>';
	 document.getElementById("twitter_arena_4").style.display = "block";
	 document.getElementById("twitter_arena_4").innerHTML = '<a id = "twitter_link" target="_blank" href="'+feature.properties.twitter_maskotka2+'">'+feature.properties.Maskotka+'<i id = "twitter_icon" class="fa fa-twitter"></i></a>';
	 document.getElementById("nba_link").innerHTML = '<a id = "nba_link_spodek" target="_blank" href = "'+feature.properties.nba_druzyna+'"><img src = "https://dl.dropboxusercontent.com/s/kqippwm4xaypogz/nba.png?dl=0" id = "nba_logo_spodek" width=18px height = 40px><h3 id = "nba_text"></h3></a>';
	 document.getElementById("nba_text").innerHTML = feature.properties.Zespol;
	 document.getElementById("photo_maskotka").style.display = 'block';
	 document.getElementById("photo_maskotka").innerHTML =  '<img class = "zespol_photo" src=" ' +feature.properties.Maskotka_link+'" id = "maskotka_image" height = 300px;>';
	 document.getElementById("twitter").style.top = "265px";
	 document.getElementById("twitter2").style.top = "265px";
	 document.getElementById("twitter3").style.top = "882";
	 }
     	 
)}
else if (feature.properties.Zespol =="Minnesota Timberwolves"){
layer.on('click',function(e){		 
document.getElementById("arena").style.display='block';
	 //var arena_1a = arena.getElementsByClassName("arena_photo")[0].style.display = "block";
	 //var arena_1b = arena.getElementsByClassName("arena_photo")[1].style.display = "none";
	 arena_div.scrollTo(0, 0);
	 document.getElementById("text").innerHTML = feature.properties.Arena;
	 document.getElementById("background").style.backgroundPosition ='0 25%';
	 document.getElementById("background").style.backgroundImage = 'url('+feature.properties.Background+')';
	 document.getElementById("pojemnosc").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/> Pojemność: </span></br>'  + feature.properties.Pojemnosc;
	 document.getElementById("maskotka").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Maskotka:</span></br>'  + feature.properties.Maskotka;
	 document.getElementById("otwarcie").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"> Rok otwarcia: </span></br>' + feature.properties.Otwarcie;
	 document.getElementById("photo").style.height = "250px";
	 document.getElementsByClassName("photo_slider")[0].style.marginTop = "10px";
	 var arena_1 = arena.getElementsByClassName("arena_photo")[0].src = feature.properties.Image;
	 var arena_2 = arena.getElementsByClassName("arena_photo")[1].src = feature.properties.Arena2_link;
	 var arena_wysokosc_1 = arena.getElementsByClassName("arena_photo")[0].style.height = "250px";
	 var arena_wysokosc_2 = arena.getElementsByClassName("arena_photo")[1].style.height = "250px";
	 var zawodnik_photo_image_1 = zawodnik_photo_1.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_1_link;
	 var zawodnik_tekst_1 = zawodnik_1.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_1;
	 var zawodnik_photo_image_2 = zawodnik_photo_2.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_2_link;
	 var zawodnik_tekst_2 = zawodnik_2.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_2;
	 var zawodnik_photo_image_3 = zawodnik_photo_3.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_3_link;
	 var zawodnik_tekst_3 = zawodnik_3.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_3;
	 var zawodnik_photo_image_4 = zawodnik_photo_4.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_4_link;
	 var zawodnik_tekst_4 = zawodnik_4.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_4;
	 var zawodnik_photo_image_5 = zawodnik_photo_5.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_5_link;
	 var zawodnik_tekst_5 = zawodnik_5.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_5;
	 var numer_1 = zawodnik_photo_1.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_1;
	 var numer_2 = zawodnik_photo_2.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_2;
	 var numer_3 = zawodnik_photo_3.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_3;
	 var numer_4 = zawodnik_photo_4.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_4;
	 var numer_5 = zawodnik_photo_5.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_5;
	 var flaga_1 = zawodnik_photo_1.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_1+")";
	 var flaga_2 = zawodnik_photo_2.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_2+")";
	 var flaga_3 = zawodnik_photo_3.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_3+")";
	 var flaga_4 = zawodnik_photo_4.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_4+")";
	 var flaga_5 = zawodnik_photo_5.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_5+")";
	 var pozycja_1 = pierwsza_dwojka.getElementsByClassName("pozycja")[0].innerHTML = feature.properties.Pozycja_1;
	 var pozycja_2 = pierwsza_dwojka.getElementsByClassName("pozycja")[1].innerHTML = feature.properties.Pozycja_2;
	 var pozycja_3 = druga_dwojka.getElementsByClassName("pozycja")[0].innerHTML = feature.properties.Pozycja_3;
	 var pozycja_4 = druga_dwojka.getElementsByClassName("pozycja")[1].innerHTML = feature.properties.Pozycja_4;
	 var pozycja_5 = zawodnik_5.getElementsByClassName("pozycja")[0].innerHTML = feature.properties.Pozycja_5;
	 var wiek_1 = zawodnik_photo_1.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_1;
	 var wiek_2 = zawodnik_photo_2.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_2;
	 var wiek_3 = zawodnik_photo_3.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_3;
	 var wiek_4 = zawodnik_photo_4.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_4;
	 var wiek_5 = zawodnik_photo_5.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_5;
	 var wzrost_1 = zawodnik_photo_1.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_1;
	 var wzrost_2 = zawodnik_photo_2.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_2;
	 var wzrost_3 = zawodnik_photo_3.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_3;
	 var wzrost_4 = zawodnik_photo_4.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_4;
	 var wzrost_5 = zawodnik_photo_5.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_5;
	 document.getElementById("twitter_arena_1").innerHTML = '<a id = "twitter_link" target="_blank" href="'+feature.properties.wikimedia_arena_1+'">'+feature.properties.wikimedia_autor+'<img id = "wikipedia_logo"  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Tango_style_Wikipedia_Icon.svg/100px-Tango_style_Wikipedia_Icon.svg.png"</a>';
	 document.getElementById("twitter_arena_2").innerHTML = '<a id = "twitter_link" target="_blank" href="'+feature.properties.twitter_arena+'">'+feature.properties.Zespol+'<i id = "twitter_icon" class="fa fa-twitter"></i></a>';
	 document.getElementById("twitter_arena_3").innerHTML = '<a id = "twitter_link" target="_blank" href="'+feature.properties.twitter_maskotka+'">'+feature.properties.Maskotka+'<i id = "twitter_icon" class="fa fa-twitter"></i></a>';
	 document.getElementById("twitter_arena_4").style.display = "none";
	 document.getElementById("nba_link").innerHTML = '<a id = "nba_link_spodek" target="_blank" href = "'+feature.properties.nba_druzyna+'"><img src = "https://dl.dropboxusercontent.com/s/kqippwm4xaypogz/nba.png?dl=0" id = "nba_logo_spodek" width=18px height = 40px><h3 id = "nba_text"></h3></a>';
	 document.getElementById("nba_text").innerHTML = feature.properties.Zespol;
	 document.getElementById("photo_maskotka").style.display = 'block';
	 document.getElementById("photo_maskotka").innerHTML =  '<img class = "zespol_photo" src=" ' +feature.properties.Maskotka_link+'" id = "maskotka_image" height = 300px;>';
	 document.getElementById("twitter").style.top = "215px";
	 document.getElementById("twitter2").style.top = "215px";
	 document.getElementById("twitter3").style.top = "832";
	 }	 
)}
else if (feature.properties.Zespol =="Brooklyn Nets" || feature.properties.Zespol =="Golden State Warriors" || feature.properties.Zespol =="New York Knicks" || feature.properties.Zespol =="Los Angeles Lakers"){
layer.on('click',function(e){			 
	 //var arena_1a = arena.getElementsByClassName("arena_photo")[0].style.display = "block";
	 //var arena_1b = arena.getElementsByClassName("arena_photo")[1].style.display = "none";
	 arena_div.scrollTo(0, 0);
	 document.getElementById("arena").style.display='block';
	 document.getElementById("text").innerHTML = feature.properties.Arena;
	 document.getElementById("background").style.backgroundPosition ='0 50%';
	 document.getElementById("background").style.backgroundImage = 'url('+feature.properties.Background+')';
	 document.getElementById("pojemnosc").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/> Pojemność: </span></br>'  + feature.properties.Pojemnosc;
	 document.getElementById("maskotka").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Maskotka:</span></br>'  + feature.properties.Maskotka;
	 document.getElementById("otwarcie").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"> Rok otwarcia: </span></br>' + feature.properties.Otwarcie;
	 document.getElementById("photo").style.height = "300px";
	 document.getElementsByClassName("photo_slider")[0].style.marginTop = "10px";
	 var arena_1 = arena.getElementsByClassName("arena_photo")[0].src = feature.properties.Image;
	 var arena_2 = arena.getElementsByClassName("arena_photo")[1].src = feature.properties.Arena2_link;
	 var arena_wysokosc_1 = arena.getElementsByClassName("arena_photo")[0].style.height = "300px";
	 var arena_wysokosc_2 = arena.getElementsByClassName("arena_photo")[1].style.height = "300px";
	 var zawodnik_photo_image_1 = zawodnik_photo_1.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_1_link;
	 var zawodnik_tekst_1 = zawodnik_1.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_1;
	 var zawodnik_photo_image_2 = zawodnik_photo_2.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_2_link;
	 var zawodnik_tekst_2 = zawodnik_2.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_2;
	 var zawodnik_photo_image_3 = zawodnik_photo_3.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_3_link;
	 var zawodnik_tekst_3 = zawodnik_3.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_3;
	 var zawodnik_photo_image_4 = zawodnik_photo_4.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_4_link;
	 var zawodnik_tekst_4 = zawodnik_4.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_4;
	 var zawodnik_photo_image_5 = zawodnik_photo_5.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_5_link;
	 var zawodnik_tekst_5 = zawodnik_5.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_5;
	 var numer_1 = zawodnik_photo_1.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_1;
	 var numer_2 = zawodnik_photo_2.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_2;
	 var numer_3 = zawodnik_photo_3.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_3;
	 var numer_4 = zawodnik_photo_4.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_4;
	 var numer_5 = zawodnik_photo_5.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_5;
	 var flaga_1 = zawodnik_photo_1.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_1+")";
	 var flaga_2 = zawodnik_photo_2.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_2+")";
	 var flaga_3 = zawodnik_photo_3.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_3+")";
	 var flaga_4 = zawodnik_photo_4.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_4+")";
	 var flaga_5 = zawodnik_photo_5.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_5+")";
	 var pozycja_1 = pierwsza_dwojka.getElementsByClassName("pozycja")[0].innerHTML = feature.properties.Pozycja_1;
	 var pozycja_2 = pierwsza_dwojka.getElementsByClassName("pozycja")[1].innerHTML = feature.properties.Pozycja_2;
	 var pozycja_3 = druga_dwojka.getElementsByClassName("pozycja")[0].innerHTML = feature.properties.Pozycja_3;
	 var pozycja_4 = druga_dwojka.getElementsByClassName("pozycja")[1].innerHTML = feature.properties.Pozycja_4;
	 var pozycja_5 = zawodnik_5.getElementsByClassName("pozycja")[0].innerHTML = feature.properties.Pozycja_5;
	 var wiek_1 = zawodnik_photo_1.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_1;
	 var wiek_2 = zawodnik_photo_2.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_2;
	 var wiek_3 = zawodnik_photo_3.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_3;
	 var wiek_4 = zawodnik_photo_4.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_4;
	 var wiek_5 = zawodnik_photo_5.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_5;
	 var wzrost_1 = zawodnik_photo_1.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_1;
	 var wzrost_2 = zawodnik_photo_2.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_2;
	 var wzrost_3 = zawodnik_photo_3.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_3;
	 var wzrost_4 = zawodnik_photo_4.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_4;
	 var wzrost_5 = zawodnik_photo_5.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_5;
	 document.getElementById("twitter_arena_1").innerHTML = '<a id = "twitter_link" target="_blank" href="'+feature.properties.wikimedia_arena_1+'">'+feature.properties.wikimedia_autor+'<img id = "wikipedia_logo"  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Tango_style_Wikipedia_Icon.svg/100px-Tango_style_Wikipedia_Icon.svg.png"</a>';
	 document.getElementById("twitter_arena_2").innerHTML = '<a id = "twitter_link" target="_blank" href="'+feature.properties.twitter_arena+'">'+feature.properties.Zespol+'<i id = "twitter_icon" class="fa fa-twitter"></i></a>';
	 document.getElementById("twitter_arena_3").innerHTML = '<a id = "twitter_link" target="_blank" href="'+feature.properties.twitter_maskotka+'">'+feature.properties.Maskotka+'<i id = "twitter_icon" class="fa fa-twitter"></i></a>';
	 document.getElementById("twitter_arena_4").style.display = "none";
	 document.getElementById("nba_link").innerHTML = '<a id = "nba_link_spodek" target="_blank" href = "'+feature.properties.nba_druzyna+'"><img src = "https://dl.dropboxusercontent.com/s/kqippwm4xaypogz/nba.png?dl=0" id = "nba_logo_spodek" width=18px height = 40px><h3 id = "nba_text"></h3></a>';
	 document.getElementById("nba_text").innerHTML = feature.properties.Zespol;
	 document.getElementById("photo_maskotka").style.display = 'none';
	 document.getElementById("twitter").style.top = "265px";
	 document.getElementById("twitter2").style.top = "265px";
	 document.getElementById("twitter3").style.top = "882";}	 
)}
else if (feature.properties.Zespol =="Milwaukee Bucks" || feature.properties.Zespol =="Memphis Grizzlies" || feature.properties.Zespol =="Sacramento Kings" || feature.properties.Zespol =="Orlando Magic"){
layer.on('click',function(e){	
	 //var arena_1a = arena.getElementsByClassName("arena_photo")[0].style.display = "block";
	 //var arena_1b = arena.getElementsByClassName("arena_photo")[1].style.display = "none";
	 arena_div.scrollTo(0, 0);	 
	 document.getElementById("arena").style.display='block';
	 document.getElementById("text").innerHTML = feature.properties.Arena;
	 document.getElementById("background").style.backgroundPosition ='0 70%';
	 document.getElementById("background").style.backgroundImage = 'url('+feature.properties.Background+')';
	 document.getElementById("pojemnosc").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/> Pojemność: </span></br>'  + feature.properties.Pojemnosc;
	 document.getElementById("maskotka").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Maskotka:</span></br>'  + feature.properties.Maskotka;
	 document.getElementById("otwarcie").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"> Rok otwarcia: </span></br>' + feature.properties.Otwarcie;
	 document.getElementById("photo").style.height = "300px";
	 document.getElementsByClassName("photo_slider")[0].style.marginTop = "10px";
	 var arena_1 = arena.getElementsByClassName("arena_photo")[0].src = feature.properties.Image;
	 var arena_2 = arena.getElementsByClassName("arena_photo")[1].src = feature.properties.Arena2_link;
	 var arena_wysokosc_1 = arena.getElementsByClassName("arena_photo")[0].style.height = "300px";
	 var arena_wysokosc_2 = arena.getElementsByClassName("arena_photo")[1].style.height = "300px";
	 var zawodnik_photo_image_1 = zawodnik_photo_1.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_1_link;
	 var zawodnik_tekst_1 = zawodnik_1.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_1;
	 var zawodnik_photo_image_2 = zawodnik_photo_2.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_2_link;
	 var zawodnik_tekst_2 = zawodnik_2.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_2;
	 var zawodnik_photo_image_3 = zawodnik_photo_3.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_3_link;
	 var zawodnik_tekst_3 = zawodnik_3.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_3;
	 var zawodnik_photo_image_4 = zawodnik_photo_4.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_4_link;
	 var zawodnik_tekst_4 = zawodnik_4.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_4;
	 var zawodnik_photo_image_5 = zawodnik_photo_5.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_5_link;
	 var zawodnik_tekst_5 = zawodnik_5.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_5;
	 var numer_1 = zawodnik_photo_1.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_1;
	 var numer_2 = zawodnik_photo_2.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_2;
	 var numer_3 = zawodnik_photo_3.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_3;
	 var numer_4 = zawodnik_photo_4.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_4;
	 var numer_5 = zawodnik_photo_5.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_5;
	 var flaga_1 = zawodnik_photo_1.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_1+")";
	 var flaga_2 = zawodnik_photo_2.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_2+")";
	 var flaga_3 = zawodnik_photo_3.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_3+")";
	 var flaga_4 = zawodnik_photo_4.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_4+")";
	 var flaga_5 = zawodnik_photo_5.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_5+")";
	 var pozycja_1 = pierwsza_dwojka.getElementsByClassName("pozycja")[0].innerHTML = feature.properties.Pozycja_1;
	 var pozycja_2 = pierwsza_dwojka.getElementsByClassName("pozycja")[1].innerHTML = feature.properties.Pozycja_2;
	 var pozycja_3 = druga_dwojka.getElementsByClassName("pozycja")[0].innerHTML = feature.properties.Pozycja_3;
	 var pozycja_4 = druga_dwojka.getElementsByClassName("pozycja")[1].innerHTML = feature.properties.Pozycja_4;
	 var pozycja_5 = zawodnik_5.getElementsByClassName("pozycja")[0].innerHTML = feature.properties.Pozycja_5;
	 var wiek_1 = zawodnik_photo_1.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_1;
	 var wiek_2 = zawodnik_photo_2.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_2;
	 var wiek_3 = zawodnik_photo_3.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_3;
	 var wiek_4 = zawodnik_photo_4.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_4;
	 var wiek_5 = zawodnik_photo_5.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_5;
	 var wzrost_1 = zawodnik_photo_1.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_1;
	 var wzrost_2 = zawodnik_photo_2.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_2;
	 var wzrost_3 = zawodnik_photo_3.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_3;
	 var wzrost_4 = zawodnik_photo_4.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_4;
	 var wzrost_5 = zawodnik_photo_5.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_5;
	 document.getElementById("twitter_arena_1").innerHTML = '<a id = "twitter_link" target="_blank" href="'+feature.properties.wikimedia_arena_1+'">'+feature.properties.wikimedia_autor+'<img id = "wikipedia_logo"  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Tango_style_Wikipedia_Icon.svg/100px-Tango_style_Wikipedia_Icon.svg.png"</a>';
	 document.getElementById("twitter_arena_2").innerHTML = '<a id = "twitter_link" target="_blank" href="'+feature.properties.twitter_arena+'">'+feature.properties.Zespol+'<i id = "twitter_icon" class="fa fa-twitter"></i></a>';
	 document.getElementById("twitter_arena_3").innerHTML = '<a id = "twitter_link" target="_blank" href="'+feature.properties.twitter_maskotka+'">'+feature.properties.Maskotka+'<i id = "twitter_icon" class="fa fa-twitter"></i></a>';
	 document.getElementById("twitter_arena_4").style.display = "none";
	 document.getElementById("nba_link").innerHTML = '<a id = "nba_link_spodek" target="_blank" href = "'+feature.properties.nba_druzyna+'"><img src = "https://dl.dropboxusercontent.com/s/kqippwm4xaypogz/nba.png?dl=0" id = "nba_logo_spodek" width=18px height = 40px><h3 id = "nba_text"></h3></a>';
	 document.getElementById("nba_text").innerHTML = feature.properties.Zespol;
	 document.getElementById("photo_maskotka").style.display = 'block';
	 document.getElementById("photo_maskotka").innerHTML =  '<img class = "zespol_photo" src=" ' +feature.properties.Maskotka_link+'" id = "maskotka_image" height = 300px;>';
	 document.getElementById("twitter").style.top = "265px";
	 document.getElementById("twitter2").style.top = "265px";
	 document.getElementById("twitter3").style.top = "882";}	 
)}
else if (feature.properties.Zespol =="Phoenix Suns" || feature.properties.Zespol =="Indiana Pacers" || feature.properties.Zespol =="Detroit Pistons"){
layer.on('click',function(e){		 
	 //var arena_1a = arena.getElementsByClassName("arena_photo")[0].style.display = "block";
	 //var arena_1b = arena.getElementsByClassName("arena_photo")[1].style.display = "none";
	 arena_div.scrollTo(0, 0);
	 document.getElementById("arena").style.display='block';
	 document.getElementById("text").innerHTML = feature.properties.Arena;
	 document.getElementById("background").style.backgroundPosition ='0 30%';
	 document.getElementById("background").style.backgroundImage = 'url('+feature.properties.Background+')';
	 document.getElementById("pojemnosc").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/> Pojemność: </span></br>'  + feature.properties.Pojemnosc;
	 document.getElementById("maskotka").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Maskotka:</span></br>'  + feature.properties.Maskotka;
	 document.getElementById("otwarcie").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"> Rok otwarcia: </span></br>' + feature.properties.Otwarcie;
	 document.getElementById("photo").style.height = "300px";
	 document.getElementsByClassName("photo_slider")[0].style.marginTop = "10px";
	 var arena_1 = arena.getElementsByClassName("arena_photo")[0].src = feature.properties.Image;
	 var arena_2 = arena.getElementsByClassName("arena_photo")[1].src = feature.properties.Arena2_link;
	 var arena_wysokosc_1 = arena.getElementsByClassName("arena_photo")[0].style.height = "300px";
	 var arena_wysokosc_2 = arena.getElementsByClassName("arena_photo")[1].style.height = "300px";
	 var zawodnik_photo_image_1 = zawodnik_photo_1.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_1_link;
	 var zawodnik_tekst_1 = zawodnik_1.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_1;
	 var zawodnik_photo_image_2 = zawodnik_photo_2.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_2_link;
	 var zawodnik_tekst_2 = zawodnik_2.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_2;
	 var zawodnik_photo_image_3 = zawodnik_photo_3.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_3_link;
	 var zawodnik_tekst_3 = zawodnik_3.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_3;
	 var zawodnik_photo_image_4 = zawodnik_photo_4.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_4_link;
	 var zawodnik_tekst_4 = zawodnik_4.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_4;
	 var zawodnik_photo_image_5 = zawodnik_photo_5.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_5_link;
	 var zawodnik_tekst_5 = zawodnik_5.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_5;
	 var numer_1 = zawodnik_photo_1.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_1;
	 var numer_2 = zawodnik_photo_2.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_2;
	 var numer_3 = zawodnik_photo_3.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_3;
	 var numer_4 = zawodnik_photo_4.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_4;
	 var numer_5 = zawodnik_photo_5.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_5;
	 var flaga_1 = zawodnik_photo_1.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_1+")";
	 var flaga_2 = zawodnik_photo_2.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_2+")";
	 var flaga_3 = zawodnik_photo_3.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_3+")";
	 var flaga_4 = zawodnik_photo_4.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_4+")";
	 var flaga_5 = zawodnik_photo_5.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_5+")";
	 var pozycja_1 = pierwsza_dwojka.getElementsByClassName("pozycja")[0].innerHTML = feature.properties.Pozycja_1;
	 var pozycja_2 = pierwsza_dwojka.getElementsByClassName("pozycja")[1].innerHTML = feature.properties.Pozycja_2;
	 var pozycja_3 = druga_dwojka.getElementsByClassName("pozycja")[0].innerHTML = feature.properties.Pozycja_3;
	 var pozycja_4 = druga_dwojka.getElementsByClassName("pozycja")[1].innerHTML = feature.properties.Pozycja_4;
	 var pozycja_5 = zawodnik_5.getElementsByClassName("pozycja")[0].innerHTML = feature.properties.Pozycja_5;
	 var wiek_1 = zawodnik_photo_1.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_1;
	 var wiek_2 = zawodnik_photo_2.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_2;
	 var wiek_3 = zawodnik_photo_3.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_3;
	 var wiek_4 = zawodnik_photo_4.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_4;
	 var wiek_5 = zawodnik_photo_5.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_5;
	 var wzrost_1 = zawodnik_photo_1.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_1;
	 var wzrost_2 = zawodnik_photo_2.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_2;
	 var wzrost_3 = zawodnik_photo_3.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_3;
	 var wzrost_4 = zawodnik_photo_4.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_4;
	 var wzrost_5 = zawodnik_photo_5.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_5;
	 document.getElementById("twitter_arena_1").innerHTML = '<a id = "twitter_link" target="_blank" href="'+feature.properties.wikimedia_arena_1+'">'+feature.properties.wikimedia_autor+'<img id = "wikipedia_logo"  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Tango_style_Wikipedia_Icon.svg/100px-Tango_style_Wikipedia_Icon.svg.png"</a>';
	 document.getElementById("twitter_arena_2").innerHTML = '<a id = "twitter_link" target="_blank" href="'+feature.properties.twitter_arena+'">'+feature.properties.Zespol+'<i id = "twitter_icon" class="fa fa-twitter"></i></a>';
	 document.getElementById("twitter_arena_3").innerHTML = '<a id = "twitter_link" target="_blank" href="'+feature.properties.twitter_maskotka+'">'+feature.properties.Maskotka+'<i id = "twitter_icon" class="fa fa-twitter"></i></a>';
	 document.getElementById("twitter_arena_4").style.display = "none";
	 document.getElementById("nba_link").innerHTML = '<a id = "nba_link_spodek" target="_blank" href = "'+feature.properties.nba_druzyna+'"><img src = "https://dl.dropboxusercontent.com/s/kqippwm4xaypogz/nba.png?dl=0" id = "nba_logo_spodek" width=18px height = 40px><h3 id = "nba_text"></h3></a>';
	 document.getElementById("nba_text").innerHTML = feature.properties.Zespol;
	 document.getElementById("photo_maskotka").style.display = 'block';
	 document.getElementById("photo_maskotka").innerHTML =  '<img class = "zespol_photo" src=" ' +feature.properties.Maskotka_link+'" id = "maskotka_image" height = 300px;>';
	 document.getElementById("twitter").style.top = "265px";
	 document.getElementById("twitter2").style.top = "265px";
	 document.getElementById("twitter3").style.top = "882";}	 
)}
else if (feature.properties.Zespol =="Miami Heat" || feature.properties.Zespol =="Charlotte Hornets"){
layer.on('click',function(e){		 
	 //var arena_1a = arena.getElementsByClassName("arena_photo")[0].style.display = "block";
	 //var arena_1b = arena.getElementsByClassName("arena_photo")[1].style.display = "none";
	 arena_div.scrollTo(0, 0);
	 document.getElementById("arena").style.display='block';
	 document.getElementById("text").innerHTML = feature.properties.Arena;
	 document.getElementById("background").style.backgroundPosition ='0 45%';
	 document.getElementById("background").style.backgroundImage = 'url('+feature.properties.Background+')';
	 document.getElementById("pojemnosc").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/> Pojemność: </span></br>'  + feature.properties.Pojemnosc;
	 document.getElementById("maskotka").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Maskotka:</span></br>'  + feature.properties.Maskotka;
	 document.getElementById("otwarcie").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"> Rok otwarcia: </span></br>' + feature.properties.Otwarcie;
	 document.getElementById("photo").style.height = "300px";
	 document.getElementsByClassName("photo_slider")[0].style.marginTop = "10px";
	 var arena_1 = arena.getElementsByClassName("arena_photo")[0].src = feature.properties.Image;
	 var arena_2 = arena.getElementsByClassName("arena_photo")[1].src = feature.properties.Arena2_link;
	 var arena_wysokosc_1 = arena.getElementsByClassName("arena_photo")[0].style.height = "300px";
	 var arena_wysokosc_2 = arena.getElementsByClassName("arena_photo")[1].style.height = "300px";
	 var zawodnik_photo_image_1 = zawodnik_photo_1.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_1_link;
	 var zawodnik_tekst_1 = zawodnik_1.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_1;
	 var zawodnik_photo_image_2 = zawodnik_photo_2.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_2_link;
	 var zawodnik_tekst_2 = zawodnik_2.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_2;
	 var zawodnik_photo_image_3 = zawodnik_photo_3.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_3_link;
	 var zawodnik_tekst_3 = zawodnik_3.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_3;
	 var zawodnik_photo_image_4 = zawodnik_photo_4.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_4_link;
	 var zawodnik_tekst_4 = zawodnik_4.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_4;
	 var zawodnik_photo_image_5 = zawodnik_photo_5.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_5_link;
	 var zawodnik_tekst_5 = zawodnik_5.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_5;
	 var numer_1 = zawodnik_photo_1.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_1;
	 var numer_2 = zawodnik_photo_2.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_2;
	 var numer_3 = zawodnik_photo_3.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_3;
	 var numer_4 = zawodnik_photo_4.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_4;
	 var numer_5 = zawodnik_photo_5.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_5;
	 var flaga_1 = zawodnik_photo_1.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_1+")";
	 var flaga_2 = zawodnik_photo_2.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_2+")";
	 var flaga_3 = zawodnik_photo_3.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_3+")";
	 var flaga_4 = zawodnik_photo_4.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_4+")";
	 var flaga_5 = zawodnik_photo_5.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_5+")";
	 var pozycja_1 = pierwsza_dwojka.getElementsByClassName("pozycja")[0].innerHTML = feature.properties.Pozycja_1;
	 var pozycja_2 = pierwsza_dwojka.getElementsByClassName("pozycja")[1].innerHTML = feature.properties.Pozycja_2;
	 var pozycja_3 = druga_dwojka.getElementsByClassName("pozycja")[0].innerHTML = feature.properties.Pozycja_3;
	 var pozycja_4 = druga_dwojka.getElementsByClassName("pozycja")[1].innerHTML = feature.properties.Pozycja_4;
	 var pozycja_5 = zawodnik_5.getElementsByClassName("pozycja")[0].innerHTML = feature.properties.Pozycja_5;
	 var wiek_1 = zawodnik_photo_1.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_1;
	 var wiek_2 = zawodnik_photo_2.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_2;
	 var wiek_3 = zawodnik_photo_3.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_3;
	 var wiek_4 = zawodnik_photo_4.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_4;
	 var wiek_5 = zawodnik_photo_5.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_5;
	 var wzrost_1 = zawodnik_photo_1.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_1;
	 var wzrost_2 = zawodnik_photo_2.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_2;
	 var wzrost_3 = zawodnik_photo_3.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_3;
	 var wzrost_4 = zawodnik_photo_4.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_4;
	 var wzrost_5 = zawodnik_photo_5.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_5;
	 document.getElementById("twitter_arena_1").innerHTML = '<a id = "twitter_link" target="_blank" href="'+feature.properties.wikimedia_arena_1+'">'+feature.properties.wikimedia_autor+'<img id = "wikipedia_logo"  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Tango_style_Wikipedia_Icon.svg/100px-Tango_style_Wikipedia_Icon.svg.png"</a>';
	 document.getElementById("twitter_arena_2").innerHTML = '<a id = "twitter_link" target="_blank" href="'+feature.properties.twitter_arena+'">'+feature.properties.Zespol+'<i id = "twitter_icon" class="fa fa-twitter"></i></a>';
	 document.getElementById("twitter_arena_3").innerHTML = '<a id = "twitter_link" target="_blank" href="'+feature.properties.twitter_maskotka+'">'+feature.properties.Maskotka+'<i id = "twitter_icon" class="fa fa-twitter"></i></a>';
	 document.getElementById("twitter_arena_4").style.display = "none";
	 document.getElementById("nba_link").innerHTML = '<a id = "nba_link_spodek" target="_blank" href = "'+feature.properties.nba_druzyna+'"><img src = "https://dl.dropboxusercontent.com/s/kqippwm4xaypogz/nba.png?dl=0" id = "nba_logo_spodek" width=18px height = 40px><h3 id = "nba_text"></h3></a>';
	 document.getElementById("nba_text").innerHTML = feature.properties.Zespol;
	 document.getElementById("photo_maskotka").style.display = 'block';
	 document.getElementById("photo_maskotka").innerHTML =  '<img class = "zespol_photo" src=" ' +feature.properties.Maskotka_link+'" id = "maskotka_image" height = 300px;>';
	 document.getElementById("twitter").style.top = "265px";
	 document.getElementById("twitter2").style.top = "265px";
	 document.getElementById("twitter3").style.top = "882";}	 
)}
else if (feature.properties.Zespol =="Oklahoma City Thunder" || feature.properties.Zespol =="Boston Celtics"){
layer.on('click',function(e){	
	 //var arena_1a = arena.getElementsByClassName("arena_photo")[0].style.display = "block";
	 //var arena_1b = arena.getElementsByClassName("arena_photo")[1].style.display = "none";
	 arena_div.scrollTo(0, 0);	 
	 document.getElementById("arena").style.display='block';
	 document.getElementById("text").innerHTML = feature.properties.Arena;
	 document.getElementById("background").style.backgroundPosition ='0 40%';
	 document.getElementById("background").style.backgroundImage = 'url('+feature.properties.Background+')';
	 document.getElementById("pojemnosc").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/> Pojemność: </span></br>'  + feature.properties.Pojemnosc;
	 document.getElementById("maskotka").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Maskotka:</span></br>'  + feature.properties.Maskotka;
	 document.getElementById("otwarcie").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"> Rok otwarcia: </span></br>' + feature.properties.Otwarcie;
	 document.getElementById("photo").style.height = "300px";
	 document.getElementsByClassName("photo_slider")[0].style.marginTop = "10px";
	 var arena_1 = arena.getElementsByClassName("arena_photo")[0].src = feature.properties.Image;
	 var arena_2 = arena.getElementsByClassName("arena_photo")[1].src = feature.properties.Arena2_link;
	 var arena_wysokosc_1 = arena.getElementsByClassName("arena_photo")[0].style.height = "300px";
	 var arena_wysokosc_2 = arena.getElementsByClassName("arena_photo")[1].style.height = "300px";
	 var zawodnik_photo_image_1 = zawodnik_photo_1.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_1_link;
	 var zawodnik_tekst_1 = zawodnik_1.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_1;
	 var zawodnik_photo_image_2 = zawodnik_photo_2.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_2_link;
	 var zawodnik_tekst_2 = zawodnik_2.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_2;
	 var zawodnik_photo_image_3 = zawodnik_photo_3.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_3_link;
	 var zawodnik_tekst_3 = zawodnik_3.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_3;
	 var zawodnik_photo_image_4 = zawodnik_photo_4.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_4_link;
	 var zawodnik_tekst_4 = zawodnik_4.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_4;
	 var zawodnik_photo_image_5 = zawodnik_photo_5.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_5_link;
	 var zawodnik_tekst_5 = zawodnik_5.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_5;
	 var numer_1 = zawodnik_photo_1.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_1;
	 var numer_2 = zawodnik_photo_2.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_2;
	 var numer_3 = zawodnik_photo_3.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_3;
	 var numer_4 = zawodnik_photo_4.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_4;
	 var numer_5 = zawodnik_photo_5.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_5;
	 var flaga_1 = zawodnik_photo_1.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_1+")";
	 var flaga_2 = zawodnik_photo_2.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_2+")";
	 var flaga_3 = zawodnik_photo_3.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_3+")";
	 var flaga_4 = zawodnik_photo_4.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_4+")";
	 var flaga_5 = zawodnik_photo_5.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_5+")";
	 var pozycja_1 = pierwsza_dwojka.getElementsByClassName("pozycja")[0].innerHTML = feature.properties.Pozycja_1;
	 var pozycja_2 = pierwsza_dwojka.getElementsByClassName("pozycja")[1].innerHTML = feature.properties.Pozycja_2;
	 var pozycja_3 = druga_dwojka.getElementsByClassName("pozycja")[0].innerHTML = feature.properties.Pozycja_3;
	 var pozycja_4 = druga_dwojka.getElementsByClassName("pozycja")[1].innerHTML = feature.properties.Pozycja_4;
	 var pozycja_5 = zawodnik_5.getElementsByClassName("pozycja")[0].innerHTML = feature.properties.Pozycja_5;
	 var wiek_1 = zawodnik_photo_1.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_1;
	 var wiek_2 = zawodnik_photo_2.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_2;
	 var wiek_3 = zawodnik_photo_3.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_3;
	 var wiek_4 = zawodnik_photo_4.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_4;
	 var wiek_5 = zawodnik_photo_5.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_5;
	 var wzrost_1 = zawodnik_photo_1.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_1;
	 var wzrost_2 = zawodnik_photo_2.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_2;
	 var wzrost_3 = zawodnik_photo_3.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_3;
	 var wzrost_4 = zawodnik_photo_4.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_4;
	 var wzrost_5 = zawodnik_photo_5.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_5;
	 document.getElementById("twitter_arena_1").innerHTML = '<a id = "twitter_link" target="_blank" href="'+feature.properties.wikimedia_arena_1+'">'+feature.properties.wikimedia_autor+'<img id = "wikipedia_logo"  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Tango_style_Wikipedia_Icon.svg/100px-Tango_style_Wikipedia_Icon.svg.png"</a>';
	 document.getElementById("twitter_arena_2").innerHTML = '<a id = "twitter_link" target="_blank" href="'+feature.properties.twitter_arena+'">'+feature.properties.Zespol+'<i id = "twitter_icon" class="fa fa-twitter"></i></a>';
	 document.getElementById("twitter_arena_3").innerHTML = '<a id = "twitter_link" target="_blank" href="'+feature.properties.twitter_maskotka+'">'+feature.properties.Maskotka+'<i id = "twitter_icon" class="fa fa-twitter"></i></a>';
	 document.getElementById("twitter_arena_4").style.display = "none";
	 document.getElementById("nba_link").innerHTML = '<a id = "nba_link_spodek" target="_blank" href = "'+feature.properties.nba_druzyna+'"><img src = "https://dl.dropboxusercontent.com/s/kqippwm4xaypogz/nba.png?dl=0" id = "nba_logo_spodek" width=18px height = 40px><h3 id = "nba_text"></h3></a>';
	 document.getElementById("nba_text").innerHTML = feature.properties.Zespol;
	 document.getElementById("photo_maskotka").style.display = 'block';
	 document.getElementById("photo_maskotka").innerHTML =  '<img class = "zespol_photo" src=" ' +feature.properties.Maskotka_link+'" id = "maskotka_image" height = 300px;>';
	 document.getElementById("twitter").style.top = "265px";
	 document.getElementById("twitter2").style.top = "265px";
	 document.getElementById("twitter3").style.top = "882";}	 
)}
else  {
   layer.on('click',function(e){
	 //var arena_1a = arena.getElementsByClassName("arena_photo")[0].style.display = "block";
	 //var arena_1b = arena.getElementsByClassName("arena_photo")[1].style.display = "none";
	 arena_div.scrollTo(0, 0);
	 document.getElementById("arena").style.display='block';
	 document.getElementById("text").innerHTML = feature.properties.Arena;
	 document.getElementById("background").style.backgroundPosition ='0 45%';
	 document.getElementById("background").style.backgroundImage = 'url('+feature.properties.Background+')';
	 document.getElementById("pojemnosc").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Pojemność:</span></br>'  + feature.properties.Pojemnosc;
	 document.getElementById("maskotka").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"/>Maskotka:</span></br>'  + feature.properties.Maskotka;
	 document.getElementById("otwarcie").innerHTML = '<span style = "text-shadow:3px 3px 2px #999; -webkit-text-stroke: 0.6px #ccc;"> Rok otwarcia: </span></br>' + feature.properties.Otwarcie;
	 document.getElementById("photo").style.height = "300px";
	 document.getElementsByClassName("photo_slider")[0].style.marginTop = "10px";
	 var arena_1 = arena.getElementsByClassName("arena_photo")[0].src = feature.properties.Image;
	 var arena_2 = arena.getElementsByClassName("arena_photo")[1].src = feature.properties.Arena2_link;
	 var arena_wysokosc_1 = arena.getElementsByClassName("arena_photo")[0].style.height = "300px";
	 var arena_wysokosc_2 = arena.getElementsByClassName("arena_photo")[1].style.height = "300px";
	 var zawodnik_photo_image_1 = zawodnik_photo_1.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_1_link;
	 var zawodnik_tekst_1 = zawodnik_1.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_1;
	 var zawodnik_photo_image_2 = zawodnik_photo_2.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_2_link;
	 var zawodnik_tekst_2 = zawodnik_2.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_2;
	 var zawodnik_photo_image_3 = zawodnik_photo_3.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_3_link;
	 var zawodnik_tekst_3 = zawodnik_3.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_3;
	 var zawodnik_photo_image_4 = zawodnik_photo_4.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_4_link;
	 var zawodnik_tekst_4 = zawodnik_4.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_4;
	 var zawodnik_photo_image_5 = zawodnik_photo_5.getElementsByClassName("player_image")[0].src = feature.properties.Zawodnik_5_link;
	 var zawodnik_tekst_5 = zawodnik_5.getElementsByClassName("zawodnik")[0].innerHTML = feature.properties.Zawodnik_5;
	 var numer_1 = zawodnik_photo_1.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_1;
	 var numer_2 = zawodnik_photo_2.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_2;
	 var numer_3 = zawodnik_photo_3.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_3;
	 var numer_4 = zawodnik_photo_4.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_4;
	 var numer_5 = zawodnik_photo_5.getElementsByClassName("numer")[0].innerHTML = feature.properties.Numer_5;
	 var flaga_1 = zawodnik_photo_1.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_1+")";
	 var flaga_2 = zawodnik_photo_2.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_2+")";
	 var flaga_3 = zawodnik_photo_3.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_3+")";
	 var flaga_4 = zawodnik_photo_4.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_4+")";
	 var flaga_5 = zawodnik_photo_5.getElementsByClassName("flaga")[0].style.backgroundImage = "url("+feature.properties.Kraj_5+")";
	 var pozycja_1 = pierwsza_dwojka.getElementsByClassName("pozycja")[0].innerHTML = feature.properties.Pozycja_1;
	 var pozycja_2 = pierwsza_dwojka.getElementsByClassName("pozycja")[1].innerHTML = feature.properties.Pozycja_2;
	 var pozycja_3 = druga_dwojka.getElementsByClassName("pozycja")[0].innerHTML = feature.properties.Pozycja_3;
	 var pozycja_4 = druga_dwojka.getElementsByClassName("pozycja")[1].innerHTML = feature.properties.Pozycja_4;
	 var pozycja_5 = zawodnik_5.getElementsByClassName("pozycja")[0].innerHTML = feature.properties.Pozycja_5;
	 var wiek_1 = zawodnik_photo_1.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_1;
	 var wiek_2 = zawodnik_photo_2.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_2;
	 var wiek_3 = zawodnik_photo_3.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_3;
	 var wiek_4 = zawodnik_photo_4.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_4;
	 var wiek_5 = zawodnik_photo_5.getElementsByClassName("wiek")[0].innerHTML = feature.properties.wiek_5;
	 var wzrost_1 = zawodnik_photo_1.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_1;
	 var wzrost_2 = zawodnik_photo_2.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_2;
	 var wzrost_3 = zawodnik_photo_3.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_3;
	 var wzrost_4 = zawodnik_photo_4.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_4;
	 var wzrost_5 = zawodnik_photo_5.getElementsByClassName("wzrost")[0].innerHTML = feature.properties.Wzrost_5;
	 document.getElementById("twitter_arena_1").innerHTML = '<a id = "twitter_link" target="_blank" href="'+feature.properties.wikimedia_arena_1+'">'+feature.properties.wikimedia_autor+'<img id = "wikipedia_logo"  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Tango_style_Wikipedia_Icon.svg/100px-Tango_style_Wikipedia_Icon.svg.png"</a>';
	 document.getElementById("twitter_arena_2").innerHTML = '<a id = "twitter_link" target="_blank" href="'+feature.properties.twitter_arena+'">'+feature.properties.Zespol+'<i id = "twitter_icon" class="fa fa-twitter"></i></a>';
	 document.getElementById("twitter_arena_3").innerHTML = '<a id = "twitter_link" target="_blank" href="'+feature.properties.twitter_maskotka+'">'+feature.properties.Maskotka+'<i id = "twitter_icon" class="fa fa-twitter"></i></a>';
	 document.getElementById("twitter_arena_4").style.display = "none";
	 document.getElementById("nba_link").innerHTML = '<a id = "nba_link_spodek" target="_blank" href = "'+feature.properties.nba_druzyna+'"><img src = "https://dl.dropboxusercontent.com/s/kqippwm4xaypogz/nba.png?dl=0" id = "nba_logo_spodek" width=18px height = 40px><h3 id = "nba_text"></h3></a>';
	 document.getElementById("nba_text").innerHTML = feature.properties.Zespol;
	 document.getElementById("photo_maskotka").style.display = 'block';
	 document.getElementById("photo_maskotka").innerHTML =  '<img class = "zespol_photo" src=" ' +feature.properties.Maskotka_link+'" id = "maskotka_image" height = 300px;>';
	 document.getElementById("twitter").style.top = "265px";
	 document.getElementById("twitter2").style.top = "265px";
	 document.getElementById("twitter3").style.top = "882";
  })} 	
}},pointToLayer: function (feature, latlng) {
        switch (feature.properties.Zespol) {
            case 'Chicago Bulls': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/snb9zua05de5l2b/Chicago_Bulls_logo.png?dl=0',
				className:"logo",
				iconAnchor:   [30, 15], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
            case 'Brooklyn Nets': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/zlhz0xm6ai21ch2/Brooklyn_Nets_newlogo.png?dl=0',
				className:"nets",
				iconAnchor:   [26, 15], 
				popupAnchor:  [0, -25],
				iconSize: [50, 65]})});
			case 'Atlanta Hawks': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/vkxal24jhvx4uar/Atlanta_Hawks_logo.png?dl=0',
				className:"logo",
				iconAnchor:   [30, 15], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'Boston Celtics': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/srz6g3m805tinl6/Boston_Celtics.png?dl=0',
				className:"logo",
				iconAnchor:   [30, 15], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]
				  })});
			case 'Charlotte Hornets': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/ojt7p2j13phvbto/Charlotte_Hornets_%282014%29.png?dl=0',
				className:"logo",
				iconAnchor:   [30, 15], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'Cleveland Cavaliers': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/gjueymj3rba7xth/Cleveland_Cavaliers_logo.png?dl=0',
				className:"cavaliers",
				iconAnchor:   [22, 15], 
				popupAnchor:  [0, -25],
				iconSize: [40, 75]})});
			case 'Dallas Mavericks': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/drdwad8v3biej9u/Dallas_Mavericks_logo.png?dl=0',
				className:"suns_dallas",
				iconAnchor:   [30, 15], 
				popupAnchor:  [0, -25],
				iconSize: [60, 65]})});
			case 'Denver Nuggets': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/yvwiw1hpecfoo4m/Denver_Nuggets.png?dl=0',
				className:"logo",
				iconAnchor:   [30, 15], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'Golden State Warriors': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/kp0qgpye0a15s2a/Golden_State_Warriors_logo.png?dl=0',
				className:"kings_golden",
				iconAnchor:   [30, 15], 
				popupAnchor:  [0, -25],
				iconSize: [55, 60]})});
			case 'Houston Rockets': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/yr7263qzg0qacbz/Houston_Rockets.png?dl=0',
				className:"grizzlies_rockets_bucks",
				iconAnchor:   [27, 15], 
				popupAnchor:  [0, -25],
				iconSize: [55, 65]})});
			case 'Indiana Pacers': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/78fjk4qop6sn79t/Indiana_Pacers.png?dl=0',
				className:"logo",
				iconAnchor:   [30, 15], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'Los Angeles Clippers': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/eq75179aho68ajt/Los_Angeles_Clippers_%282015%29.png?dl=0',
				className:"clippers",
				iconAnchor:   [33, 15], 
				popupAnchor:  [0, -25],
				iconSize: [65, 50]})});
			case 'Los Angeles Lakers': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/emwaka48vmup2yj/Los_Angeles_Lakers_logo.png?dl=0',
				className:"pelicans_lakers",
				iconAnchor:   [32, 15], 
				popupAnchor:  [0, -25],
				iconSize: [65, 45]})});
			case 'Memphis Grizzlies': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/vlcb8k8nzjtj6x8/Memphis_Grizzlies.png?dl=0',
				className:"grizzlies_rockets_bucks",
				iconAnchor:   [27, 15], 
				popupAnchor:  [0, -25],
				iconSize: [55, 65]})});
			case 'Miami Heat': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/w8wuz4iljwp2a9k/Miami_Heat_logo.png?dl=0',
				className:"heat",
				iconAnchor:   [22, 15], 
				popupAnchor:  [0, -25],
				iconSize: [45, 70]})});
			case 'Milwaukee Bucks': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/guibb18vifr5xwz/Milwaukee_Bucks_logo.png?dl=0',
				className:"grizzlies_rockets_bucks",
				iconAnchor:   [27, 15], 
				popupAnchor:  [0, -25],
				iconSize: [55, 65]})});
			case 'Minnesota Timberwolves': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/o4f7vt15bp2fqpp/Minnesota_Timberwolves_logo.png?dl=0',
				className:"logo",
				iconAnchor:   [30, 15], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'New Orleans Pelicans': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/k1s0zd1itknm11s/New_Orleans_Pelicans_logo.png?dl=0',
				className:"pelicans_lakers",
				iconAnchor:   [33, 15], 
				popupAnchor:  [0, -25],
				iconSize: [65, 45]})});
			case 'New York Knicks': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/8oiqfequizv2996/New_York_Knicks_logo.png?dl=0',
				className:"knicks",
				iconAnchor:   [33, 15], 
				popupAnchor:  [0, -25],
				iconSize: [65, 55]})});
			case 'Oklahoma City Thunder': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/a6mdi2r5e6k9oas/Oklahoma_City_Thunder.png?dl=0',
				className:"logo",
				iconAnchor:   [30, 15], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'Orlando Magic': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/9lz5hsu8721wkvq/Orlando_Magic_logo.png?dl=0',
				className:"orlando",
				iconAnchor:   [35, 15], 
				popupAnchor:  [0, -25],
				iconSize: [70, 55]})});
			case 'Philadelphia 76ers': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/rf9wfvoel3o9ebb/Philadelphia_76ers_logo.png?dl=0',
				className:"logo",
				iconAnchor:   [30, 15], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'Phoenix Suns': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/232h00i5wkg8y1i/Phoenix_Suns_logo.png?dl=0',
				className:"suns_dallas",
				iconAnchor:   [30, 15], 
				popupAnchor:  [0, -25],
				iconSize: [60, 65]})});
			case 'Detroit Pistons': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/7fj2w32uchd6m58/Pistons_logo17.png?dl=0',
				className:"logo",
				iconAnchor:   [30, 15], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'Portland Trail Blazers': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/u554jpb6cf3hemo/Portland_Trail_Blazers_logo.png?dl=0',
				className:"logo",
				iconAnchor:   [32, 15], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'Sacramento Kings': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/s9oc4ubvfxsznpk/SacramentoKings.png?dl=0',
				className:"kings_golden",
				iconAnchor:   [30, 15], 
				popupAnchor:  [0, -25],
				iconSize: [55, 60]})});
			case 'San Antonio Spurs': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/z66ahros6cryc2e/San_Antonio_Spurs.png?dl=0',
				className:"spurs",
				iconAnchor:   [35, 15], 
				popupAnchor:  [0, -25],
				iconSize: [70, 35]})});
			case 'Toronto Raptors': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/0khkggphu7u9q84/Toronto_Raptors_logo.png?dl=0',
				className:"logo",
				iconAnchor:   [30, 15], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60]})});
			case 'Utah Jazz': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/q4tpkwmg58lbk1n/Utah_Jazz_logo_%282016%29.png?dl=0',
				className:"utah",
				iconAnchor:   [38, 15],
				popupAnchor:  [0, -25],
				iconSize: [80, 35]})});
			case 'Washington Wizards': return L.marker(latlng,{icon:L.icon({
				iconUrl: 'https://dl.dropboxusercontent.com/s/9zqlber957no6k2/Washington_Wizards_logo.png?dl=0',
				className:"logo",
				iconAnchor:   [30, 15], 
				popupAnchor:  [0, -25],
				iconSize: [60, 60],})});
        } 
    } 
     
	   

}); 
zespoly.addTo(map);


function twitter1(){
	document.getElementById("twitter").style.visibility = "visible", 
	document.getElementById("twitter").style.opacity = "1";
}
function twitter2(){
	document.getElementById("twitter").style.visibility = "hidden", 
	document.getElementById("twitter").style.opacity = "0";
}
function twitter3(){
	document.getElementById("twitter2").style.visibility = "visible", 
	document.getElementById("twitter2").style.opacity = "1";
}
function twitter4(){
	document.getElementById("twitter2").style.visibility = "hidden", 
	document.getElementById("twitter2").style.opacity = "0";
}
function twitter5(){
	document.getElementById("twitter3").style.visibility = "visible", 
	document.getElementById("twitter3").style.opacity = "1";
}
function twitter6(){
	document.getElementById("twitter3").style.visibility = "hidden", 
	document.getElementById("twitter3").style.opacity = "0";
}

function twitter_zoom(){
	document.getElementById("maskotka_image").style.transform = "scale(1.07)", 
	document.getElementById("maskotka_image").style.opacity = "0.95";
}
function twitter_zoom_out(){
	document.getElementById("maskotka_image").style.transform = "scale(1.00)", 
	document.getElementById("maskotka_image").style.opacity = "1";
}
var sliderr = document.getElementsByClassName("photo_slider")[0];

var arena = document.getElementById("photo");

 var jeden_player = document.getElementById("arena_div");
 
	 var pierwsza_dwojka = jeden_player.getElementsByClassName("players")[0];
	 var zawodnik_1 = pierwsza_dwojka.getElementsByClassName("player")[0];
	 var zawodnik_2 = pierwsza_dwojka.getElementsByClassName("player")[1];
	 var zawodnik_photo_1 = zawodnik_1.getElementsByClassName("player_photo")[0];
	 var zawodnik_photo_2 = zawodnik_2.getElementsByClassName("player_photo")[0];
	 
	 var druga_dwojka = jeden_player.getElementsByClassName("players")[1];
	 var zawodnik_3 = druga_dwojka.getElementsByClassName("player")[0];
	 var zawodnik_4 = druga_dwojka.getElementsByClassName("player")[1];
	 var zawodnik_photo_3 = zawodnik_3.getElementsByClassName("player_photo")[0];
	 var zawodnik_photo_4 = zawodnik_4.getElementsByClassName("player_photo")[0];
	 
	 var zawodnik_5 = jeden_player.getElementsByClassName("player5")[0];
	 var zawodnik_photo_5 = zawodnik_5.getElementsByClassName("player_photo")[0];

var dywizja = new L.GeoJSON.AJAX("https://www.dl.dropboxusercontent.com/s/skr5rtgix0t81i4/json_dywizje.json?dl=0",{onEachFeature:function forEachFeature (feature,layer){
	if (feature.properties.Mistrzostwa != null){
layer.bindPopup
('<table id = "tabela">\
  <tr class = "wiersz">\
    <td id = "komorka">Stan</td>\
    <td id = "komorka2">'+feature.properties.Stan+'</td>\
  </tr>\
  <tr class = "wiersz">\
    <td id = "komorka">Drużyny</td>\
    <td id = "komorka2">'+feature.properties.Druzyny+'</td>\
  </tr>\
  <tr class = "wiersz">\
    <td id = "komorka">Mistrzostwa</td>\
    <td id = "komorka2">'+feature.properties.Mistrzostwa+'</td>\
  </tr>\
  <tr class = "wiersz">\
    <td id = "komorka">Konferencja</td>\
    <td id = "komorka2">'+feature.properties.Konferencja+'</td>\
  </tr>\
  <tr class = "wiersz">\
    <td id = "komorka">Dywizja</td>\
    <td id = "komorka2">'+feature.properties.Dywizja+'</td>\
  </tr>\
  </table>')
 
  
  
}}, style:function style(feature) {
    return {
        fillColor: getColor(feature.properties.Dywizja),
        weight: 2,
        opacity: 1,
        color: '#333',
        dashArray: '1',
        fillOpacity: 0.80
    };   
}

	
	
});
dywizja.addTo(map);


function getColor(d) {
    return d == "Pacyfiku" ? '#c77575' :
           d == "Centralna"  ? '#44a2a2' :
           d == "Atlantyku"  ? '#c299d6' :
           d == "Północno-zachodnia"  ? '#c7b275' :
           d == "Południowo-wschodnia"   ? '#37ae73' :
           d == "Południowo-zachodnia"   ? '#f6da6a' :
                      '#7c7c6a';
				}	
					
dywizja.on('click', function(e){
    map.setView(e.latlng, 5);
	document.getElementById('arena').style.display='none';
});


map.on('click', function(){
    map.setView([38, -97], 5.1);
	document.getElementById('arena').style.display='none';
});

map.zoomControl.setPosition('bottomleft');

	function legenda_click() {
  var legenda = document.getElementById("legenda_dywizje");
  if (legenda.style.opacity === "1") {
    legenda.style.visibility = "hidden", legenda.style.opacity = "0";
  } else  {
    legenda.style.visibility = "visible", legenda.style.opacity = "1";
  }
	};
			

	
	var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("arena_photo");
  var dots = document.getElementsByClassName("demo");
  var index = slideIndex;
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " white";
  
}







