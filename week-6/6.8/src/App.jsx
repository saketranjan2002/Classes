import { useEffect , useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function useTodos(){
    const [todos,setTodos] = useState([]);
    useEffect(()=>{
      axios.get("")
      .then((res)=>{
        setTodos(res.data.todos)
      })
    },[])

    return todos;
}

function App() {
  const todos = useTodos();
  
  return (
    <div>
      {todos}    
    </div>
  )
}

export default App
