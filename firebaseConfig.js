import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCwrglXzA8HubRLOuRGweJ3eOB9UJg93gg",
    authDomain: "ae-engaged.firebaseapp.com",
    projectId: "ae-engaged",
    storageBucket: "ae-engaged.appspot.com",
    messagingSenderId: "148071786317",
    appId: "1:148071786317:web:76dd0ff4c54a9aea22b904",
    measurementId: "G-WYYQ9PW58D"
};


export const app = initializeApp(firebaseConfig);
export const app_auth = getAuth(app);
export const app_db = getFirestore(app);
