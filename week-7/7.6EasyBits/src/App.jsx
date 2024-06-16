import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RecoilRoot} from "recoil"

import {homeAtom} from "./store/atoms/home"
import {jobAtom} from "./store/atoms/job"
import {messageAtom} from "./store/atoms/message"
import {notificationAtom} from "./store/atoms/notification"
import {networkAtom} from "./store/atoms/network"
import {useRecoilValue, useRecoilState, selector} from "recoil"




const homeAtomSelector = selector({
  key:"homeAtomSelector",
  get:({get})=>{
    const jobcnt = get(jobAtom);
    const messagecnt = get(messageAtom);
    const networkcnt = get(networkAtom);
    const notificationcnt = get(notificationAtom);
    return jobcnt+messagecnt+networkcnt+notificationcnt;
  }
})


function App() {



function Home(){
  const totalCount = useRecoilValue(homeAtomSelector)
  return <button>Home {totalCount}</button>
}

function Jobs(){
  const [jobCount,setJobCount] = useRecoilState(jobAtom)
  return <button onClick={()=>{
    setJobCount(jobCount+1);
  }}>Jobs {jobCount}</button>
}

function Message(){
  const [messageCount,setMessageCount] = useRecoilState(messageAtom)
  return <button onClick={()=>{
    setMessageCount(messageCount+1);
  }}>Message {messageCount}</button>
}

function Network(){
  const [networkCount,setNetworkCount] = useRecoilState(networkAtom)
  return <button onClick={()=>{
    setNetworkCount(networkCount+1);
  }}>Network {networkCount}</button>
}

function Notification(){
  const [notificationCount,setNotificationCount] = useRecoilState(notificationAtom)
  return <button onClick={()=>{
    setNotificationCount(notificationCount+1);
  }}>Notification {notificationCount}</button>
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
