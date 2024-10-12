<script setup>
import router from '@/router';
</script>

<template>
  <div class="container">
    <div class="search-bar">
      <input type="text" placeholder="Search..." />
    </div>
    <div class="button-group">
      <button 
        type="button" 
        @click="() => router.push({ name: 'Activity' })">
        show in map
      </button>
    </div>
    <div class="activity-list">
      <a href="#" @click.prevent="() => router.push({ name: '1' })">activity 1 detail</a>
      <a href="#" @click.prevent="() => router.push({ name: '2' })">activity 2 detail</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    filterActivities() {
    }
  }
};
</script>

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


.activity-list {
  grid-row: 3 / 4;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.activity-list a {
  display: block;
  padding: 10px;
  border: 1px solid black;
  text-decoration: none;
  color: black;
  background-color: #f9f9f9;
  cursor: pointer;
}
</style>