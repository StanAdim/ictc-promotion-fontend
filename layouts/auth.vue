<template>
    <div class="flex h-screen bg-gray-100">
      <!-- Sidebar -->
      <div class="md:flex flex-col w-64 bg-gray-800" :class="{'hidden':sidebarOpen}">
        <div class="flex items-center justify-center h-16 bg-gray-900">
          <span class="text-white font-bold uppercase">Sidebar</span>
        </div>
        <div class="flex flex-col flex-1 overflow-y-auto">
          <nav class="flex-1 px-2 py-4 bg-gray-800">
            <a href="#" class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Dashboard
            </a>
            <!-- Add more navigation links here -->
          </nav>
        </div>
      </div>
  
      <!-- Main content -->
      <div class="flex flex-col flex-1 overflow-y-auto">
        <div class="flex items-center justify-between h-16 bg-white border-b border-gray-200">
          <div class="flex items-center px-4">
            <button @click.prevent="toggleSidebar" class="text-gray-500 focus:outline-none focus:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <input class="mx-4 w-full border rounded-md px-4 py-2" type="text" placeholder="Search">
          </div>
          <!-- Add more header content here -->
        </div>
        <div class="p-4">
          <h1 class="text-2xl font-bold">Welcome to my dashboard!</h1>
          <p class="mt-2 text-gray-600">This is an example dashboard using Tailwind CSS.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const sidebarOpen = ref(false)
  const toggleSidebar = ()=> {
    console.log(sidebarOpen.value);
    return (sidebarOpen.value = !sidebarOpen);
  }
  </script>
  
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>