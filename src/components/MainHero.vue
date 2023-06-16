<template>
  <section class="bg-gradient-to-r from-primary-500 to-indigo-500 text-white py-20 md:h-[75vh]" id="hero-section">
    <div class="container mx-auto flex flex-col-reverse md:flex-row items-center">
      <div class="md:w-1/2">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">Welcome to Jack Pet Supplies</h1>
        <h3 class="text-2xl md:mb-8 text-center md:text-left">Find your perfect pet companion</h3>
      </div>
      <div class="md:w-1/2">
        <img src="../assets/images/Saly.png" alt="hero image" class="w-[250px] md:w-[350px] h-[250px] md:h-[350px] mx-auto" />
      </div>
    </div>
    <div class="container mx-auto mt-10 px-3">
      <h2 class="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">Discover the Perfect Pet Companion</h2>
      <p class="md:text-lg text-center md:text-left">
        At Jack Pet Supplies, we understand the importance of finding the right pet companion to share your life
        with. Whether you're looking for a loyal dog, a playful cat, or a delightful small pet, we have a wide
        selection of animals waiting for their forever homes.
      </p>
      <p class="md:text-lg mt-4 text-center md:text-left">
        Our team of dedicated professionals is here to guide you through the adoption process, ensuring that you
        find the perfect match for your family and lifestyle. Visit our pet adoption page to explore the adorable
        pets available for adoption today.
      </p>
      <a
        href="/pets"
        class="mt-6 inline-block bg-purple-400 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-purple-600 transition-colors duration-300"
      >Adopt Now!</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainHeroComponent'
}
</script>
