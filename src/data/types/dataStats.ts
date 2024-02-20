export interface dataStats {
  home_name: string;
  home_player: string;
  home_team_name: string;
  home: string;
  away_name: string;
  away_player: string;
  away_team_name: string;
  away: string;
  score: string;
  minutes: string;
  seconds: string;
  bet365_id: string;
  event_id: string;
  league: string;
  stats?: {
    attacks?: string[];
    dangerous_attacks?: string[];
    on_target?: string[]; // finalizações
    off_target?: string[]; // chutes ao gol
    corners?: string[];
    redcards?: string[];
    yellowcards?: string[];
  };
  odds?: {
    home_ml?: string;
    away_ml?: string;
    draw?: string;
    ss: string;
    update_time?: string;
    home_hc: string;
    away_hc?: string;
    hc_line?: string;
    hc_home_line?: string;
    hc_away_line?: string;
    over_line?: string;
    over_odd: string;
    under_odd?: string;
  };
}

export interface dataH2hStats {
  game_mutual_information?: {
    game_numbers?: number;
    jogadorA_name?: string;
    jogadorB_name?: string;
  };
  total_info?: {
    average_goals?: {
      average_goals_total?: number;
      jogadorA_average?: string;
      jogadorB_average?: string;
    };
    both_to_score?: {
      yes_total?: number;
    };

    game_mutual_information?: {
      game_numbers?: number;
      jogadorA_wins?: number;
      jogadorB_wins?: number;
      draw_numbers?: number;
      vencedor_ultimo_jogo?: string;
    };
    last_games?: {
      home_player?: string;
      away_player?: string;
      winner_name?: string;
      score?: string;
      timestamp?: number;
      dateConverted?: string;
    }[];
  };
  jogadorA?: {
    name?: string;
    games?: {
      home_player?: string;
      away_player?: string;
      winner_name?: string;
      score?: string;
      timestamp?: number;
      dateConverted?: string;
    }[];
  };

  jogadorB?: {
    name?: string;
    games?: {
      home_player?: string;
      away_player?: string;
      winner_name?: string;
      score?: string;
      timestamp?: number;
      dateConverted?: string;
    }[];
  };
}
