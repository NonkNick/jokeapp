<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <div class="h-screen flex">
    <Sidebar />
    <div class="flex-1 flex flex-col overflow-hidden">
      <main class="flex-1 overflow-auto p-6">
        <router-view/>
      </main>
      <Footer />
    </div>
  </div>
</template>

<style scoped>

</style>
