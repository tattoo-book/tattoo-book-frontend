import HomeFooter from "./components/footer";
import { HomeHeader } from "./components/header";
import { MostPopularyTattoos } from "./components/most-populary-tattoos/most-populary-tattoos";

export default function HomePage() {
  return (
    <div className="flex flex-col w-screen">
      <HomeHeader />
      <MostPopularyTattoos />
      <HomeFooter />
    </div>
  );
}
