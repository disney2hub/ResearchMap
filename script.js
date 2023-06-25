// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 13); // Example: London coordinates

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the map
var marker = L.marker([51.5, -0.09]).addTo(map);
//marker.bindPopup('Hello, this is a marker!').openPopup();// JavaScript Document
//var marker = L.marker([51.5, -0.09]).addTo(map);
//marker.bindPopup('<a href="https://www.utm.utoronto.ca/dvs" target="_blank">Click here to visit the page</a>');
// Add popup message




 
let template = `
<h3>Brush painting</h3>
<div style="text-align:center">
    <img width="150" height="150"src="images/testimage.jpeg"/>
<h3><a href="https://www.utm.utoronto.ca/dvs" target="_blank">My painting </h3>
</div>
`
marker.bindPopup(template);

//var marker = L.marker([51.5, -0.09]).addTo(map);
//marker.bindPopup('Hello, this is a marker!', '<a href="https://www.utm.utoronto.ca/dvs" target="_blank"><img src="images/testimage.jpeg" alt="Image"></a>');//

