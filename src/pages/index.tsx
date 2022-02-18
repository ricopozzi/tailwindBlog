import { Header } from '../components/Header'
import { faker } from '@faker-js/faker'
import { Avatar } from '../components/Avatar'
import { GetStaticProps } from 'next'
import { client } from '../../prismic-configuration'

export default function Home({posts}:any) {

  const generateParagraph = faker.lorem.lines(5)
  const anotherParagraph = faker.lorem.lines(5)

  const paragraphClass = "w-10/12 mt-9 text-gray-800 font-normal text-xl text-justify leading-9 md:w-4/6"

  return (
    <>
    <Header />
    <section className="max-w-screen min-h-screen" >
        <img
        className="w-full h-96 object-cover"
        src={posts.data.image_url.url} alt="graphql" 
        />
      <div
      className="w-11/12 md:w-4/8 h-full mx-auto flex items-center flex-col"
      >
        <h1
        className=" max-w-lg text-center font-bold font-sans text-4xl leading-[2.4rem] mt-14 "
        >{posts.data.title[0].text}</h1>
        <p
        className="mt-4 mb-6 font-semibold"
        >4 de Fev de 2022</p>


        {posts.data.main_text.map(par => (
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


export async function getStaticProps<GetStaticProps>() {
  const posts = await client.getSingle("blog_post", {})

  return {
    props: {
      posts
    }
  }
}