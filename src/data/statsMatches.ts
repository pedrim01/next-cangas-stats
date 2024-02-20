import { api } from "./api";
import { dataStats } from "./types/dataStats";

export async function statsMatches(query: string): Promise<dataStats[]> {
  const response = await api(`/league/live?sport=${query}`);
  const data = await response.json();
  const {
    live: { general },
  } = data;
  return Object.values(general);
}
