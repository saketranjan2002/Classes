import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos,setTodos] = useState([]);


// useEffect is used for side effects
// like ( setTimeout, fetch, setInterval, document.getElementById("").innerHTML etc)

  useEffect(function(){
    fetch("http://localhost:3005/todos")
    .then(async (res)=>{
      const json = await res.json();
      setTodos(json.Todos);
    })
  },[])


// hooks gives access to life cycle features and statefull logic

  return <div>
        {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
      </div>
  
}


function Todo({title,description}){
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  )
}

export default App
