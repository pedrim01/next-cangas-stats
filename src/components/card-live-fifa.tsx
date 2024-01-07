'use client'

import Image from 'next/image'

import {
  Loader2,
  XCircle,
  CircleDot,
  ChevronRight,
  ChevronsRight,
} from 'lucide-react'
import { AnalyticsButton } from '@/components/analytics-button'

import { useQuery } from 'react-query'
import { dataStats } from '@/data/types/dataStats'
import { apiAxiosBackend } from '@/data/axiosCreates'
import { TooltipRoot } from './tooltip-matches'

export function CardLiveFifa() {
  const {
    data: stats,
    isLoading,
    isFetching,
    error,
  } = useQuery<dataStats[]>(
    'stats',
    async () => {
      const { data } = await apiAxiosBackend.get('/live/fifa')

      return data
    },
    {
      refetchInterval: 1000 * 3, // 3 sec
    },
  )

  // console.log({ isLoading, isFetching, stats })

  const encodeURL = (str: string) => encodeURIComponent(str)

  if (error) {
    return null
  }

  return stats?.map((stat) => {
    const onColorLeague = () => {
      if (stat.league.includes('8')) {
        return { bg: 'bg-cyan-500', text: 'text-cyan-700' }
      } else if (stat.league.includes('10')) {
        return { bg: 'bg-lime-500', text: 'text-lime-700' }
      } else if (stat.league.includes('12')) {
        return { bg: 'bg-orange-400', text: 'text-orange-400' }
      } else {
        return { bg: 'bg-lime-500', text: 'text-lime-700' }
      }
    }

    return (
      <div
        key={stat.bet365_id}
        className="relative grid grid-cols-3 grid-rows-app items-center justify-items-center gap-6 overflow-hidden rounded-lg  bg-zinc-900 px-4 py-6"
      >
        {!isLoading && isFetching && (
          <Loader2
            className={`absolute right-2 top-2 col-span-3 animate-spin  text-zinc-400`} // criar refresh looping
          />
        )}

        <span className={`${onColorLeague().text} col-span-3 sm:text-sm`}>
          {stat.league}
        </span>

        <span
          className={`col-span-3 text-2xl ${
            onColorLeague().bg
          } rounded-lg p-2 text-black`}
        >
          {stat.minutes}:{stat.seconds}
        </span>

        <div className="flex flex-col items-center justify-center text-lg text-rose-500">
          <span>{stat.home_team_name}</span>
          <span>{'(' + stat.home_player + ')'}</span>
        </div>

        <span className="rounded-lg bg-zinc-950 px-4 py-2 text-xl font-semibold text-white sm:text-3xl">
          {stat.score}
        </span>

        <div className="flex flex-col items-center justify-center text-lg text-purple-500">
          <span>{stat.away_team_name}</span>
          <span>{'(' + stat.away_player + ')'}</span>
        </div>

        <div className="col-span-3 flex gap-4">
          <AnalyticsButton
            textButton="Analisar c/ a Equipe"
            route={`/fifa/${encodeURL(stat.home_player)}/${encodeURL(
              stat.home_team_name,
            )}/${encodeURL(stat.away_player)}/${encodeURL(
              stat.away_team_name,
            )}`}
          />

          <AnalyticsButton
            textButton="Análise Completa"
            route={`/fifa/${encodeURL(stat.home_player)}/${encodeURL(
              stat.away_player,
            )}`}
          />
        </div>

        {/* <Bet365Button /> */}

        <div className="col-span-3 w-full border-b-4 border-zinc-800 p-1"></div>

        <div
          className={`${
            stats.length === 0 ? 'hidden opacity-0' : ''
          } col-span-3 grid w-full grid-cols-3 grid-rows-app justify-items-center  gap-2`}
        >
          <span className={`col-span-3 ${onColorLeague().text}`}>
            Estatísticas
          </span>
          <div className="col-span-3 mb-2 grid grid-cols-7 grid-rows-app items-center justify-items-center gap-3 text-sm/5">
            <TooltipRoot
              icon={<ChevronRight className="h-4 w-4" />}
              content="Ataques"
            />

            <TooltipRoot
              icon={<ChevronsRight className="h-4 w-4" />}
              content="Ataques Perigosos"
            />

            <TooltipRoot
              icon={
                <Image
                  src="/corner.png"
                  className="h-4 w-4"
                  width={24}
                  height={24}
                  quality={100}
                  alt="corner"
                />
              }
              content="Cantos"
            />

            <TooltipRoot
              icon={
                <Image
                  src="/yellow-card.png"
                  className="h-4 w-4"
                  width={24}
                  height={24}
                  quality={100}
                  alt="yellow-card"
                />
              }
              content="Cartão amarelo"
            />

            <TooltipRoot
              icon={
                <Image
                  src="/red-card.png"
                  className="h-4 w-4"
                  width={24}
                  height={24}
                  quality={100}
                  alt="red-card"
                />
              }
              content="Cartão vermelho"
            />

            <TooltipRoot
              icon={<XCircle className="h-4 w-4" />}
              content="Chutes"
            />
            <TooltipRoot
              icon={<CircleDot className="h-4 w-4" />}
              content="Chutes no gol"
            />

            <span>{stat.stats?.attacks?.[0]}</span>
            <span>{stat.stats?.dangerous_attacks?.[0]}</span>
            <span>{stat.stats?.corners?.[0]}</span>
            <span>{stat.stats?.yellowcards?.[0]}</span>
            <span className="text-red-800">{stat.stats?.redcards?.[0]}</span>
            <span>{stat.stats?.off_target?.[0]}</span>
            <span>{stat.stats?.on_target?.[0]}</span>

            <span>{stat.stats?.attacks?.[1]}</span>
            <span>{stat.stats?.dangerous_attacks?.[1]}</span>
            <span>{stat.stats?.corners?.[1]}</span>
            <span>{stat.stats?.yellowcards?.[1]}</span>
            <span className="text-red-800">{stat.stats?.redcards?.[1]}</span>
            <span>{stat.stats?.off_target?.[1]}</span>
            <span>{stat.stats?.on_target?.[1]}</span>
          </div>
        </div>

        <div className="col-span-3 w-full border-b-4 border-zinc-800 p-1"></div>
        <div className="col-span-3 grid w-full grid-cols-3 grid-rows-app justify-items-center gap-1">
          <div className={`col-span-3 ${onColorLeague().text}`}>
            Resultado Final
          </div>
          <span>1</span>
          <span>X</span>
          <span>2</span>
          <span className="text-bet365-yellowOdds">{stat.odds?.home_ml}</span>
          <span className="text-bet365-yellowOdds">{stat.odds?.draw}</span>
          <span className="text-bet365-yellowOdds">{stat.odds?.away_ml}</span>
          <div className="col-span-3 w-full border-b-2 border-zinc-800 p-1"></div>

          <span>
            {stat.home_team_name} {'(' + stat.home_player + ')'}
          </span>

          <span className={`${onColorLeague().text}`}>
            {' '}
            Handicap ({stat.odds?.ss})
          </span>
          <span>
            {stat.away_team_name} {'(' + stat.away_player + ')'}
          </span>

          <span>{stat.odds?.hc_home_line}</span>
          <span>Linha</span>
          <span>{stat.odds?.hc_away_line}</span>

          <span className="text-bet365-yellowOdds">{stat.odds?.home_hc}</span>
          <span>Odds</span>
          <span className="text-bet365-yellowOdds">{stat.odds?.away_hc}</span>
          <div className="col-span-3 w-full border-b-2 border-zinc-800 p-1"></div>

          <div className={`col-span-3 ${onColorLeague().text}`}>
            Gols +/-({stat.odds?.ss})
          </div>
          <div className="col-span-3 grid grid-cols-3 grid-rows-2 place-items-center justify-items-center gap-2">
            <span>Over</span>
            <span className="">Linha</span>
            <span>Under</span>

            <span className="text-bet365-yellowOdds">
              {stat.odds?.over_odd}
            </span>
            <span className="text-2xl">{stat.odds?.over_line}</span>
            <span className="text-bet365-yellowOdds">
              {stat.odds?.under_odd}
            </span>
          </div>
        </div>
      </div>
    )
  })
}
