import mapboxgl from 'mapbox-gl';

export default function createMap() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiYWxla3NhbmRybXVraGluIiwiYSI6ImNrZnBnaXMzZTAweWwydW8wd21za244b2sifQ.Fqqc6n0-ZGPyadGa7F0oNw';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
  });
}
