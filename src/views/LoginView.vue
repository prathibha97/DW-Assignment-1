<template>
  <div class="flex items-center justify-center h-screen">
    <div class="w-full max-w-sm">
      <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Login</h2>
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
          @click.prevent="login"
        >
          Login
        </button>
        <p class="text-center p-5 text-red-500" v-if="errMsg">{{ errMsg }}</p>
      </form>
      <p class="text-gray-600 text-center mt-4">
        Don't have an account? <a href="/register" class="text-purple-500">Register</a>
      </p>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

export default {
  name: 'LoginPage',

  data() {
    return {
      loggedIn: false,
      email: '',
      password: '',
      router: useRouter(),
      errMsg: '',
      auth: getAuth()
    }
  },
  mounted() {
    const ref = this
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        ref.loggedIn = true
      } else {
        ref.loggedIn = false
      }
    })
  },
  computed: {
    authenticated() {
      return this.loggedIn
    }
  },
  methods: {
    login() {
      signInWithEmailAndPassword(this.auth, this.email, this.password)
        .then((data) => {
          console.log('Logged in')
          this.loggedIn = true
          this.router.push('/')
        })
        .catch((error) => {
          console.log(error.code)
          switch (error.code) {
            case 'auth/invalid-email':
              this.errMsg = 'Invalid Email'
              break
            case 'auth/user-not-found':
              this.errMsg = 'No account with that email found'
              break
            case 'auth/wrong-password':
              this.errMsg = 'Password incorrect'
              break
            default:
              this.errMsg = 'Email or password was incorrect'
              break
          }
        })
    },
    logout() {
      signOut(this.auth).then(() => {
        this.loggedIn = false
        this.email = ''
        this.password = ''
        this.router.push('/')
      })
    }
  }
}
</script>
