import React, {useState} from 'react';
import axios from 'axios';

const PokemonAxios = (props) => {
    const[axiospokemon, setAxiosPokemon]=useState([]);
    const axioshandler=() =>{
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
        .then(response => {
                props.axioshandler(response.data.results);
                console.log(response);
            }).catch(err=>{
                console.log(err);
            });
        }
return (
    <div>
        <button onClick={axioshandler}>Axios Pokemon</button>
    </div>
)
}

export default PokemonAxios
