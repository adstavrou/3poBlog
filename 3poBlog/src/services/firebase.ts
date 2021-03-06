// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, setDoc, doc } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1Ny58iJlURrDstLhgT4STKp7VAtaHfRc",
    authDomain: "poblog-af484.firebaseapp.com",
    projectId: "poblog-af484",
    storageBucket: "poblog-af484.appspot.com",
    messagingSenderId: "142219538193",
    appId: "1:142219538193:web:f53d3ea37c4a8fb0b7a6b0",
    measurementId: "G-0S2S2LKXPK"
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = getFirestore(fireApp);

async function getNavigation(db : any) {
    const navigation = collection(db, 'navigation');
    const navigationSnapshot = await getDocs(navigation);
    const navigationList = navigationSnapshot.docs.map(doc => doc.data());
    return navigationList;
}

await setDoc (doc(db, 'navigation', 'nav5'), {
    menuName: '3PO Journal', menuText : '3po-journal'}
);

//console.log(getNavigation(db), collection(db, 'navigation'));


export default db;