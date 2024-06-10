import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useContext } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { countAtom } from './store/atoms/count'



// Every compo that uses recoil have to be wrapped under RecoilRoot
// Recoil have three func
// useRecoilValue
// useRecoilState
// useSetRecoilState

// use what you need to improve performance.

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
    </div>
  )
}

function Count(){
  return <div>
      <CountReRendere />
      <Button/>
    </div> 
}


function CountReRendere(){
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Button(){
const [count,setCount] = useRecoilState(countAtom);
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
