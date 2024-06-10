import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// prop drilling
// Passing the props can become verbose and inconvinient while passing 
// props deeply through the tree.




// Note
// maintain states as low as as possible in the dom tree
// to avoid making the code unappealing and unreadable 



function App() {
  const [count,setCount] = useState(0);

  return (
    <div>
      <Count count={count}/>
      <Button count={count} setCount={setCount}/>
    </div>
  )
}

function Count({count}){
    return {count};
}

function Button({count,setCount}){
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
