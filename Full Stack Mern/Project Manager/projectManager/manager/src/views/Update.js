import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';

const Update = (props)=>{
    const {id}= useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    useEffect(()=>{
        axios.get('http://localhost:8000/product/' + id)
        .then(res=>{
            setTitle(res.data.title);
            setDescription(res.data.description);
            setPrice(res.data.price);})
        .catch(err=>console.log(err));
    },[]);

const updateProduct =e=>{
    e.preventDefault();
    axios.put('http://localhost:8000/product/' + id, {
        title,
        description,
        price
    })
    .then(res => console.log(res))
    .catch(err => console.error(err));
}
return(
    <div>
        <h1>Update Product</h1>
        <form onSubmit={updateProduct}>
            <label>Title</label>
            <input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <label>Description</label>
            <input type="text" name="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <label>Price</label>
            <input type="text" name="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    </div>
)
}

export default Update;

