<template>
    <!--
    Any meaningful work is delegated to the routed components, 
    which are inserted here by the router
    -->
    <router-view />
    <Footer />
</template>

<script setup lang="ts">
import Footer from './components/Footer.vue'
</script>

<style scoped>
</style>
