<template>
  <div class="donate">
    <h1>Support Our Library</h1>
    <p>Your contributions help us expand our collection and provide valuable resources to the community.</p>

    <h2>Why Donate?</h2>
    <p>Your generous donations allow us to:</p>
    <ul>
      <li>Purchase new books and resources</li>
      <li>Organize community events and workshops</li>
      <li>Improve library facilities and technology</li>
    </ul>

    <h2>How to Donate</h2>
    <p>Donations can be made online through our secure payment portal. Click the button below to contribute:</p>
    <button class="donate-button">Donate Now</button>
  </div>
</template>

<script setup>
// No script needed for now
</script>

<style scoped>
.donate {
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
}

h2 {
  color: #555;
}

p {
  color: #666;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}

.donate-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.donate-button:hover {
  background-color: #0056b3;
}
</style>
