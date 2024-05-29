import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GlitchingTypingText from './components/GlitchingTypingText'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlitchingTypingText 
      element='h1'
      $styling={{
        color: "#0FF",
        fontFamily: "'Share Tech Mono', monospace",
      }}
      glitchDuration={3450}
      >
        Software Developer
        </GlitchingTypingText>
    </>
  )
}

export default App
