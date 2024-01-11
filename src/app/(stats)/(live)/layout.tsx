import { ReactNode } from 'react'

export default function StatsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto grid max-h-full w-full max-w-[1600px] grid-rows-[min-content_max-content] px-4 pb-8">
      {children}
    </div>
  )
}
