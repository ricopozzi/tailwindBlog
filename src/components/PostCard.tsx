import { useRouter } from "next/router";

interface PostCardProps {
  src: string;
  title: string;
  uid: string;
  date: string;
}

export function PostCard({ uid, src, title, date }: PostCardProps) {
  const router = useRouter();

  const d = new Date(date);

  const handleCardClick = () => {
    return router.push(`/post/${uid}`);
  };

  return (
    <div
      className='w-full md:w-[22rem] h-[25rem] ]
        bg-white cursor-pointer rounded-lg border
        shadow-md hover:shadow-2xl ease-in-out duration-500 hover:-translate-y-2'
      onClick={handleCardClick}
    >
      <img src={src} alt='' className=' rounded-t-lg h-1/2 w-full ' />
      <div className='w-full h-1/2 rounded-b-lg p-9 flex items-center flex-col'>
        <h1 className='text-center font-semibold text-xl'>{title}</h1>

        <p className='mt-auto font-thin text-start w-full text-sm'>
          {d.toLocaleDateString("pt-br", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}
