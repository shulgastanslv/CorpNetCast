import { Button } from "@/components/ui/button";
import { getNews } from "@/lib/news-service";
import { useEffect, useState } from "react";

const NewsPage = async () => {

  const news = await getNews();

  return (
    <div>News</div>
  );
}

export default NewsPage;