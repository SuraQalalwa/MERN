import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

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
export default (props)=> {
    const { initialName,onSubmitProp } = props;
    const [name, setName]=useState(initialName);
    const onSubmitForm=e=>{
        e.preventDefault();
        onSubmitProp({name})
        // console.log(errors)
        
        }

    return (
        <>
            <h2>Add Author</h2>
        <Link to="/">Home</Link>
        <Paper elevation={3} style={styles.paper}>
            <form onSubmit={onSubmitForm}>
                {props.errors.map((err,index) => <p key={index}>{err}</p>)}
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Author Name</InputLabel>
                    <OutlinedInput type="text" name="name" onChange={(e)=>setName(e.target.value)} value={name}/>
                </FormControl>
                <br></br>
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
                <Link to="/"><Button type="submit" variant="contained" color="primary">
                    Cancel
                </Button></Link>
            </form>
        </Paper>
        </>
    )
}


