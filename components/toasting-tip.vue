<script setup>
const props = defineProps({
    message: String
})
</script>

<template>
    <div class="toast-container">
        <div class="toast success">{{ message }}</div>
    </div>
</template>

<style scoped>
.toast-container {
  position: absolute;
  top: 4rem;
  right: 20px;
  z-index: 9000; /* Ensure it appears above other content */
}
.success {
    background-color: #27a340;
    color: #fff;
}
.error {
    background-color: #e83131;
    color: #fff;
}
.toast {
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px #00000033;
  animation: slideIn 0.5s ease-in-out forwards, fadeOut 10s 8.5s ease-in-out forwards;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
