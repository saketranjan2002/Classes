import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count,setCount] = useState(0);

  // const onClickHandler = () => {
  //   // State variable can be set using calling the setcount function with the new value
  //   setCount(count+1);
  // }

  const CustomButton=(props)=>{

    const onClickHandler = () =>{
      props.setCount(props.count+1);
    }
    return (
      <button onClick={onClickHandler}>
        Counter {props.count}
      </button>
    )
  }
    
  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )



}

export default App
