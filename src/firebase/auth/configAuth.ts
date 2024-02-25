import { initializeApp } from 'firebase/app'
import { connectAuthEmulator, getAuth } from 'firebase/auth'
import { firebaseConfig } from '../config'

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
connectAuthEmulator(auth, 'http://10.0.0.181:9099')
