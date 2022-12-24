import React, { useState } from 'react'
import Game1 from '../components/Game1';

const Status = (props) => {
    const [playing,setPlaying]=useState(false);
    const [notplaying, setNotPlaying]= useState(false);
    const [decided, setDecided]= useState(true);

    const toSetPlaying =(e)=>{
        setPlaying = !playing;
    }
    const toSetNotPlaying =(e)=>{
        setNotPlaying = !notplaying;
    }
    const toSetUndecided =(e)=>{
        setDecided = !decided;
    }
  return (
    <div>
      <Game1/>
    </div>
  )
}

export default Status
