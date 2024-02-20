import { Skeleton } from "@/components/skeleton";

export default function HomeLoading() {
  return (
    <div className="grid grid-cols-1 grid-rows-[min-content_max-content] gap-10 sm:grid-cols-2">
      <Skeleton className="h-[3rem] sm:col-span-2" />
      <Skeleton className="h-[284px]" />
      <Skeleton className="h-[284px]" />
      <Skeleton className="h-[284px]" />
      <Skeleton className="h-[284px]" />
    </div>
  );
}
