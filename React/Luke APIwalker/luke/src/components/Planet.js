import React, { useEffect,useState } from 'react';
import axios from 'axios';
const Planet = props => {
    const [planet, setPlanet] = useState('');

    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/'+props.i)
        .then(response => setPlanet(response.data))
    },[props.i]
    )

    return (
        <div>
        <h3>Name :{planet.name}</h3> 
    <p>Climate :{planet.climate}</p>
    <p>Terrain :{planet.terrain}</p>
    <p>Surface Water:{planet.surface_water}</p>
    <p>Population :{planet.population}</p>
        </div>
    );
}
export default Planet;