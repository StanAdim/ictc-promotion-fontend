<script setup>
defineProps({
  message: String,
  showError: Boolean,
  isSucceed: { type:Boolean,
  default:false  
  },
  isFailed: { type:Boolean,
  default:false  
  },
})
const isHidden = ref(false)
const hideError = ()=> {
  return (isHidden.value = !isHidden.value)
}
</script>

<template>
  <div
    id="toast-success"
    :class="{'hidden': isHidden, ' bg-red-600':isFailed, ' bg-green-600 text-xl px-5 py-3 ':isSucceed}"
    class="flex justify-center items-center w-full max-w-xs p-2 my-2  text-white rounded-lg shadow  z-9000"
    role="alert"
  >
    <div class="ms-3 text-sm font-normal">{{message}}</div>
    <button
      type="button"
      @click.prevent="hideError"
      class="ms-auto -mx-1.5 -my-1.5  text-white hover:text-red-900 
      rounded-lg focus:ring-2 focus:ring-orange-300 p-1.5 hover:bg-red-300 inline-flex 
      items-center justify-center h-8 w-8"
      data-dismiss-target="#toast-success"
      aria-label="Close"
    >
      <i class="fa-solid fa-xmark"></i>
    </button>
  </div>
</template>