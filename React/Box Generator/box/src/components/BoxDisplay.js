import React from 'react';
import './BoxDisplay.css'

const BoxDisplay = (props) => {
    return (
        <ul className='boxs-list'>
        {props.box.map((x,id) => {
            return <li key={id} style={{backgroundColor:x.text}}></li>;
        })}
        </ul>
    );
};
    
export default BoxDisplay;

