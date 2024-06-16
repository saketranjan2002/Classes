import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useContext } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState, selector } from 'recoil'
import { countAtom } from './store/atoms/count'


// pure function is a func that gives same output for same input.
// selector is a pure function that accepts a atom or another selector as input
// When these upstream atom or selectors are updated, the selector function will be re-evaluated.
// Components can subscribe to selectors just like atoms and will then be re-rendered when the selectors change.


// Selector are used to calculate derived data based on a state
// This lets us use minimum set of states.


function App() {
  return (
    <div>
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
    </div>
  )
}


const EvenSelector = selector({
  key:'EvenSelector',
  get: ({get}) => {
    const compo = get(countAtom);
    let label = (compo%2)?"":"Even Number";
    return label ;
  }
})

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
const setCount = useSetRecoilState(countAtom);
const evenLabel = useRecoilValue(EvenSelector);
  return(
      <div>
        <button onClick={()=>{
          setCount(count => count+1)
        }}>Increse</button>
        <button onClick={()=>{
          setCount(count => count-1)
        }}>Decrease</button>
        <div>{evenLabel}</div>
      </div>
    )
}


export default App
