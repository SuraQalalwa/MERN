import {
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";
import React, { useState } from "react";

    const useStyles = makeStyles({
    table: {
        width: 800,
        margin: "auto",
    },
});

    const Game1 = (props) => {
    const classes = useStyles();
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
    <>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="center">Team Name</TableCell>
                <TableCell align="center">Playing</TableCell>
                <TableCell align="center">Not Playing</TableCell>
                <TableCell align="center">Undecided</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {props.players.map((player, i) => (
                <TableRow key={i}>
                    <TableCell align="center">{player.playerName}</TableCell>
<input type="checkbox" checked={playing} onClick={(e) =>{setPlaying(player)}}/> 
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </>
    );
};
export default Game1
