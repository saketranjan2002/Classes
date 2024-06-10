import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context'
import { useContext } from 'react'

// Context api solves prop drilling problem


function App() {
  const [count,setCount] = useState(0);


  // wrap anyone that wants top use the teleported valuen inside a provider 

  return (
    <div>
      <CountContext.Provider value={{count,setCount}}>
        <Count count={count} setCount={setCount}/>
      </CountContext.Provider>
    </div>
  )
}

function Count({count, setCount}){
    return <div>
      <CountReRendere count={count}/>
      <Button count={count} setCount={setCount}/>
    </div> 
}


function CountReRendere(){
  const [count,setCount] = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Button(){
  const [count,setCount] = useContext(CountContext);  
  return(
      <div>
        <button onClick={()=>{
          setCount(count+1)
        }}>Increse</button>
        <button onClick={()=>{
          setCount(count-1)
        }}>Decrease</button>
      </div>
    )
}


export default App
