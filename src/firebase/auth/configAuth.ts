import { initializeApp } from 'firebase/app'
import { connectAuthEmulator, getAuth } from 'firebase/auth'
import { firebaseConfig } from '../config'

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

if (!process.env.NEXT_PUBLIC_DATABASE_URL) {
  throw new Error('não existe variável de ambiente NEXT_PUBLIC_DATABASE_URL')
}

connectAuthEmulator(auth, `http://${process.env.NEXT_PUBLIC_DATABASE_URL}:9099`)
