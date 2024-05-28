import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    title:"t-1",
    description:"d-1"
  },{
    title:"t-2",
    description:"d-2"
  }])

  const Todo = ({title,description}) => {
    return (
      <>
        <h1>{title}</h1>
        <h1>{description}</h1>
      </>
    )
  }

  return (
    <div>
       {todos.map((todo) =>  <Todo key={todo.id} title={todo.title} description={todo.description} />)} 
       {/* key is used to uniqely identify the records to optimize re rendering especially in native apps
       
       Else you will get this warning

       warning: Each child in a list should have a unique "key" prop.

        Check the render method of `App`. See https://reactjs.org/link/warning-keys for more information.
            at Todo (http://localhost:5173/src/App.jsx?t=1716814960038:31:19)
            at App (http://localhost:5173/src/App.jsx?t=1716814960038:24:29)
        printWarning @ react_jsx-dev-runtime.js?v=64c80236:62
        error @ react_jsx-dev-runtime.js?v=64c80236:46
        validateExplicitKey @ react_jsx-dev-runtime.js?v=64c80236:722
        validateChildKeys @ react_jsx-dev-runtime.js?v=64c80236:735
        jsxWithValidation @ react_jsx-dev-runtime.js?v=64c80236:853
        App @ App.jsx?t=1716814960038:49
        renderWithHooks @ react-dom_client.js?v=1c77ae77:11566
        mountIndeterminateComponent @ react-dom_client.js?v=1c77ae77:14944
        beginWork @ react-dom_client.js?v=1c77ae77:15932
        beginWork$1 @ react-dom_client.js?v=1c77ae77:19779
        performUnitOfWork @ react-dom_client.js?v=1c77ae77:19224
        workLoopSync @ react-dom_client.js?v=1c77ae77:19163
        renderRootSync @ react-dom_client.js?v=1c77ae77:19142
        performConcurrentWorkOnRoot @ react-dom_client.js?v=1c77ae77:18704
        workLoop @ react-dom_client.js?v=1c77ae77:195
        flushWork @ react-dom_client.js?v=1c77ae77:174
        performWorkUntilDeadline @ react-dom_client.js?v=1c77ae77:382
        Show 16 more frames
        Show less
       
       
       */}
    </div>
  )
}

export default App
