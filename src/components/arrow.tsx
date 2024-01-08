import { ArrowRight } from "lucide-react"
interface ArrowProps {
  className?: string
}
export function Arrow({ className }: ArrowProps) {
  return (
    <div
      className={`${className} relative flex w-full items-center justify-end`}
    >
      <div
        className={`absolute right-2 w-full border-b-[3px] border-zinc-700`}
      />
      <ArrowRight className={`text-zinc-700 `} />
    </div>
  )
}
