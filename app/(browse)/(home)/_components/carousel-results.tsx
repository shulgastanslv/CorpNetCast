import {getStreams} from "@/lib/feed-service";
import {Skeleton} from "@/components/ui/skeleton";

import {ResultCardSkeleton} from "./result-card";
import {CarouselResultCard} from "./carousel-result-card";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"

export const CarouselResults = async () => {
    const data = await getStreams();

    if (data.length === 0) {
        return null;
    }

    return (
        <Carousel className="w-1/3 mx-auto">
            <CarouselContent>
                {data && data.map((result) => (
                    <CarouselItem key={result.id}>
                        <CarouselResultCard data={result}/>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="ml-10"/>
            <CarouselNext className="mr-10"/>
        </Carousel>
    )
}

export const CarouselResultsResultsSkeleton = () => {
    return (
        <div>
            <Skeleton className="h-8 w-[290px] mb-4"/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                {[...Array(4)].map((_, i) => (
                    <ResultCardSkeleton key={i}/>
                ))}
            </div>
        </div>
    );
};