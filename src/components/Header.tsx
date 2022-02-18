import { useRouter } from 'next/router'

export function Header(){
    const router = useRouter()

    const goToHomePage = () => {
        if(router.pathname == '/'){
            return
        }else {
            return router.push('/')
        }
    }

    return(
        <header
        className="w-screen h-20 backdrop-blur-lg fixed flex items-center pl-12  "
        >
            <h1
            className="font-sans text-4xl font-bold text-slate-900 underline cursor-pointer "
            onClick={goToHomePage}
            >Blogy</h1>

        </header>
    )
}