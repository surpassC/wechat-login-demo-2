<template>
  <div class="about">
    <h1>About Our Library</h1>
    <p>Welcome to our digital library! We're dedicated to providing a vast collection of books and resources to our community.</p>
    <img src="https://via.placeholder.com/300" alt="Library Image" class="library-image" />
    <h2>Our Mission</h2>
    <p>To inspire a love of reading and provide access to information for all.</p>
  </div>
</template>

<script setup>
// No script needed for now
</script>

<style scoped>
.about {
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.5rem;
  margin-top: 1.5rem;
}

p {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.library-image {
  max-width: 100%;
  height: auto;
  margin: 20px 0;
}
</style>
