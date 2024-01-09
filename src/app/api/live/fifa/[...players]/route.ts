/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
import { apiAxios } from "@/data/axiosCreates";
import { NextRequest } from "next/server";
export const dynamic = 'force-dynamic' // defaults to auto

type dataMatch = {
  home_player?: string;
  away_player?: string;
  winner_name?: string;
  score?: string;
  timestamp: number;
  dateConverted?: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: { players: string } },
) {
  const { data } =
    params.players.length === 2
      ? await apiAxios.get(
          `/get_x1?playerA=${params.players[0]}&playerB=${params.players[1]}&period=all`,
        )
      : await apiAxios.get(
          `/get_x1_team?playerA=${params.players[0]}&teamA=${params.players[1]}&playerB=${params.players[2]}&teamB=${params.players[3]}`,
        );

  const draw_numbers: number =
    data.total_info.game_mutual_information.game_numbers -
    (data.total_info.game_mutual_information.jogadorA_wins +
      data.total_info.game_mutual_information.jogadorB_wins);

  // console.log(draw_numbers);

  // eslint-disable-next-line camelcase
  data.total_info.game_mutual_information.draw_numbers = draw_numbers;

  data.total_info.both_to_score.yes_total =
    data?.total_info?.both_to_score?.yes_total /
    data?.total_info?.game_mutual_information?.game_numbers;

  data.total_info.average_goals.average_goals_total =
    (data.total_info.average_goals.jogadorA_goals +
      data.total_info.average_goals.jogadorB_goals) /
    data?.total_info?.game_mutual_information?.game_numbers;

  data.jogadorA.games = data?.jogadorA?.games?.map((item: dataMatch) => ({
    ...item,
    dateConverted: new Date(item.timestamp * 1000).toLocaleString(),
  }));

  data.jogadorB.games = data?.jogadorB?.games?.map((item: dataMatch) => ({
    ...item,
    dateConverted: new Date(item.timestamp * 1000).toLocaleString(),
  }));

  data.total_info.last_games = data?.total_info?.last_games?.map(
    (item: dataMatch) => ({
      ...item,
      dateConverted: new Date(item.timestamp * 1000).toLocaleString(),
    }),
  );

  return Response.json(data);
}
