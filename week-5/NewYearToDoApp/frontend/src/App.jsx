import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateNewTodo } from './components/CreateNewTodo'
import { Todo } from './components/Todo'

function App() {
  const [todos,setTodos] = useState([]);
  // now we have to fetch todos from backend

  // wrong way -> this will throws CORS err hence npm i cors in backend
  fetch("http://localhost:3005/todos")
  .then(async function(res){
    const json = await res.json();
    // console.log(json.Todos);
    setTodos(json.Todos);
  })


// Right way -> useEffect hook

  return (
   <div>
      <CreateNewTodo/>
      <Todo todos={todos}/>
    </div>
  )
}

export default App
