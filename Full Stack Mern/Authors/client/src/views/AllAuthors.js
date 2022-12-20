import React, { useState,useEffect } from 'react';
import  axios from 'axios';
import AuthorList from '../components/AuthorList';

export default () => {
    const [author, setAuthor]=useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/')
            .then(res =>{
                setAuthor(res.data)
                setLoaded(true);
            })
            .catch(err => console.err(err));
    },[author]); 

return (
    <div>
        {loaded && <AuthorList author={author}/>}
    </div>
)
}