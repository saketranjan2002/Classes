import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RecoilRoot} from "recoil"

import {homeAtom} from "./store/atoms/home"

import {useRecoilValue, useRecoilState, selector} from "recoil"




const homeAtomSelector = selector({
  key:"homeAtomSelector",
  get:({get})=>{
    const homecnt = get(homeAtom);
    return homecnt.home+homecnt.job+homecnt.message+homecnt.network+homecnt.notification;
  }
})


function App() {



function Home(){
  const totalCount = useRecoilValue(homeAtomSelector)
  return <button>Home {totalCount}</button>
}

function Jobs(){
  const [jobCount,setJobCount] = useRecoilState(homeAtom)
  return <button onClick={()=>{
      setJobCount({...jobCount,job:jobCount.job+1});
  }}>Jobs {jobCount.job}</button>
}

function Message(){
  const [jobCount,setJobCount] = useRecoilState(homeAtom)
  return <button onClick={()=>{
      setJobCount({...jobCount,message:jobCount.message+1});
  }}>Message {jobCount.message}</button>
}

function Network(){
  const [jobCount,setJobCount] = useRecoilState(homeAtom)
  return <button onClick={()=>{
      setJobCount({...jobCount,network:jobCount.network+1});
  }}>Network {jobCount.network}</button>
}

function Notification(){
  const [jobCount,setJobCount] = useRecoilState(homeAtom)
  return <button onClick={()=>{
      setJobCount({...jobCount,notification:jobCount.notification+1});
  }}>Notification {jobCount.notification}</button>
}

  return (
    <div>
      <RecoilRoot>
        <Home/>
        <Jobs/>
        <Message/>
        <Network/>
        <Notification/>
      </RecoilRoot>
    </div>
  )
}

export default App
