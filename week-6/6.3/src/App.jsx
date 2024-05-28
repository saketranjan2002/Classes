import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
      <CardWrapper CardCompo={<CardCompo/>}>

      </CardWrapper>
    
  )

  function CardCompo(){
    return(
      <h2>I am the inner component</h2>
    )
  }

  function CardWrapper({CardCompo}){
    return (
      <div style={{border:"2px solid black"}}>
        {CardCompo}
      </div>
    )
  }

}

export default App
