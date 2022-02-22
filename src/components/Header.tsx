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
    <header className='max-w-screen h-16 backdrop-blur-sm  flex items-center pl-12  '>
      <h1
        className='font-sans text-4xl font-bold text-neutral-600 underline decoration-sky-500  cursor-pointer '
        onClick={goToHomePage}
      >
        |&nbsp; Blogy
      </h1>
    </header>
  );
}
