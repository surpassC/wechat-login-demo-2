<template>
  <div class="organizer">
    <h1>Welcome to the Organizer Dashboard</h1>
    <p>As an organizer, you have access to manage library resources and events.</p>
    <h2>Library Overview</h2>
    <p>Our digital library is dedicated to providing a vast collection of books and resources for our community. Here you can:</p>
    <ul>
      <li>Manage books and resources</li>
      <li>Organize events and activities</li>
      <li>View user feedback and ratings</li>
    </ul>
    <img src="https://via.placeholder.com/300" alt="Organizer Image" class="organizer-image" />
  </div>
</template>

<script setup>
</script>

<style scoped>
.organizer {
  text-align: center;
  padding: 20px;
  background-color: #f2f2f2;
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.organizer-image {
  max-width: 100%;
  height: auto;
  margin: 20px 0;
}
</style>
