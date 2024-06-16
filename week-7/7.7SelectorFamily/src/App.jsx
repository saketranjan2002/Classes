import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RecoilRoot} from "recoil"
import { homeAtomFamily } from './store/atom/homeAtomFamily'
import {useRecoilValue, useRecoilValueLoadable} from "recoil"

function App() {


function Todo({id}){
  // const todo = useRecoilValue(homeAtomFamily(id));
  const todo = useRecoilValueLoadable(homeAtomFamily(id));
  if(todo.state == "loading"){
    return <div>Loading....</div>
  } else if(todo.state == "hasValue"){
    return <div>
       <h1>{todo.contents.id}</h1>
       <h1>{todo.contents.desc}</h1>
    </div>
  } else if(todo.state == "hasError"){
    return <div>Error while rendering</div>
  }


}

  return (
    <div>
      <RecoilRoot>
        <Todo id={1}/>
        <Todo id={2}/>
      </RecoilRoot>
    </div>
  )
}

export default App
