import { useState, memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCallback } from 'react'

function App() {
// useCallback return a memoized callback func
// useCallbcak hooks only runs when one of its dependencies update

// useCallback and useMemo are similar , the diff is that useMemo returns a memoized value and useCallback return a memoized func 


  const [count,setCount] = useState(0);

  
  const clickMe = useCallback(()=>{
    console.log("ButtonCompo clicked");
  },[]);
  
  return  <div>
      <ButtonCompo onInputfunc={clickMe}/>
      <button onClick={()=>{
        setCount(count+1);
      }}>Click me {count}</button>
    </div>
}


const ButtonCompo = memo(({onInputfunc})=>{
  console.log("child rerender");
  return (
    <div>
      <button onClick={onInputfunc}>Button clicked</button>
    </div>
  )
});

export default App






// here even if ButtonCompo is a memo then also it is getting re rendered when
// the parent is re rendered.

// since in memo the reference of the function is different.
// therefore we use useCallback for clickMe func