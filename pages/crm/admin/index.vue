<script setup>
const config = useRuntimeConfig()
definePageMeta({
    layout:'application'
})
</script>

<template>
    <div class="container mx-auto my-10">
    <h2 class="text-xl font-semibold mb-4">{{config.public.appName}} Dashboard</h2>
    <p>You are Welcome</p>
</div>
</template>