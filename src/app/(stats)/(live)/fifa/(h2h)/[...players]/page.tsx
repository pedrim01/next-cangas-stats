import { CardLiveFifaH2h } from '@/components/card-live-fifa-h2h'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Confronto',
}

export default async function H2h({ params }: { params: { players: string } }) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className="grid grid-cols-1 grid-rows-app gap-4 pt-12">
      {params.players.length === 2 ? (
        <CardLiveFifaH2h
          playerA={params.players[0]}
          playerB={params.players[1]}
        />
      ) : (
        <CardLiveFifaH2h
          playerA={params.players[0]}
          teamA={params.players[1]}
          playerB={params.players[2]}
          teamB={params.players[3]}
        />
      )}
    </div>
  )
}
