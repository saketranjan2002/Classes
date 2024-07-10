import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { axios } from "axios"



// custom hook is just a func which starts with "use"
// It uses standard hook within
// makes code clean
function useTodos(n){
  const [todos,setTodos] = useState();
  const [loading,setLoading] = useState(false)


  // if state var used inside useEffect then it should be a dependency.
  // if a dependency then once n change the useEffect is called again 
  // new setInterval is active 
  // This is not ideal
  // hence clear the interval using clearInterval(value) 
  useEffect(()=>{
    const value = setInterval(()=>{
      axios.get("xnsmsmms.com")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(true);
      })
    },n);

    return () => {
      clearInterval(value);
    }

  },[n]);

  return [todos,loading];
}

function App() {
  const [todos,loading] = useTodos(5000);

  return (
    <>
      {loading ? <div>
        {todos.map(todo => <Todo todo={todo} /> )}
      </div> : <></>}
    </>
  )
}

function Todo(todo){
  return (
    <div>
      <h1>{todo.id}</h1>
      <h1>{todo.desc}</h1>
    </div>
  )
}

export default App
