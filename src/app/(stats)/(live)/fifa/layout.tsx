import { ReactNode } from 'react'
import { Header } from '@/components/header'

export default function StatsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max-content] pt-20 sm:pt-16">
      <Header />

      {children}
    </div>
  )
}
