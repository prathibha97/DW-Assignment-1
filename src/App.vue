<template>
  <Navbar />
  <body>
    <RouterView />
  </body>
  <Footer />
</template>

<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
</script>
