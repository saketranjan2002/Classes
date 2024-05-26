import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

  function App() {
    const [todos, setTodos] = useState([{
      title:"Gym",
      description:"Get some work out done",
      completed:"completed"
    }])


  function CustomToDo(props) {
    return(
      <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
        <h2>{props.completed}</h2>
      </div>
    )
  }
 

  function AddToDo(){

// if todo = [1,2]
// [...todo] = [1,2]
// [...todo,3] = [1,2,3]

    setTodos([...todos,{
      title:"Random todo",
      description:"Random description",
      completed:"completed"
    }])
  }


  return (

    // ANYTIME A PARENT RE RENDERS ALL IT'S CHILDREN RE RENDERS 
    <div>
      <button onClick={AddToDo}>Add Random To do</button>
      {todos.map(function (todo){
        return <CustomToDo title={todo.title} description={todo.description} completed={todo.completed}></CustomToDo>
      })}
    </div>
 
 )
}

export default App
