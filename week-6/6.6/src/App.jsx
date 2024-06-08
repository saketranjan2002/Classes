import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




// useMemo hook
function App() {
  
  const [txt,setTxt] = useState(0);
 

    // Counter change is triggering a re render
    // therefore useMemo


    let count = useMemo(()=>{
      let ans = 0;
      for(let i=0;i<=txt;i++){
        ans = ans + i;
      }
      return ans;
    },[txt]);

  
  const [countercnt,setCountercnt] = useState(0);
  


  return (
    <div>
       <input onChange={(e)=>{
        setTxt(e.target.value);
      }} type="text" /> 
      <p>Sum is {count}</p>
      <button onClick={()=>{
        setCountercnt(countercnt+1);
      }}>Counter({countercnt})</button>
    </div>
  )
}

export default App
