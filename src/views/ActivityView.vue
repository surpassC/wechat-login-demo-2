<script setup>
import router from '@/router';
</script>

<template>
  <div class="container">
    <!-- 搜索栏 -->
    <div class="search-bar">
      <input type="text" placeholder="Search..." />
    </div>

    <!-- 链接按钮 -->
    <div class="button-group">
      <button 
        type="button" 
        @click="() => router.push({ name: 'Activitylist' })">
        show in list
      </button>
    </div>

    <!-- 地图和活动详情 -->
    <div class="map-container">
      <img :src="mapImage" alt="Map" class="map" />
      
      <!-- 使用按钮替代 div 来做为活动详情的按钮 -->
      <button 
        type="button" 
        class="activity-detail top-left" 
        @click="() => router.push({ name: '1' })">
        Activity 1
      </button>

      <button 
        type="button" 
        class="activity-detail bottom-right" 
        @click="() => router.push({ name: '2' })">
        Activity 2
      </button>
    </div>
  </div>
</template>


<style scoped>
.container {
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 10px;
  padding: 20px;
}

.search-bar {
  grid-row: 1 / 2;
}

.search-bar input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}

.button-group {
  display: flex;
  gap: 10px;
  grid-row: 2 / 3;
}

.btn {
  padding: 10px 20px;
  border: 1px solid black;
  text-align: center;
  text-decoration: none;
  color: black;
  cursor: pointer;
}

.map-container {
  position: relative;
  grid-row: 3 / 4;
  border: 1px solid black;
  height: 500px;
}

.map {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

.activity-detail {
  position: absolute;
  background-color: white;
  padding: 5px;
  border: 1px solid black;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer; 
  font-size: 14px;
}

.top-left {
  top: 10px;
  left: 10px;
}

.bottom-right {
  bottom: 30px;
  right: 100px;
}
</style>

