import { Suspense } from "react";
import { Results, ResultsSkeleton } from "./_components/results";

import React from "react";
import { CarouselResults } from "./_components/carousel-results";
import { Separator } from "@radix-ui/react-separator";

export default function Page() {

  return (
    <div className="p-16">
      <CarouselResults />
      <Suspense fallback={<ResultsSkeleton />}>
        <Results />
      </Suspense>
      <div className="space-y-2">
        <h2 className="text-lg font-semibold mb-4">News</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Recent news in our eco system</p>
      </div>
    </div>
  );
};