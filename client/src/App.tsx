import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Projects />
    </>
  )
}

export default App
