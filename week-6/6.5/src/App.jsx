import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import axios from "axios"

function GetJob(id){
  const [todos,setTodo] = useState({});
  useEffect(
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(function(res){
      setTodo(res.data.todos);
    }),[id]);

    return (
      <>
        id:{id}
        <h1>title:{todos.title}</h1>
        <h1>title:{todos.description}</h1>
      </>
    )
}

function App() {
  const [id,setId] = useState(1);
  

  return (
    <div>

      <button onClick={()=>setId(1)}>1</button>
      <button onClick={()=>setId(2)}>2</button>
      <button onClick={()=>setId(3)}>3</button>
      <button onClick={()=>setId(4)}>4</button>
      <GetJob id={id}/>

    </div>
  )
}

export default App
