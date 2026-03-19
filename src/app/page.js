import Landing from "./Components/Landing";
import Menu from "./Components/Menu";

export default function Home() {
  return (
    <div className="flex w-screen h-screen">
        <Menu />      
        <Landing />
    </div>
  );
}
