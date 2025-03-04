'use client'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

export default function App({ children }: { children: ReactNode }) {
  const navigate = useRouter()
  navigate.push('/login')
}
