import { createApp } from 'vue'
import App from './App.vue'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

const isLocalHost = location.hostname === 'localhost'

const firebaseConfig = {
    apiKey: 'AIzaSyCFD5cQZEmI8ddG2OlnN7GT7uhcZxqoHqU',
    authDomain: 'the3poblog.firebaseapp.com',
    databaseURL: isLocalHost
                    ? 'http://localhost:9000/?ns=the3poblog-default-rtdb'
                    : 'https://the3poblog-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'the3poblog',
    storageBucket: 'the3poblog.appspot.com',
    messagingSenderId: '546644442982',
    appId: '1:546644442982:web:25dec0162006e91bf192a7'
}

console.log(firebaseConfig)

const fireApp = initializeApp(firebaseConfig);
const db = getFirestore(fireApp);

const query = await db.('siteConfiguration')

createApp(App).mount('#app');




console.log(query);