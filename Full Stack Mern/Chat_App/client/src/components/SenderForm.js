import React, { useState } from 'react'

const SenderForm = (props) => {
    const [ username, setUserName]=useState('');
    const onSubmitForm =(e)=>{
        e.preventDefault();
        props.fun(username)
        
    }         

return (
    <div>
        <h1>enter youer name</h1>
        <form onSubmit={onSubmitForm}>
            <input type="text" value={username} onChange={e=>setUserName(e.target.value)}/>
            <input type="submit" value="Send" />
        </form>
    </div>
)
}

export default SenderForm
