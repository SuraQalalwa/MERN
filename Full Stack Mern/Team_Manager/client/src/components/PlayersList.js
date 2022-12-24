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
import DeleteButton from "./DeleteButton";

const useStyles = makeStyles({
  table: {
    width: 800,
    margin: "auto",
  },
});

const PlayersList = (props) => {
  const [player, setPlayer] = useState([]);
  const classes = useStyles();
  
  const removeFromDom = (playerId) => {
    setPlayer(player.filter((player) => player._id != playerId));
  };
  return (
    <>
      
    

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Team Name</TableCell>
              <TableCell align="center">Preferred Position</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.players.map((player, i) => (
              <TableRow key={i}>
                <TableCell align="center">{player.playerName}</TableCell>
                <TableCell align="center">{player.position}</TableCell>
                <TableCell align="center">
                  <DeleteButton
                    playerId={player._id}
                    playerName={player.playerName}
                    successCallback={() => removeFromDom(player._id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PlayersList;
