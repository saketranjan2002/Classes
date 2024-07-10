import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [render,setRender] = useState(true);

  useEffect(()=>{
    setInterval(()=>{
      setRender(r => !r);
    },2000);
  },[]); 


  return (
    <>
      {render ? <MyCompo/> : <></>}
    </>
  )
}

// Remove strict mode before testing this 
// Strict mode helps catch common errors that could lead to bugs in your code also
// helps to identify and detect various warnings/errors during the development phase, namely… Helps to identify those components having unsafe lifecycles: Some of the legacy component lifecycle methods are considered to be unsafe to use in async applications.

function MyCompo(){
  useEffect(()=>{
    console.error("compo mounted");        // this is called when the compo mounts or after the prev compo is unmounted
  
    return ()=>{                           // this is called when the dependencies change or the compo unmounts
      console.log("compo unmounted");
    };
  },[]);


  return(
    <>Inside the compo</>
  )
}


export default App
