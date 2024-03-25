import { initializeApp } from 'firebase/app'
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore'
import { firebaseConfig } from '../config'

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

if (!process.env.NEXT_PUBLIC_DATABASE_URL) {
  throw new Error('não existe variável de ambiente NEXT_PUBLIC_DATABASE_URL')
}

connectFirestoreEmulator(db, process.env.NEXT_PUBLIC_DATABASE_URL, 8080)
