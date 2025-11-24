<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <Sidebar/>
  <router-view/>
  <Footer/>
</template>

<style scoped>

</style>
