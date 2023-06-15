<template>
  <div class="bg-gray-100">
    <!-- Hero section -->
    <MainHero />
    <!-- Features section -->
    <Features />
    <!-- Carousel section -->
    <Carousel />
    <!-- Contact section -->
    <Contact />
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import Contact from '../components/Contact.vue'
import Features from '../components/Features.vue'
import MainHero from '../components/MainHero.vue'

export default {
  name: 'LandingPage',
  components: {
    MainHero,
    Features,
    Contact,
    Carousel
  },
  data() {
    return {
      isMenuOpen: false
    }
  }
}
</script>
