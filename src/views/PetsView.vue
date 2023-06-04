<template>
  <div class="mb-[2400px] md:mb-0">
    <!-- Hero section -->
    <section class="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-20">
      <div class="container mx-auto flex flex-col-reverse md:flex-row items-center">
        <div class="md:w-1/2">
          <h1 class="text-5xl font-bold mb-4 text-center md:text-left">
            Discover Your Perfect Pet Companion
          </h1>
          <p class="text-lg mb-8 text-center md:text-left">
            Find your ideal furry friend to share your life with.
          </p>
        </div>
        <div class="md:w-1/2">
          <img
            src="../assets/images/pets.png"
            alt="hero image"
            class="w-[350px] h-[350px] mx-auto"
          />
        </div>
      </div>
    </section>

    <!-- Pets section -->
    <section class="py-10 h-[100vh] bg-gray-100">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 ml-3">Our Pets</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-3">
          <!-- Pet card -->
          <div v-for="pet in petsData" :key="pet.name" class="bg-white rounded-lg shadow-lg">
            <img :src="pet.image" :alt="pet.name" class="w-full h-48 object-cover rounded-t-lg" />
            <div class="p-4">
              <h3 class="text-xl font-bold text-gray-800">{{ pet.name }}</h3>
              <p class="text-gray-600 mb-3">{{ pet.description.substring(0, 100) }}....</p>
              <router-link
                :to="{ name: 'adopt' }"
                class="mt-4 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded"
              >
                Adopt
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PetsView',
  data() {
    return {
      petsData: []
    }
  },
  async mounted() {
    await this.loadPetsData()
  },
  methods: {
    async loadPetsData() {
      const petsData = await import('./pets.json')
      this.petsData = await Promise.all(
        petsData.default.map(async (pet) => {
          const image = await import(`../assets/images/${pet.image}`)
          return {
            ...pet,
            image: image.default
          }
        })
      )
    }
  }
}
</script>
