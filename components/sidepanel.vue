<script setup>

</script>

<template>
    <div class="p-4">
        <h1 class="text-2xl font-semibold"><i class="fa-solid fa-house-user"></i></h1>
        <ul class="mt-4">
            <hr class=" bg-sky-400 py-0.5">
            <li class="my-1 text-center hover:bg-sky-300 hover:rounded-lg">
                <router-link to="/crm/admin/" class="block hover:text-teal-900">Dashboard</router-link>
            </li>
         
            <li @click="handleLogout" class="my-1 text-center hover:bg-rose-500 hover:rounded-lg">
                <router-link to="/" class="block hover:text-white">Logout</router-link>
            </li>
            <hr class=" bg-sky-400 py-0.5">
           
        </ul>
    </div>
</template>