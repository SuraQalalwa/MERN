import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteButton from './DeleteButton';
    
const AuthorList = (props) => {
    const [author, setAuthor] = useState([]);
   
    useEffect(() => {
        axios.get('http://localhost:8000/')
            .then(res => setAuthor(res.data));
    }, [])
    
    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id != authorId))
    }
    
    return (
        <div>
            {author.map((author, id) => {
                return (
                    <p key={id}>
                        <Link to="/">{author.name}  </Link> 
                        <Link to={"/edit/" + author._id}><button>Edit</button></Link> 
                    <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
                    </p>
                )
            })}
        </div>
    );
}
    
export default AuthorList;

