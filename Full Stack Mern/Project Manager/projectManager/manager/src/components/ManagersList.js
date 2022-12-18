import React from 'react';
import axios from 'axios';

const ManagersList = (props)=>{
    return (
        <>
        <h1>Products</h1>
        <div>
            {props.products.map((product,i)=>
            <p key={i}>{product.title}</p>)}
        </div>
        </>
    )
}
export default ManagersList;