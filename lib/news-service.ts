import { db } from "./db";

export const getNews = async () => {
    try {
        const news = await db.news.findMany(); 
        return news;
      } catch (error) {
        console.error("Error fetching news:", error);
        throw error;
      }
}