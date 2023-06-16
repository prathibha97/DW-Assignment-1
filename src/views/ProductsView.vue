<template>
  <div>
    <!-- SubHero section -->
    <SubHero
      title="Browse Our Amazing Collection of Pet Products"
      subtitle="Find high-quality products for your beloved pets."
      image="../../src/assets/images/product.png"
    />

    <!-- Products section -->
    <section class="py-10 bg-gray-100 md:h-[100vh]">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Our Products</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3">
          <!-- Loop through products -->
          <div v-for="product in products" :key="product.id" class="bg-white rounded-lg shadow-lg">
            <img :src="product.image" alt="Product" class="w-full h-48 object-contain rounded-t-lg" />
            <div class="p-4">
              <h3 class="text-xl font-bold text-gray-800">{{ product.name }}</h3>
              <p class="text-gray-600">{{ product.description }}</p>
              <button class="mt-4 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SubHero from '../components/SubHero.vue'
import axios from 'axios'

export default {
  name: 'ProductsPage',
  components: {
    SubHero
  },
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.fetchProducts()
  },
  methods: {
    fetchProducts() {
      axios.get('https://pet-shop-api-icox.onrender.com/v1/products')
        .then(response => {
          this.products = response.data
        })
        .catch(error => {
          console.error('Failed to fetch products:', error)
        })
    }
  }
}
</script>
