import React, { useEffect,useState } from 'react';
import axios from 'axios';
const People = props => {
    const [people, setPeople] = useState('');

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/'+props.id)
        .then(response => setPeople(response.data))
    },[props.id]
    )

    return (
        <div>
        <h3>Name :{people.name}</h3> 
    <p>Height :{people.height} cm</p>
    <p>Mass :{people.mass} kg</p>
    <p>Hair Color :{people.hair_color}</p>
    <p>Skin Color :{people.skin_color}</p>
        </div>
    );
}
export default People;

