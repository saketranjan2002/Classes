import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react'


// useRef is used to store dom elements
// It can also be used to store numbers when useState can't be used -> eg "counting number of rerenders"

function App() {
  const [count, setCount] = useState(200)
  const divRef = useRef();

  useEffect(()=>{
    setTimeout(()=>{
      console.log(divRef.current);
      divRef.current.innerHTML = 10;
    },5000);
  },[]);

  return (
    <div>
      hi Counter : <div ref={divRef}>{count}</div>
    </div>
  )
}

export default App
