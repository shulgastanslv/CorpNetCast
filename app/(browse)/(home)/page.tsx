import React, {Suspense} from "react";
import {Results, ResultsSkeleton} from "./_components/results";
import {CarouselResults} from "./_components/carousel-results";

export default function Page() {

    return (
        <div className="flex flex-col w-full p-4">
            <CarouselResults/>
            <Suspense fallback={<ResultsSkeleton/>}>
                <Results/>
            </Suspense>
        </div>
    );
};