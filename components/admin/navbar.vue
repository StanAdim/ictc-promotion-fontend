<script setup>
const config = useRuntimeConfig()
const handleLogout = () =>{
    
}
</script>
<template>
<nav class="bg-gray-800 py-4">
    <div class="container mx-auto flex justify-between items-center">
        <div class="text-white text-2xl font-bold"><nuxt-link to="/crm/admin/">SIDO - {{ config.public.appName }}</nuxt-link></div>
        <ul class="flex space-x-6 text-white">
            <li><nuxt-link to="/crm/admin/" class="hover:text-gray-400">Dashboard</nuxt-link></li>
            <li><nuxt-link to="/crm/admin/sido" class="hover:text-gray-400">Sido Programe</nuxt-link></li>
            <li><button @click.prevent="handleLogout()" class="hover:text-gray-400">Logout</button></li>
            <!-- Add more navigation links as needed -->
        </ul>
    </div>
</nav>
</template>
<style scoped>
 
</style>