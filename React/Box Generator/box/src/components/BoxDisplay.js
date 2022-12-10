import React from 'react';
import './BoxDisplay.css'

const BoxDisplay = (props) => {
    return (
        <ul className='boxs-list'>
        {props.box.map(x => {
            return <li key={x.id} style={}></li>;
        })}
        </ul>
    );
};
    
export default BoxDisplay;

