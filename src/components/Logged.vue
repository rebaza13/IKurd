<template>
  <div class="container">
    <div class="message-box">
      <h1>The key is verified</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  setTimeout(() => {
    window.location.href = "https://www.mediafire.com/file/m5xyruiso5p7nc3/Key_Store-com.APPSTORE.NEW-1.1-2.apk/file";
  }, 2000);
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center;    /* Center vertically */
  height: 100vh;         /* Full viewport height */
  background-color: #f9f9f9; /* Light background color */
}

.message-box {
  padding: 20px;
  border: 2px solid #4CAF50; /* Green border */
  border-radius: 5px;
  background-color: #fff; /* White background */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */
}

h1 {
  color: #4CAF50; /* Green text color */
  margin: 0; /* Remove default margin */
}
</style>
