import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';
import axios from 'axios';
const styles = {
    paper: {
        width: "20rem", padding: "1rem",
        margin: "auto"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}
export default function PlayerForm() {
    const [playerName, setPlayerName]= useState('');
    const [position, setPosition] = useState('');
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const onSubmitForm =(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/',
            {
                playerName:playerName,
                position:position
            })
            .then(res =>{ console.log(res);navigate("/list")})
            .catch(err =>{ 
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            })
            
    }
    return (
        <Paper elevation={3} style={styles.paper}>
            <h2>Add Player</h2>
            <form onSubmit={onSubmitForm}>

                {errors.map((err,index)=>
                <p key={index}>{err}</p>)}

                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Player Name</InputLabel>
                    <OutlinedInput type="text" name="playerName" onChange={(e)=> setPlayerName(e.target.value)}/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Player Position</InputLabel>
                    <OutlinedInput type="text" name="position" onChange={(e)=> setPosition(e.target.value)}/>
                </FormControl>
                <br></br>
                <Button type="submit" variant="contained" color="primary">
                    ADD
                </Button>
            </form>
        </Paper>
    )
}

