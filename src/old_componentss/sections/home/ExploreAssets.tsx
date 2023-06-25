import Carousel from '@/components/UI/Carousel';
import StockCard from '@/components/cards/StockCard';
//import { getExploreStocksChange } from '@/util/stocksInfo';

export default async function ExploreStocks() {
  //const stocksChange = await getExploreStocksChange();

  return (
    <section className='mb-18 2xl:mb-24'>
      {/* {stocksChange && (
        <Carousel title='Explore Stocks'>
          {stocksChange.map((stock) => (
            <StockCard
              symbol={stock.symbol}
              name={stock.name}
              price={stock.price}
              change={stock.change}
              changePercent={stock.changePercent}
              key={stock.symbol}
            />
          ))}
        </Carousel>
      )} */}
    </section>
  );
}
