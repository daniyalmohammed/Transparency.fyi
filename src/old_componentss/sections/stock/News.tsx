import Carousel from '@/components/UI/Carousel';
import NewsCard from '@/components/cards/NewsCard';
import { NewsType } from '@/constants/types';

export default function News({ news }: { news: NewsType[] }) {
  return (
    <Carousel title='News'>
      {news.map((article, i) => (
        <NewsCard
          headline={article.headline}
          summary=''
          image={article.image}
          url={article.url}
          key={i}
        />
      ))}
    </Carousel>
  );
}
