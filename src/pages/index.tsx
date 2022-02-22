import { client } from "../../prismic-configuration";
import { Header } from "../components/Header";
import { PostCard } from "../components/PostCard";
import Prismic from "prismic-javascript";
import { Footer } from "../components/Footer";
import { Carousel } from "../components/Carousel";

export default function Home({ posts }: any) {
  return (
    <>
      <Header />
      <div className='px-7 max-w-screen flex-col h-96 bg-gradient-to-r from-slate-900 to-blue-700  flex justify-center items-center'>
        <h1 className='font-bold text-5xl text-white text-center'>
          Blog da Blogy
        </h1>
        <p className='mt-4 text-white text-center font-semibold md:w-2/5 md:text-xl'>
          Junte-se a milhares de devs e acelere na direção dos seus objetivos.
          Transforme sua carreira em uma jornada de evolução contínua através
          das melhores tecnologias.
        </p>
      </div>
      <section className=' max-w-[1300px] min-h-min mx-auto pb-10 gap-9 pt-16 px-6 md:px-0 flex flex-wrap justify-center '>
        <Carousel
          posts={[posts.results[0], posts.results[1], posts.results[2]]}
        />

        {posts.results.map((post: any) => (
          <PostCard
            key={post.uid}
            uid={post.uid}
            src={post.data.image_url.url}
            title={post.data.title[0].text}
            date={post.first_publication_date}
          />
        ))}
      </section>
      <Footer />
    </>
  );
}

export async function getStaticProps<GetStaticProps>() {
  // const posts = await client.getSingle("blog_post", {})
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "blog_post"),
    { pageSize: 10, page: 1 }
  );

  return {
    props: {
      posts,
    },
  };
}
