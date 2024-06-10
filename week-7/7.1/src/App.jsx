import { lazy ,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Suspense } from 'react'
// lazy loading
// data is only rendered when visited or scrolled

const Dashboard  = lazy(() => import('./components/Dashboard')) 
const Landing = lazy(() => import('./components/Landing')) 


// Client side routing
// all the resources are sent by the server at once
// no need for hot reload


function App() {

  return (
    <>
    <BrowserRouter>
      <AppBar/>
      <Routes>
        {/* wrap your component inside suspense for lazy loading */}
        <Route path="/dashboard" element={<Suspense fallback={"Loading...."}><Dashboard/></Suspense>}  />
        <Route path="/" element={<Suspense fallback={"Loading.."}><Landing/></Suspense>}  />
      </Routes>
    </BrowserRouter>
    </>
  )
}


// useNavigate can only be used in a component inside BrowserRouter

function AppBar(){
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={()=>{
        navigate("/")
      }}>Landing</button>
      <button onClick={()=>{
        navigate("/dashboard")
      }}>Dashboard</button>
    </div>
  )
}

export default App
