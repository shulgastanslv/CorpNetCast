import { Suspense } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Results, ResultsSkeleton } from "./_components/results";

export default function Page() {
  return (
    <div className="h-full p-20">
      <Carousel className="items-center justify-center flex">
        <CarouselContent>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="space-y-2 py-10">
        <h2 className="text-lg font-semibold mb-4">Now Trending</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">The most popular content right now</p>
      </div>
      <Suspense fallback={<ResultsSkeleton />}>
        <Results />
      </Suspense>
    </div>
  );
};