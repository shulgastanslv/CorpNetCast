import {getNews} from "@/lib/news-service";

const NewsPage = async () => {

    const news = await getNews();

    return (
        <div>News</div>
    );
}

export default NewsPage;