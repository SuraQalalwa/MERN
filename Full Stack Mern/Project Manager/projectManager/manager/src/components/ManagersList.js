import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const ManagersList = (props)=>{
    const {removeFromList} = props;
    const deleteProduct =(productId)=>{
        axios.delete("http://localhost:8000/product/"+productId)
            .then(res=>{ removeFromList(productId)})
            .catch(err=>console.error(err));
    }
    return (
        <>
        <h1>Products</h1>
        <div>
            {props.products.map((product,i)=>{
            return <div key={i}><Link to = {'/product/' + product._id}>{product.title}</Link>
            <Link to = {'/product/edit/' + product._id}>Edit</Link>
            <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
            </div>})}
        </div>
        </>
    )
}
export default ManagersList;