import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RecoilRoot} from "recoil"

import {homeAtomFamily} from "./store/atoms/home"

import {useRecoilValue, useRecoilState, selector, useSetRecoilState} from "recoil"
import { useEffect } from 'react'






function App() {

function Todo({id}){
  const value = useRecoilValue(homeAtomFamily(id));
  console.log(value.id);
  return <div>
    <h1>{value.id}</h1>
    <h1>{value.desc}</h1>
  </div>
}



// this will update ALL todods with id:2
function UpdateTodo(){
  const setTodo = useSetRecoilState(homeAtomFamily(2));
  useEffect(()=>{
    setTimeout(()=>{
      setTodo({
        id:2,
        desc:"new Todo"
      })
    },5000);
  },[])

  // return <></>
}


  return (
    <div>

{/* here UpdateTodo function can be used to update all todos with id=2 */}

      <RecoilRoot>
        <UpdateTodo/>   
        <Todo id={1}/>
        <Todo id={2}/>
        <Todo id={3}/>
      </RecoilRoot>
    </div>
  )
}

export default App
