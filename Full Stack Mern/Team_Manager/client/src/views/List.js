import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PlayersList from '../components/PlayersList';

const List = (props) => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
    axios.get('http://localhost:8000/')
        .then(res =>{
            setPlayers(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err));
    },[players]);
    const removeFromDom= playerId=>{
        setPlayers(players.filter(player=> player._id != playerId))
    }

return (
    <div>
        {loaded && <PlayersList players={players}/>}
    </div>
)}

export default List;

