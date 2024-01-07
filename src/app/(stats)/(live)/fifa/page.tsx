import { CardLiveFifa } from '@/components/card-live-fifa'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ao Vivo',
}

export default async function LiveFifa() {
  // await new Promise((resolve) => setTimeout(resolve, 3000))

  return (
    <div className="grid grid-cols-1 grid-rows-app gap-10 text-xs/3 sm:grid-cols-2 sm:text-lg/5">
      <h1 className="mt-4 justify-self-center text-lg font-semibold leading-4 tracking-wide sm:col-span-2 sm:text-3xl">
        Jogos em andamento
      </h1>
      <CardLiveFifa />
    </div>
  )
}
