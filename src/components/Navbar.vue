<template>
  <header>
    <!-- Navbar -->
    <nav class="bg-white shadow-lg sticky top-0 w-full">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <router-link to="/" class="text-2xl font-bold text-gray-800">Jack Pet Supplies</router-link>

          <!-- Menu items -->
          <ul class="hidden sm:flex sm:justify-end">
            <li v-for="item in menuItems" :key="item.text" class="mr-4">
              <router-link :to="item.to" class="text-gray-800 hover:text-primary-500">{{ item.text }}</router-link>
            </li>

            <!-- Check Auth state-->
            <li v-if="isLoggedIn" @click="logout" class="mr-4">
              <router-link to="/" class="text-gray-800 font-bold hover:text-primary-500">Logout</router-link>
            </li>
            <li v-else class="mr-4">
              <router-link to="/login" class="text-gray-800 font-bold hover:text-primary-500">Login</router-link>
            </li>
          </ul>

          <!-- Responsive menu button -->
          <div class="sm:hidden">
            <button @click="toggleMenu" class="text-primary-500 focus:outline-none">
              <font-awesome-icon :icon="isMenuOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'" />
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Responsive menu items -->
    <div :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }" class="sm:hidden">
      <ul>
        <li v-for="item in menuItems" :key="item.text" class="my-2">
          <router-link :to="item.to" class="block text-center text-gray-800 hover:text-primary-500">{{ item.text }}</router-link>
        </li>
         <!-- Check Auth state-->
        <li v-if="isLoggedIn" @click="logout" class="my-2">
          <router-link to="/" class="block text-center text-gray-800 font-bold hover:text-primary-500">Logout</router-link>
        </li>
        <li v-else class="my-2">
          <router-link to="/login" class="block text-center text-gray-800 font-bold hover:text-primary-500">Login</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

export default {
  name: 'NavbarComponent',
  data() {
    return {
      isMenuOpen: false,
      isLoggedIn: false,
      auth: getAuth(),
      menuItems: [
        { text: 'Home', to: '/' },
        { text: 'Pets', to: '/pets' },
        { text: 'Products', to: '/products' },
        { text: 'Tips', to: '/tips' },
        { text: 'About', to: '/about' },
        { text: 'Contact', to: '/contact' }
      ]
    }
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
