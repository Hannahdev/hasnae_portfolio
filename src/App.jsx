import HighlightsJourney from './components/HighlightsJourney'
import Leadership from './components/Leadership'
import Footer from './components/Footer'
import Work from './components/Work'
import Services from './components/Services'
import TechStack from './components/TechStack'

import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import LenisScroll from './components/LenisScroll'

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Header />
            <About />
            <Services />

            <TechStack />
            <Work />
            <Leadership />
            <HighlightsJourney />
            <Footer />
        </>
    )
}