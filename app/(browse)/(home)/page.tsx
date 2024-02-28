import { Suspense } from "react";
import { Results, ResultsSkeleton } from "./_components/results";

import React from "react";
import { CarouselResults } from "./_components/carousel-results";
import { Separator } from "@radix-ui/react-separator";

export default function Page() {

  return (
    <div className="flex flex-col w-full p-4">
      <CarouselResults />
      <Suspense fallback={<ResultsSkeleton />}>
        <Results />
      </Suspense>
    </div>
  );
};