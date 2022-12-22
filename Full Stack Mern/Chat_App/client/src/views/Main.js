import React, { useState } from 'react'
import Chat from '../components/Chat'
import SenderForm from '../components/SenderForm'

const Main = () => {
    const [username, setUserName]=useState('')

  return (
    <div>
        {!username? <SenderForm fun={(name)=>setUserName(name)}/>:<Chat username={username}/>}
    </div>
  )
}

export default Main
