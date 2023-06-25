'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { COLORS } from '@/constants/colors';

type CarouselProps = {
  title: string;
  children: React.ReactNode[];
};

export default function Carousel({ title, children }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) carouselRef.current.scrollLeft -= 250;
  };

  const scrollRight = () => {
    if (carouselRef.current) carouselRef.current.scrollLeft += 250;
  };

  return (
    <>
      <div className='flex items-center justify-between mb-4 3xl:mb-6'>
        <h2 className='text-2xl font-semibold text-white 2xl:text-3xl'>
          {title}
        </h2>
        <div className='flex gap-3'>
          <div
            onClick={scrollLeft}
            className='transition-300 cursor-pointer rounded-sm bg-darkGrey p-1.5 md:p-2 opacity-60 hover:opacity-100'
          >
            <ChevronLeft
              color={COLORS.lightGrey}
              size={24}
              className='-ml-0.5'
            />
          </div>
          <div
            onClick={scrollRight}
            className='transition-300 cursor-pointer rounded-sm bg-darkGrey p-1.5 md:p-2 opacity-60 hover:opacity-100'
          >
            <ChevronRight
              color={COLORS.lightGrey}
              size={24}
              className='-mr-0.5'
            />
          </div>
        </div>
      </div>

      <div className='relative'>
        <div
          ref={carouselRef}
          className='no-scrollbar relative flex gap-6 overflow-x-scroll scroll-smooth whitespace-nowrap pr-[10%]'
        >
          {children.map((child, i) => (
            <div className='inline-flex self-stretch' key={`child-${i}`}>
              {child}
            </div>
          ))}
        </div>

        <div className='pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-black to-transparent' />
      </div>
    </>
  );
}
