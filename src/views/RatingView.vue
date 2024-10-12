<script lang="ts" setup>
import { ref } from 'vue';

const selectedRating = ref(0);
const totalStars = 8; // Configurable number of stars

const setRating = (star: number) => {
  alert(`User selected ${star} rating`);
  selectedRating.value = star;
};
</script>

<template>
  <div class="wrapper">
    <span
      v-for="star in totalStars"
      :key="star"
      @click="setRating(star)"
      class="star"
      :class="{ filled: star <= selectedRating }"
      aria-label="Rating star"
      role="button"
      tabindex="0"
      @keydown.space="setRating(star)"
      @keydown.enter="setRating(star)"
    >
      ★
    </span>
    <br />
    <p v-if="selectedRating">You rated: {{ selectedRating }} out of {{ totalStars }}</p>
  </div>
</template>

<style scoped>
.wrapper {
  display: inline-block;
  align-items: center;
  gap: 2px;
}

.star {
  cursor: pointer;
  color: #d8d8d8;
}

.star:hover,
.star:active,
.star.filled {
  color: orange;
}
</style>
