import HomeFooter from './components/footer'
import { HomeHeader } from './components/header'
import { MostPopularyTattoos } from './components/most-populary/most-populary'

export default function HomePage() {
  return (
    <div className="flex flex-col w-screen">
      <HomeHeader />
      <MostPopularyTattoos />
      <HomeFooter />
    </div>
  )
}
