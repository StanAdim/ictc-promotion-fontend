<script setup>
const config = useRuntimeConfig()
</script>

<template>
<div class="bg-gray-100 ">
  <nav class="bg-gray-800 py-4">
    <div class="container mx-auto flex justify-between items-center">
        <div class="text-white text-2xl font-bold">SIDO - {{ config.public.appName }}</div>
        <ul class="flex space-x-6 text-white">
            <li><a href="#" class="hover:text-gray-400">Dashboard</a></li>
            <li><a href="#" class="hover:text-gray-400">Applications</a></li>
            <li><a href="#" class="hover:text-gray-400">Analytics</a></li>
            <!-- Add more navigation links as needed -->
        </ul>
    </div>
</nav>
<div class="container h-screen">
        <slot />
</div>
<footer class="bg-gray-800 py-4 mt-8">
    <div class="container mx-auto text-center text-gray-400 text-sm">
        &copy; 2024 Incubation Admin. All rights reserved.
    </div>
</footer>
</div>
</template>

<style>
.pageHeading{
  @apply w-full bg-sky-300  h-12 py-2 flex flex-wrap justify-between md:flex-row
}
</style>
