import React from 'react';

const AxiosDisplay = (props) => {
    return (
        <div className="pokemon-display-name">
        <ul>
        {props.pokemon.map((pokemon,id) => {
            return <li key={id}>{pokemon.name}</li>;
        })}
        </ul>
        </div>
        )
}

export default AxiosDisplay


