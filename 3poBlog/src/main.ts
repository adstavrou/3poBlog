import { createApp } from 'vue'
import App from './App.vue'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCFD5cQZEmI8ddG2OlnN7GT7uhcZxqoHqU",
    authDomain: "the3poblog.firebaseapp.com",
    projectId: "the3poblog",
    storageBucket: "the3poblog.appspot.com",
    messagingSenderId: "546644442982",
    appId: "1:546644442982:web:25dec0162006e91bf192a7"
};

const app = initializeApp(firebaseConfig);

createApp(App).mount('#app')
