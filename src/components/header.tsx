import Link from 'next/link'
import { FaTelegram, FaInstagram } from 'react-icons/fa'

export function Header() {
  return (
    <header className=" fixed top-0 z-40 grid w-full grid-cols-12 grid-rows-1 gap-5 bg-zinc-900 p-2 text-sm/5 text-zinc-50 shadow-md shadow-zinc-700/50 sm:h-12 sm:items-center ">
      <nav className="col-span-12 flex w-full gap-2 justify-self-center py-4 sm:flex sm:h-12 sm:flex-row sm:items-center sm:justify-center sm:gap-10 ">
        <Link
          className="font-semibold text-zinc-400 transition duration-300 ease-in-out hover:text-zinc-50 hover:underline sm:text-lg/5 "
          href={'/'}
        >
          Home
        </Link>

        <Link
          className="font-semibold text-zinc-400 transition duration-300 ease-in-out hover:text-zinc-50 hover:underline sm:text-lg/5 "
          href={'https://t.me/cangastips'}
          target="_blank"
        >
          Suporte
        </Link>
        <Link href={'/fifa'}>
          <span className="font-semibold text-zinc-400 transition duration-300 ease-in-out hover:text-zinc-50 hover:underline sm:text-lg/5 ">
            FIFA
          </span>{' '}
          <span className="animate-pulse text-xs/3 font-medium text-cangas-green">
            Ao vivo
          </span>
        </Link>
      </nav>
      <nav className="absolute top-4 mr-4 flex items-start gap-2 justify-self-end text-3xl sm:top-2 ">
        <Link href={'https://www.instagram.com/cangastips'} target="_blank">
          <FaInstagram className="text-[#FF00FF] hover:text-[#ff00ff9a]" />
        </Link>
        <span className="h-8 border-r-2 border-zinc-800 p-1" />

        <Link
          href={'https://t.me/bet365fifafree'}
          className="flex items-end"
          target="_blank"
        >
          <FaTelegram className="text-[#4A95D6] hover:text-[#4a95d655]" />
          {'   '}
          <span className="animate-pulse text-[8px]/3 font-medium text-cangas-green">
            FREE
          </span>
        </Link>
      </nav>
    </header>
  )
}
