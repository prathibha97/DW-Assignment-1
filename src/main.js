import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBars)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5nZaalDDYgnsnCmDviVHXzunJ03o-NLQ",
  authDomain: "jack-pet-supplies-925e3.firebaseapp.com",
  projectId: "jack-pet-supplies-925e3",
  storageBucket: "jack-pet-supplies-925e3.appspot.com",
  messagingSenderId: "1065108721246",
  appId: "1:1065108721246:web:482d9e26732f5edc11eecf"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
