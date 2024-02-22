import { Button } from "@/components/ui/button";
import { getNews } from "@/lib/news-service";
import { useEffect, useState } from "react";

interface NewsItem {
  id: string;
  title: string;
  name: string;
  imageUrl: string;
  description: string;
  createdAt: Date;
}

const MainPage = async () => {

  const news = await getNews();

  return (
    <div className="h-full space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar pb-10">
      <div className="m-10">
        <div className="container grid md:grid-cols-3 gap-8 px-4 md:px-6">
          <div className="space-y-4 md:col-span-2">
            {news.length > 0 && (
              <>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{news[0].title}</h1>
                  <p className="text-gray-500 dark:text-gray-400">Posted on {news[0].createdAt.getHours()} hours ago</p>
                </div>
                <img
                  alt={news[0].title}
                  className="aspect-video overflow-hidden rounded-lg object-cover"
                  height={400}
                  src={news[0].imageUrl}
                  width={800}
                />
                <div className="w-auto h-auto">
                  <p>{news[0].description}</p>
                </div>
              </>
            )}
          </div>

          <div className="space-y-5">
            {news.slice(1).map((item) => (
              <div key={item.id} className="rounded-xl border border-l-muted">
                <img
                  className="aspect-thumb rounded-t-lg object-cover"
                  height={300}
                  src={item.imageUrl}
                  alt={item.title}
                  width={450}
                />
                <div className="p-4">
                  <div className="mb-2">
                    <div className="text-sm font-medium leading-none">{item.title}</div>
                    <div className="text-sm">{item.description}</div>
                  </div>
                  <Button size="sm" variant="ghost">
                    Read more
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;