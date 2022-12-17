import React, { useState } from 'react';
import axios from 'axios';

export default () =>{
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const creatProject = e =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/new",{
            title: title,
            description: description,
            price: price
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
}
    return(
        <>
        <h1>Product Manager</h1>
        <form onSubmit={creatProject}>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Price</label>
                <input type="text" value={price} onChange={e => setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Description</label>
                <input type="text" value={description}  onChange={e => setDescription(e.target.value)}/>
            </div>
            <div>
                <input type="submit" value= "Create"/>
            </div>
        </form>
        </>
    )

}