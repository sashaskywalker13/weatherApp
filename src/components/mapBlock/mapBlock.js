import mapboxgl from 'mapbox-gl';

export default function createMap(lng, lat) {
  mapboxgl.accessToken = 'pk.eyJ1IjoiYWxla3NhbmRybXVraGluIiwiYSI6ImNrZnBnaXMzZTAweWwydW8wd21za244b2sifQ.Fqqc6n0-ZGPyadGa7F0oNw';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: 9,
  });

  map.addControl(new mapboxgl.NavigationControl());

  const marker = new mapboxgl.Marker()
    .setLngLat([lng, lat])
    .addTo(map);
}
