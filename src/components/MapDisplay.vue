<template>
  <div id="map" style="width: 100%; height: 400px;"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import mapboxgl from 'mapbox-gl';

onMounted(() => {
  mapboxgl.accessToken = 'your-mapbox-access-token';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude], // Replace with actual coordinates
    zoom: 9
  });

  new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
});
</script>
