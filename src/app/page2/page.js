import { Link } from "next-transition-router";
import Landing from "../Components/Landing";

export default function Home() {
  return (
    <div className="flex w-screen h-screen ">
        <Landing />
        <Link href={'/'} scroll={true} className='absolute bottom-0 right-0 bg-black rounded-xl px-5 py-2.5 text-white -translate-1/2 z-40'>to page1</Link>
    </div>
  );
}
