'use client'

import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../config'
import { TProduto } from '@/@types/TProduto'

export async function pegaProduto(id: number) {
  const produtoSnapshot = await getDocs(
    query(collection(db, 'produtos'), where('id', '==', id)),
  )
  return produtoSnapshot.docs[0].data() as TProduto
}
