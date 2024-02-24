import { initializeApp } from 'firebase/app'
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore'
import { firebaseConfig } from '../config'

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
connectFirestoreEmulator(db, '10.0.0.181', 8080)
