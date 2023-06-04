<template>
  <header v-if="!isLoginPage && !isRegisterPage">
    <Navbar />
  </header>
  <body>
    <RouterView />
  </body>
  <footer v-if="!isLoginPage && !isRegisterPage">
    <Footer />
  </footer>
</template>

<script setup>
import { RouterView, useRoute } from 'vue-router'

import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'

const route = useRoute()
const isLoginPage = route.name === 'login'
const isRegisterPage = route.name === 'register'
</script>
