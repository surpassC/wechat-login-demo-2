<template>
  <MglMap
    :access-token="mapboxToken"
    :center="[144.96332, -37.814]"
    :zoom="12"
    style="width: 100%; height: 500px"
  >
    <MglGeolocateControl position="top-right" />
    <MglNavigationControl position="top-right" />
    <MglMarker :coordinates="[144.96332, -37.814]" />
  </MglMap>
  <input v-model="searchQuery" placeholder="Search for places..." />
  <button @click="searchLocation">Search</button>
</template>

<script setup>
import { ref } from 'vue';
import { MglMap, MglMarker, MglNavigationControl, MglGeolocateControl } from 'vue-mapbox';

const mapboxToken = ref('YOUR_MAPBOX_ACCESS_TOKEN');
const searchQuery = ref('');

const searchLocation = () => {
  // 调用 MapBox Geocoding API 实现位置搜索
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapboxToken.value}`)
    .then(response => response.json())
    .then(data => {
      // 根据返回的数据在地图上标记搜索到的地点
      console.log(data);
    });
};
</script>

<style scoped>
.mapboxgl-map {
  width: 100%;
  height: 500px;
}
</style>
