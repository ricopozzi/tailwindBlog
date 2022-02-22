import { useRouter } from "next/router";

export function Header() {
  const router = useRouter();

  const goToHomePage = () => {
    if (router.pathname == "/") {
      return;
    } else {
      return router.push("/");
    }
  };

  return (
    <header className='w-screen h-16 backdrop-blur-sm fixed flex items-center pl-12  '>
      <h1
        className='font-sans text-4xl font-bold text-slate-300 underline decoration-sky-400  cursor-pointer '
        onClick={goToHomePage}
      >
        |&nbsp; Blogy
      </h1>
    </header>
  );
}
