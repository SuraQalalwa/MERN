import { navigate } from '@reach/router';
import React, { useState} from 'react';

const Choice = (props) => {
    const options=["people", "planets"];
    const [choice, setChoice] = useState(options[0]);
    const [id,setId]=useState("")
const FindPerson=(e) =>{
    navigate("/"+choice+"/"+id)
    e.preventDefault();
    console.log(choice)
    console.log(id)

}
    return (
        <>
        <div>
        <form onSubmit={FindPerson}>
            <label>Search for:</label>
                <select  onChange={(e)=> setChoice(e.target.value)}>
                {options.map((x, id)=>{
                return (<option key={id}>{x}</option>)
            })}
                </select>
                <label>ID</label>
                <input type= "text"onChange={e=>setId(e.target.value)} ></input>
            <input type="submit" value="Search"/>
        </form>
    </div>
        </>
    );
}
export default Choice