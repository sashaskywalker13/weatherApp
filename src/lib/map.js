import mapboxgl from 'mapbox-gl';
import { KEY_FOR_MAP } from '../store/keys';

export default function createMap(lng, lat) {
  mapboxgl.accessToken = KEY_FOR_MAP;
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: 9,
  });

  map.addControl(new mapboxgl.NavigationControl());

  // eslint-disable-next-line no-unused-vars
  const marker = new mapboxgl.Marker()
    .setLngLat([lng, lat])
    .addTo(map);
}
