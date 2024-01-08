import { ReactNode } from "react"

export default function StatsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max-content]">
      {children}
    </div>
  )
}
