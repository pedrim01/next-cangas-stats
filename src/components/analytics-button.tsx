"use client"

import Link from "next/link"

interface AnalyticsButtonProps {
  className?: string
  target?: string
  textButton: string
  route: string
}

// type AnalyticsButtonDivProps = ComponentProps<'div'>

export function AnalyticsButton({
  className,
  target,
  textButton,
  route,
}: AnalyticsButtonProps) {
  return (
    <Link
      target={target}
      href={route}
      className={`${className} duration-400 flex items-center justify-center rounded-md bg-cangas-green 
      px-4 py-2 font-semibold text-zinc-300 transition ease-in-out 
      hover:text-zinc-50 sm:text-base`}
    >
      {textButton}
    </Link>
  )
}
