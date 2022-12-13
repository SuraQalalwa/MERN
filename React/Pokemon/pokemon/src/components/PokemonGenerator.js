import React, {useState} from 'react'

const PokemonGenerator = (props) => {
    const[pokemon, setPokemon]=useState([]);
    const fetchhandler=() =>{
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
          .then(response => {
            return response.json();
        }).then(response => {
            props.fetchhandler(response.results);
            console.log(response);
        }).catch(err=>{
            console.log(err);
        });
    }
  return (
    <div>
      <button onClick={fetchhandler}>Fetch Pokemon</button>
    </div>
  )
}

export default PokemonGenerator
