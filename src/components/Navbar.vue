<template>
  <div>
    <!-- Navbar -->
    <nav class="bg-white shadow-lg fixed top-0 w-full">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <router-link to="/" class="text-2xl font-bold text-gray-800"
            >Jack Pet Supplies</router-link
          >

          <!-- Responsive menu button -->
          <div class="sm:hidden">
            <button @click="toggleMenu" class="text-purple-500 focus:outline-none">
              <font-awesome-icon icon="fa-solid fa-bars" />
            </button>
          </div>

          <!-- Responsive menu items -->
          <div :class="{ block: isMenuOpen, hidden: !isMenuOpen }" class="sm:block">
            <ul class="sm:flex sm:justify-end">
              <li class="mr-4">
                <router-link to="/" class="text-gray-800 hover:text-purple-500">Home</router-link>
              </li>
              <li class="mr-4">
                <router-link to="/pets" class="text-gray-800 hover:text-purple-500"
                  >Pets</router-link
                >
              </li>
              <li class="mr-4">
                <router-link to="/products" class="text-gray-800 hover:text-purple-500"
                  >Products</router-link
                >
              </li>
              <li class="mr-4">
                <router-link to="/tips" class="text-gray-800 hover:text-purple-500"
                  >Health Tips</router-link
                >
              </li>
              <li class="mr-4">
                <router-link to="/about" class="text-gray-800 hover:text-purple-500"
                  >About</router-link
                >
              </li>
              <li class="mr-4">
                <router-link to="/contact" class="text-gray-800 hover:text-purple-500"
                  >Contact</router-link
                >
              </li>
              <li v-if="isLoggedIn" @click="logout" class="mr-4">
                <router-link to="/" class="text-gray-800 font-bold hover:text-purple-500"
                  >Logout</router-link
                >
              </li>
              <li v-else class="mr-4">
                <router-link to="/login" class="text-gray-800 font-bold hover:text-purple-500"
                  >Login</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { RouterLink } from 'vue-router'

export default {
  name: 'NavbarComponent',
  data() {
    return {
      isMenuOpen: false,
      isLoggedIn: false,
      auth: getAuth()
    }
  },
  components: {
    RouterLink
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    logout() {
      signOut(this.auth).then(() => {
        this.isLoggedIn = false
      })
    }
  },
  created() {
    // Initialize Firebase authentication
    const auth = getAuth()

    // Check if user is logged in
    onAuthStateChanged(auth, (user) => {
      this.isLoggedIn = !!user
    })
  }
}
</script>
