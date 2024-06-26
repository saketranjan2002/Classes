import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NextPayout } from './components/NextPayout'

function App() {

  return (
    <div>
      <NextPayout title={"Next Payout"} Amount={"2313.23"} OrderCount={"23"}/>
    </div>
  )
}

export default App
