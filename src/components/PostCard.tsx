import { useRouter } from 'next/router'

interface PostCardProps {
    src: string
    title: string
    uid: string
}

export function PostCard({uid, src, title}:PostCardProps){
    const router = useRouter()

    const handleCardClick = () => {
        return router.push(`/post/${uid}`)
    }

    return(
        <div
        className="w-full md:w-[22rem] h-[25rem] ]
        bg-white cursor-pointer rounded-lg border border-teal-50 
        shadow-md hover:shadow-2xl ease-in-out duration-300 hover:-translate-y-4"
        onClick={handleCardClick}
        >
            <img src={src} alt=""
        className=" rounded-t-lg h-1/2 w-full "
            />
            <div
            className="w-full h-1/2 rounded-b-lg p-9 flex items-center"
            >
                <h1
            className="text-left font-semibold text-xl"
                >{title}</h1>
            </div>

        </div>
    )
}