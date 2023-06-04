<template>
  <section class="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-20">
    <div class="container mx-auto flex flex-col-reverse md:flex-row items-center">
      <div class="md:w-1/2">
        <h1 class="text-5xl font-bold mb-4 text-center md:text-left">
          {{ title }}
        </h1>
        <p class="text-lg mb-8 text-center md:text-left">
          {{ subtitle }}
        </p>
      </div>
      <div class="md:w-1/2">
        <img :src="image" alt="hero image" class="w-[350px] h-[350px] mx-auto" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SubHeroComponent',
  props: {
    title: String,
    subtitle: String,
    image: String
  }
}
</script>
