import { Header } from '../../components/Header'
import { Avatar } from '../../components/Avatar'
import { GetStaticProps } from 'next'
import Prismic from "prismic-javascript"
import { client } from '../../../prismic-configuration'
import { useRouter } from 'next/router'

export default function Post({ post }:any) {

  const paragraphClass = "w-10/12 mt-9 text-gray-800 font-normal text-xl text-justify leading-9 md:w-4/6"
  return (
    <>
    <Header />
    <section className="max-w-screen min-h-screen" >
        <img
        className="w-full h-96 object-cover"
        src={post.data.image_url.url} alt="graphql" 
        />
      <div
      className="w-11/12 md:w-4/8 h-full mx-auto flex items-center flex-col"
      >
        <h1
        className=" max-w-lg text-center font-bold font-sans text-4xl leading-[2.4rem] mt-14 "
        >{post.data.title[0].text}</h1>
        <p
        className="mt-4 mb-6 font-semibold"
        >4 de Fevereiro de 2022</p>


        {post.data.main_text.map((par:any) => (
          <p key={par.text} className={paragraphClass} >{par.text}</p>
        ) )}


        <div
        className="w-full flex flex-col justify-center items-center"
        >
          <Avatar compClass='mt-12'/>
          <h1
          className="mt-3 font-bold"
          >Enrico Pozzi</h1>
        </div>
        
      </div>
    </section>
    <footer
    className="w-full h-6"
    ></footer>
    </>
  )
}


export async function getStaticProps<GetStaticProps>({params}:any) {

  const post = await client.getByUID('blog_post', String(params.uid) , {})

  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths() {

  const docs = await client.query(
    Prismic.Predicates.at('document.type', 'blog_post'),
    { lang: '*' }
  );

  return {
    
    paths: docs.results.map((doc) => {
      return { params: { uid: doc.uid }};
    }),
    fallback: false,
  };
}