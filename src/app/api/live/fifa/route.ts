
import { apiAxios } from "@/data/axiosCreates";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET() {
  const response = await apiAxios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/league/live?sport=fifa`,
  );

  const data = await response.data;

  const {
    live: { general, odds },
  } = data;

  const newData = Object.keys(general).map((key) => ({
    ...general[key],
    odds: odds[key],
  }));

  return Response.json(newData);
}
