import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import HeroSection from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <Navigation />
      <HeroSection />
    </div>

  )
}

export default App
