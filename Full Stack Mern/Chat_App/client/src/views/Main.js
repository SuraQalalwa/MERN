import React, { useState } from 'react'
import Chat from '../components/Chat'
import SenderForm from '../components/SenderForm'

const Main = () => {
    const [name, setName]=useState('')

  return (
    <div>
        {!name? <SenderForm fun={(ename)=>setName(ename)}/>:<Chat username={name}/>}
    </div>
  )
}

export default Main
