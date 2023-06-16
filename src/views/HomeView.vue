<template>
  <div class="bg-gray-100">
    <!-- Hero section -->
    <MainHero />
    <!-- Banner -->
    <Banner />
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
import Banner from '../components/Banner.vue'

export default {
  name: 'LandingPage',
  components: {
    MainHero,
    Features,
    Contact,
    Carousel,
    Banner
  },
  data() {
    return {
      isMenuOpen: false
    }
  }
}
</script>
