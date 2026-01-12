import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowWeWork from './components/HowWeWork'
import ServicesOverview from './components/ServicesOverview'
import DetailedServices from './components/DetailedServices'
import TechStack from './components/TechStack'
import QuickWins from './components/QuickWins'
import RiskMitigation from './components/RiskMitigation'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HowWeWork />
      <TechStack />
      <ServicesOverview />
      <DetailedServices />
      <QuickWins />
      <RiskMitigation />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

