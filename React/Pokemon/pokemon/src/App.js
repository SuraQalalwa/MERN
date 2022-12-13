import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import PokemonGenerator from './components/PokemonGenerator';
import PokemonDisplay from './components/PokemonDisplay';
import PokemonAxios from './components/PokemonAxios';
import AxiosDisplay from './components/AxiosDisplay';

function App() {
  const [pokemon, setPokemon]= useState([]);
  const addPokemon =(x) =>{
    setPokemon(pokemon.concat(x));
  }
  return (
    <div className="App">
      < PokemonGenerator fetchhandler={addPokemon}/>
      <PokemonDisplay pokemon={pokemon} />
      < PokemonAxios axioshandler={addPokemon}/>
      <AxiosDisplay pokemon={pokemon} />
    </div>
  );
}

export default App;
