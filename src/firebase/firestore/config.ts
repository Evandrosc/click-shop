import { initializeApp } from 'firebase/app'
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBmYAXKCGQCUr_wKW1FRncNlFAymXLmF5I',
  authDomain: 'click-shop-2a6c2.firebaseapp.com',
  projectId: 'click-shop-2a6c2',
  storageBucket: 'click-shop-2a6c2.appspot.com',
  messagingSenderId: '928921559783',
  appId: '1:928921559783:web:78c8e2085f9ea89e7db842',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
connectFirestoreEmulator(db, '10.0.0.181', 8080)
