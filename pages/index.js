import Header from '../components/Header'
import Marquee from '../components/Marquee'
import NavBar from '../components/NavBar'
import ParallaxSection from '../components/ParallaxSection'
import LeagueTable from '../components/LeagueTable'
import PartyStats from '../components/PartyStats'
import AdvertPlaceholder from '../components/AdvertPlaceholder'
import EconomySection from '../components/EconomySection'
import EUSection from '../components/EUSection'
import ArticlesSlider from '../components/ArticlesSlider'
import ArticlesGrid from '../components/ArticlesGrid'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Marquee />
      <Header />
      <NavBar />
      <main>
        <section>
          <p className="welcome">
            Welcome to Reinformed.uk – your source for real-time UK and EU political and economic data, live stats, and in-depth articles.
          </p>
        </section>
        <ParallaxSection>
          <h2>UK Politics</h2>
          <LeagueTable />
          <PartyStats />
          <AdvertPlaceholder id="AD1" />
        </ParallaxSection>
        <ParallaxSection>
          <h2>UK Economy</h2>
          <EconomySection />
          <AdvertPlaceholder id="AD2" />
        </ParallaxSection>
        <ParallaxSection>
          <h2>European Data</h2>
          <EUSection />
          <AdvertPlaceholder id="AD3" />
        </ParallaxSection>
        <ParallaxSection>
          <h2>Articles</h2>
          <ArticlesSlider />
          <ArticlesGrid />
        </ParallaxSection>
      </main>
      <Footer />
    </>
  )
}
