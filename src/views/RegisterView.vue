<template>
  <div
    class="flex items-center justify-center h-screen bg-gradient-to-r from-purple-300 to-indigo-300"
  >
    <div class="w-full max-w-sm">
      <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Register</h2>
      <form @submit="login" class="form">
        <div class="mb-4">
          <input
            type="email"
            placeholder="Email"
            class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            v-model="email"
            required
          />
        </div>
        <div class="mb-4">
          <input
            type="password"
            placeholder="Password"
            class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            v-model="password"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-purple-500 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-purple-600 transition-colors duration-300"
          @click.prevent="register"
        >
          Register
        </button>
      </form>
      <p class="text-gray-600 text-center mt-4">
        Already have an account? <a href="/login" class="text-primary-500">Login</a>
      </p>
    </div>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useRouter } from 'vue-router'

export default {
  name: 'RegisterPage',
  data() {
    return {
      isMenuOpen: false,
      email: '',
      password: '',
      router: useRouter()
    }
  },
  methods: {
    register() {
      createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((data) => {
          console.log('Register successful')
          console.log(data)
          this.router.push('/')
        })
        .catch((error) => {
          console.log(error.code)
          alert('Sorry you could not sign up' + error.message)
        })
    }
  }
}
</script>
