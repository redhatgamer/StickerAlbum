import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Replace these values with your Firebase project config
// See: https://console.firebase.google.com → Project Settings → Your apps → SDK setup
const firebaseConfig = {
  apiKey: "AIzaSyCAMOaZZ9bP-ePX9-DbvG-FxLv0iLbjYBs",
  authDomain: "stickeralbum-513b5.firebaseapp.com",
  projectId: "stickeralbum-513b5",
  storageBucket: "stickeralbum-513b5.firebasestorage.app",
  messagingSenderId: "343627765709",
  appId: "1:343627765709:web:102e12668152ca10bb1684"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider()
