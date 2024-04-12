<script setup>
defineProps({
  message: String,
  showError: Boolean
})
const isHidden = ref(false)
const hideError = ()=> {
  return (isHidden.value = !isHidden.value)
}
</script>

<template>
  <div
    id="toast-success"
    :class="{'hidden': isHidden}"
    class="flex justify-center items-center w-full max-w-xs p-2 my-2  text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 z-900"
    role="alert"
  >
    <div class="ms-3 text-sm font-normal">{{message}}</div>
    <button
      type="button"
      @click.prevent="hideError"
      class="ms-auto -mx-1.5 -my-1.5 bg-red-100 text-gray-600 hover:text-red-900 rounded-lg focus:ring-2 focus:ring-orange-300 p-1.5 hover:bg-gray-50 inline-flex items-center justify-center h-8 w-8 dark:text-red-500 dark:hover:text-white dark:bg-red-600 dark:hover:bg-red-700"
      data-dismiss-target="#toast-success"
      aria-label="Close"
    >
      <i class="fa-solid fa-xmark"></i>
    </button>
  </div>
</template>