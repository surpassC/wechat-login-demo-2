<script setup>
import { ref } from 'vue';
import router from '@/router';

const activities = ref(['Activity 1', 'Activity 2', 'Activity 3']);

const findActivity = () => {
  router.push({ name: 'Activity' });
};

const goToActivityDetail = (activity) => {
  router.push({ name: 'ActivityDetail', params: { activity } });
};
</script>

<template>
  <div class="container">
    <div class="recent-chat">
      <p>Recent Chat</p>
    </div>
    <div class="activity-grid">
      <div
        class="activity"
        v-for="(activity, index) in activities"
        :key="index"
        @click="goToActivityDetail(activity)"
      >
        <p>{{ activity }}</p>
      </div>
      <div class="activity-detail" v-for="n in 3" :key="n">
        <p>Activity Detail</p>
      </div>
    </div>
    <div class="find-activity">
      <button
        type="button"
        class="btn btn-info btn-lg find-activity-btn"
        @click="findActivity"
      >
        Find Activity Now!
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  gap: 20px;
  padding: 20px;
}

.recent-chat {
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
}

.activity-grid {
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.activity {
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  border-radius: 10px;
  cursor: pointer; /* Add cursor style to indicate clickable */
}

.activity-detail {
  border: 1px solid black;
  display: flex;
  height: 100px;
  border-radius: 5px;
}

.find-activity-btn {
  width: 100%; 
  height: 100%; 
  font-weight: bold; 
  border-radius: 50%; 
  text-align: center; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
}

.find-activity {
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 350px;
  width: 350px;
  text-align: center;
  position: relative;
  top: -400px; 
  left: 50px; 
}
</style>
