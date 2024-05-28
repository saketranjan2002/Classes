import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [title2, setTitle2] = useState("raman")
  
  const Heading = ({title}) =>{
    return (
      <h1>my name is {title}</h1>
    )
  }
  
  
  const HeadingWithButton=()=>{
    const [title1, setTitle1] = useState("saket")
    
    const changeName = () => {
      setTitle1(Math.random());
    }

    return (
      <>
        <button onClick={changeName}>Change title</button>
        <Heading title={title1}/>
      </>
    )
  }

  return (
    <>
      
      <HeadingWithButton/>      
      <Heading title={"Raman"}/>      
    



    </>
  )





  // Can also use React.memo <- memoization

  /*

  Const Heading = () => React.memo(const Heading = ({title}) =>{
    return (
      <h1>my name is {title}</h1>
    )}))

  */

}

export default App
