import axios from 'axios';
import React from 'react'

const DeleteButton = (props) => {
    const {playerId, successCallback} = props;
        const deletePlayer = (e) => {
          var result = window.confirm("Are you sure you want to remove"+" "+ props.playerName)
          if (result === true){
            axios.delete('http://localhost:8000/'+playerId)
            .then(res=>{
            // alert("Are you sure you want to remove");
            successCallback();})
      }}

  return (
    <div>
        <button onClick={deletePlayer}>Delete</button>
      
    </div>
  )
}
export default DeleteButton;