import Link from "next/link"
import { FaTelegram, FaInstagram } from "react-icons/fa"

export function Header() {
  return (
    <header className="fixed top-0 z-40 grid h-12 w-full grid-cols-12 grid-rows-1 items-center bg-zinc-900 p-2 text-sm/5 text-zinc-50 shadow-md shadow-zinc-700/50">
      <nav className="col-span-11 flex gap-10 justify-self-center">
        <Link
          className="text-lg/5 font-semibold text-zinc-400 transition duration-300 ease-in-out hover:text-zinc-50 hover:underline "
          href={"/"}
        >
          Home
        </Link>

        <Link
          className="text-lg/5 font-semibold text-zinc-400 transition duration-300 ease-in-out hover:text-zinc-50 hover:underline "
          href={"https://t.me/cangastips"}
          target="_blank"
        >
          Suporte
        </Link>
        <Link href={"/fifa"}>
          <span className="text-lg/5 font-semibold text-zinc-400 transition duration-300 ease-in-out hover:text-zinc-50 hover:underline ">
            FIFA
          </span>{" "}
          <span className="animate-pulse text-xs/3 font-medium text-cangas-green">
            Ao vivo
          </span>
        </Link>
      </nav>
      <nav className="mr-4 flex h-full  items-center gap-4 justify-self-end text-3xl">
        <Link href={"https://www.instagram.com/cangastips"} target="_blank">
          <FaInstagram className="text-[#FF00FF] hover:text-[#ff00ff9a]" />
        </Link>
        <span className="h-full border-r-2 border-zinc-800 p-1" />

        <Link
          href={"https://t.me/bet365fifafree"}
          className="flex items-end"
          target="_blank"
        >
          <FaTelegram className="text-[#4A95D6] hover:text-[#4a95d655]" />
          {"   "}
          <span className="animate-pulse text-[8px]/3 font-medium text-cangas-green">
            FREE
          </span>
        </Link>
      </nav>
    </header>
  )
}
