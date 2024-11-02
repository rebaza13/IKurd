<template>
    <div class="container">
      <div class="message-box">
        <h1>The key is Not verified</h1>
      </div>
      <button class="back-button" @click="$router.go(-1)">گەڕانەوە بۆ پەڕەی سەرەکی</button>
    </div>
  </template>
  
  <script setup lang="ts">
  // No script needed for this simple component
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column; /* Align items vertically */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    height: 100vh; /* Full viewport height */
    background-color: #f9f9f9; /* Light background color */
  }
  
  .message-box {
    padding: 20px;
    border: 2px solid #ff5454; /* Red border */
    border-radius: 5px;
    background-color: #fff; /* White background */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  }
  
  h1 {
    color: #ff5454; /* Red text color */
    margin: 0; /* Remove default margin */
  }
  
  .back-button {
    margin-top: 20px; /* Space between message box and button */
    padding: 10px 20px; /* Vertical and horizontal padding */
    background-color: #ff5454; /* Red background color */
    color: white; /* White text color */
    border: none; /* Remove default border */
    border-radius: 5px; /* Rounded corners */
    cursor: pointer; /* Change cursor on hover */
    font-size: 16px; /* Font size */
    transition: background-color 0.3s; /* Smooth transition */
  }
  
  .back-button:hover {
    background-color: #d94f4f; /* Darker red on hover */
  }
  </style>
  