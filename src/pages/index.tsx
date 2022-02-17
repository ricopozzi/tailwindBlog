import { Header } from '../components/Header'
import { faker } from '@faker-js/faker'
import { Avatar } from '../components/Avatar'

export default function Home() {

  const generateParagraph = faker.lorem.lines(5)
  const anotherParagraph = faker.lorem.lines(5)

  return (
    <>
    <Header />
    <section className="w-screen min-h-screen" >
        <img
        className="w-full h-96 object-cover"
        src="https://blog.rocketseat.com.br/content/images/2019/03/Iniciando_com_GraphQL_no_NodeJS_e_ExpressJS.png" alt="graphql" 
        />
      <div
      className="w-11/12 md:w-4/8 h-full mx-auto flex items-center flex-col"
      >
        <h1
        className=" max-w-lg text-center font-bold font-sans text-4xl leading-[2.4rem] mt-14 "
        >Por que o Facebook (Meta) criou o GraphQL?</h1>
        <p
        className="mt-4 mb-6 font-semibold"
        >4 de Fev de 2022</p>
        <p
        className="w-10/12 mt-9 text-gray-800 font-normal text-xl text-justify leading-9 md:w-4/6"
        >{generateParagraph}</p>

        <p
        className="w-10/12 mt-9 text-gray-800 font-normal text-xl text-justify leading-9 md:w-4/6"
        >{anotherParagraph}</p>

        <p
        className="w-10/12 mt-9 text-gray-800 font-normal text-xl text-justify leading-9 md:w-4/6"
        >{anotherParagraph}</p>

        <p
        className="w-10/12 mt-9 text-gray-800 font-normal text-xl text-justify leading-9 md:w-4/6"
        >{anotherParagraph}</p>
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
    </>
  )
}

