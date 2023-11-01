let h2 = document.querySelector('h2'); 
var map
console.log(map); 

function sucess(pos){
    h2.textContent = `latitude:${pos.coords.latitude}    longitude:${pos.coords.longitude}`; 
   
    if(map === undefined){
        map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);
    }else{
           map.remove();
           map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);
    }
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
}
function error(err){
    console.log(err); 
}
let wathID = navigator.geolocation.watchPosition(sucess, error, {
    enableHighAccuracy: true,
    timeout: 5000   

})

 //
 var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();
