import io from 'socket.io-client'
import React from 'react'
import { useState, useEffect } from 'react';

const Chat = (props) => {
  const [socket]= useState(()=> io(':8000'));
  const [txt, setTxt]= useState("");
  const [msg, setMsg]=useState([])

  useEffect(()=>{
      console.log('Is this running');
      socket.on('Welcome',data=>console.log(data))
      socket.on("chat", data=>setMsg([...msg,data]))
  })

  const handel=e=>{
    e.preventDefault();
    // socket.emit("chat",txt)
    socket.emit("chat",txt)

  }
  return (
    <div>
      {msg.map((msg,i)=><p key={i}>{props.username} - {msg}</p>)}
      <form onSubmit={handel}>
        <input type="text" onChange={e=>setTxt(e.target.value)}/>
          <input type="submit" value="send"/>
      </form>
    </div>

  );
}


export default Chat
