import Home from '@/components/home'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Live() {
  return <Home />
}
