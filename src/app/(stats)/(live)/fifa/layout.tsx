import { ReactNode } from 'react'
import { Header } from '@/components/header'

export default function StatsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max-content] gap-5 px-8 pt-16">
      <Header />
      {children}
    </div>
  )
}
