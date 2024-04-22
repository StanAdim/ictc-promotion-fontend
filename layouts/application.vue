<script setup>
const config = useRuntimeConfig()
const appData = useAppDataStore()
const currentYear = new Date().getFullYear();

</script>

<template>
<div class="bg-gray-100 ">
  <!-- Nav Bar -->
  <AdminNavbar />
  <UsableCustomSpinLoad v-if="appData.isloading" />

  <!-- Content -->
<div class="container mx-auto bg-blue-100 p-1">
  
        <slot />
</div>
<!-- Footer -->
<footer class="bg-gray-800 py-4 mt-2">
    <div class="container mx-auto text-center text-gray-400 text-sm">
        &copy; {{currentYear}} {{config.public.appName}} Admin. All rights reserved.
    </div>
</footer>
</div>
</template>

<style>
.pageHeading{
  @apply w-full bg-sky-300  h-12 py-2 flex flex-wrap justify-between md:flex-row
}
.deadline{
    color:#ff7a7a;
    font-weight: 600;
}
</style>
