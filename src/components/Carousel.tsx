import { useState, useEffect } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/router";

interface CarouselProps {
  posts: any;
}

export function Carousel({ posts }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  function handleCarouselClick() {
    return router.push(`/post/${posts[index].uid}`);
  }

  function handleArrowRight() {
    if (index <= 1) {
      return setIndex(index + 1);
    }
  }

  function handleArrowLeft() {
    if (index >= 1) {
      return setIndex(index - 1);
    }
  }

  return (
    <div
      className='w-full md:w-7/12 h-[25rem] rounded-lg bg-red-100  ] cursor-pointer
     shadow-md hover:shadow-2xl ease-in-out duration-500 hover:-translate-y-2 flex flex-row'
    >
      <div className='w-full h-full '>
        <div className=' w-full h-full relative select-none'>
          <img
            className=' w-full object-cover h-full rounded-lg'
            src={posts[index].data.image_url.url}
            alt=''
          />

          <div
            className='absolute p-6 top-0 w-full rounded-lg h-full bg-slate-900 bg-opacity-40 md:p-12 flex items-center'
            onClick={handleCarouselClick}
          >
            <h1 className='text-4xl text-slate-100 font-bold antialiased'>
              {posts[index].data.title[0].text}
            </h1>
          </div>

          <div className='absolute w-full bottom-1 transform -translate-y-1/2 flex justify-end items-start px-3'>
            <button
              className='rounded-full hover:animate-pulse'
              onClick={handleArrowLeft}
            >
              <MdKeyboardArrowLeft color='#fff' size={32} />
            </button>
            <button
              className='ml-6 rounded-full hover:animate-pulse'
              onClick={handleArrowRight}
            >
              <MdKeyboardArrowRight color='#fff' size={32} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
