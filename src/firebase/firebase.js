
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCDbNh1fE9_EuK2udMDF_jAXVRQQlsdtQs",
  authDomain: "aixa-chatbox.firebaseapp.com",
  projectId: "aixa-chatbox",
  storageBucket: "aixa-chatbox.appspot.com",
  messagingSenderId: "997099294877",
  appId: "1:997099294877:web:d63cb41f2fdee6b2e0c474",
  measurementId: "G-2PMX2NJ68J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)


// creation of google authentication


export const provider = new GoogleAuthProvider(auth)

// setting custom parameters


provider.setCustomParameters({
    'login_hit': 'user@gmail.com'
})


export const googleAuthentication = () => signInWithPopup(auth, provider)

    
