<template>
    <div class="flex items-center justify-center my-2">
      <div class="loader mx-0.5"></div>
      <div class="loader mx-0.5"></div>
      <!-- <div class="loader mx-0.5"></div> -->
    </div>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  .loader {
    border: 4px solid rgba(22, 202, 226, 0.56);
    border-left-color: #7c0d0d;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  </style>
  