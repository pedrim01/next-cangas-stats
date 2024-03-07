"use client";

import { TrendingUp } from "lucide-react";

import { useQuery } from "react-query";
import { dataH2hStats } from "@/data/types/dataStats";
import { apiAxiosBackend } from "@/data/axiosCreates";

import { Skeleton } from "./skeleton";
import { TooltipMatches, TooltipMatchesH2h } from "./tooltip-matches";
import { Arrow } from "./arrow";

interface CardLiveFifaH2hProps {
  playerA: string;
  teamA?: string;
  playerB: string;
  teamB?: string;
}

export function CardLiveFifaH2h({
  playerA,
  teamA,
  playerB,
  teamB,
}: CardLiveFifaH2hProps) {
  const {
    data: dataH2hStats,
    isFetchedAfterMount,
    error,
  } = useQuery<dataH2hStats>("h2hstats", async () => {
    const { data } = !teamA
      ? await apiAxiosBackend.get(`/live/fifa/${playerA}/${playerB}`)
      : await apiAxiosBackend.get(
          `/live/fifa/${playerA}/${teamA}/${playerB}/${teamB}`,
        );

    return data;
  });

  // console.log({
  //   errorUpdatedAt,
  //   failureCount,
  //   isError,
  //   isFetched,
  //   isFetchedAfterMount,
  //   isFetching,
  //   isLoading,
  //   isLoadingError,
  //   isPlaceholderData,
  //   isPreviousData,
  //   isRefetchError,
  //   isStale,
  //   isSuccess,
  //   refetch,
  //   remove,
  //   status });

  if (error) {
    return null;
  }

  if (isFetchedAfterMount) {
    return (
      <>
        <div className="col-span-2 grid grid-cols-h2h grid-rows-app items-center justify-items-stretch gap-4 rounded-lg bg-zinc-900 px-10 py-6 sm:gap-6">
          <span className="justify-self-end sm:text-xl/5">Player 1</span>

          <span />

          <span className="sm:text-xl/5">Player 2</span>

          <div className="flex flex-col items-end justify-center space-y-1 text-lg text-rose-500 sm:text-3xl">
            <span className=" font-medium">
              {dataH2hStats?.game_mutual_information?.jogadorB_name}
            </span>

            {/* Nullish coalescing operator ?? => null or undefined */}
            <span>{decodeURI(teamA ?? "")}</span>
          </div>

          <span className="text-xl/8 font-semibold">VS</span>

          <div className="flex flex-col items-start justify-center space-y-1 text-lg text-purple-500 sm:text-3xl">
            <span className="font-medium">
              {dataH2hStats?.game_mutual_information?.jogadorA_name}
            </span>

            <span>{decodeURI(teamB ?? "")}</span>
          </div>

          <div className="relative space-y-2 justify-self-end">
            <Arrow className="absolute left-2 h-4 max-w-[100px]" />

            <div className="flex min-w-[110px] flex-row-reverse flex-wrap justify-end gap-2">
              {dataH2hStats?.jogadorB?.games?.map((data, index: number) => {
                if (index > 4) return null;
                return (
                  <TooltipMatches
                    key={data.timestamp}
                    name={dataH2hStats?.jogadorB?.name}
                    dataMatch={data}
                  />
                );
              })}
            </div>
          </div>

          <span />

          <div className="space-y-2 justify-self-start">
            <Arrow className="h-4 max-w-[100px] rotate-180" />

            <div className="flex min-w-[110px] flex-wrap justify-start gap-2">
              {dataH2hStats?.jogadorA?.games?.map((data, index: number) => {
                if (index > 4) return null;
                return (
                  <TooltipMatches
                    key={data.timestamp}
                    name={dataH2hStats?.jogadorA?.name}
                    dataMatch={data}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:px-64 col-span-2 grid grid-cols-3 grid-rows-app items-center justify-items-center gap-2 rounded-lg bg-zinc-900 px-10 py-6">
          <h1 className="col-span-3 text-xl/5">
            {" "}
            Nº de Jogos:{" "}
            <span className="text-bet365-yellow">
              {dataH2hStats?.total_info?.game_mutual_information?.game_numbers}
            </span>
          </h1>

          <span className="text-lg text-rose-500 sm:text-xl/5">
            {dataH2hStats?.game_mutual_information?.jogadorB_name}
          </span>
          <span />
          <span className="text-lg text-purple-500 sm:text-xl/5">
            {dataH2hStats?.game_mutual_information?.jogadorA_name}
          </span>

          <span>Vitórias</span>
          <span>Empates</span>
          <span>Vitórias</span>

          <span className="text-xl text-rose-500 sm:text-3xl/5">
            {dataH2hStats?.total_info?.game_mutual_information?.jogadorB_wins}
          </span>
          <span className="text-xl sm:text-3xl/5">
            {dataH2hStats?.total_info?.game_mutual_information?.draw_numbers}
          </span>
          <span className="text-xl text-purple-500 sm:text-3xl/5">
            {dataH2hStats?.total_info?.game_mutual_information?.jogadorA_wins}
          </span>

          <Arrow className={`col-span-3 h-6 max-w-[calc(20_*_2_*_15px)]`} />

          <div className="col-span-3  flex min-w-[192px] flex-row-reverse flex-wrap justify-center gap-2">
            {dataH2hStats?.total_info?.last_games?.map(
              (data, index: number) => {
                if (index > 19) return null;
                return (
                  <TooltipMatchesH2h
                    key={data.timestamp}
                    dataMatch={data}
                    player1={dataH2hStats.jogadorB?.name}
                    player2={dataH2hStats.jogadorA?.name}
                  />
                );
              },
            )}
          </div>

          <div className="col-span-3 grid w-full grid-cols-1 grid-rows-app items-center justify-items-stretch  gap-4 py-8 sm:grid-cols-2 sm:pl-32">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black p-2">
                <TrendingUp />
              </div>
              <div className="flex flex-col space-y-1 text-sm/4 font-normal">
                <div>Ambas marcam</div>
                <div>
                  {" "}
                  <span className="text-bet365-yellowOdds">
                    {dataH2hStats?.total_info?.both_to_score?.yes_total?.toLocaleString(
                      "pt-BR",
                      {
                        style: "percent",
                        currency: "BRL",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      },
                    )}
                  </span>{" "}
                  de{" "}
                  <span className="text-bet365-yellowOdds">
                    {
                      dataH2hStats?.total_info?.game_mutual_information
                        ?.game_numbers
                    }
                  </span>{" "}
                  partidas
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black p-2">
                <TrendingUp />
              </div>
              <div className="flex flex-col space-y-1 text-sm/4 font-normal">
                <div>Média Total de Gols</div>
                <div>
                  {" "}
                  <span className="text-bet365-yellowOdds">
                    {dataH2hStats?.total_info?.average_goals?.average_goals_total?.toLocaleString(
                      "en-US",
                      {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      },
                    )}
                  </span>{" "}
                  em{" "}
                  <span className="text-bet365-yellowOdds">
                    {
                      dataH2hStats?.total_info?.game_mutual_information
                        ?.game_numbers
                    }
                  </span>{" "}
                  partidas
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black p-2">
                <TrendingUp />
              </div>
              <div className="flex flex-col space-y-1 text-sm/4 font-normal">
                <div>
                  Média de Gols -{" "}
                  <span className="text-rose-500">
                    {dataH2hStats?.game_mutual_information?.jogadorB_name}
                  </span>
                </div>
                <div>
                  {" "}
                  <span className="text-bet365-yellowOdds">
                    {dataH2hStats?.total_info?.average_goals?.jogadorB_average}
                  </span>{" "}
                  em{" "}
                  <span className="text-bet365-yellowOdds">
                    {
                      dataH2hStats?.total_info?.game_mutual_information
                        ?.game_numbers
                    }
                  </span>{" "}
                  partidas
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black p-2">
                <TrendingUp />
              </div>
              <div className="flex flex-col space-y-1 text-sm/4 font-normal">
                <div>
                  Média de Gols -{" "}
                  <span className="text-purple-500">
                    {dataH2hStats?.game_mutual_information?.jogadorA_name}
                  </span>
                </div>
                <div>
                  {" "}
                  <span className="text-bet365-yellowOdds">
                    {dataH2hStats?.total_info?.average_goals?.jogadorA_average}
                  </span>{" "}
                  em{" "}
                  <span className="text-bet365-yellowOdds">
                    {
                      dataH2hStats?.total_info?.game_mutual_information
                        ?.game_numbers
                    }
                  </span>{" "}
                  partidas
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black p-2">
                <TrendingUp />
              </div>
              <div className="flex flex-col space-y-1 text-sm/4 font-normal">
                <div>Vencedor Último Confronto</div>
                <div className="text-purple-500">
                  {
                    dataH2hStats?.total_info?.game_mutual_information
                      ?.vencedor_ultimo_jogo
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="grid grid-cols-1 grid-rows-app gap-10">
        <Skeleton className="h-[160px]" />
        <Skeleton className="h-[450px]" />
      </div>
    );
  }
}
