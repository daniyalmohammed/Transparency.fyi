import Carousel from '@/components/UI/Carousel';
import NewsCard from '@/components/cards/NewsCard';
//import { getMarketNews } from '@/util/stocksInfo';

export default async function MarketNews() {
  //const marketNews = await getMarketNews();

  return (
    <Carousel title='Market News'>
      {/* {marketNews.map((news: any, i: number) => (
        <NewsCard
          headline={news.headline}
          summary={news.summary}
          image={news.image}
          url={news.url}
          key={i}
        />
      ))} */}
    </Carousel>
  );
}
