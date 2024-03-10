import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
