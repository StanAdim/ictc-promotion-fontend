<script setup>
definePageMeta({
    layout:'application',
    middleware:'auth'
})
</script>
<template>
    <div class="mx-auto my-10">
        <h2 class="text-xl font-semibold mb-4">SIDO Incubation Programme Applications</h2>
        <data-table />
    </div>
</template>