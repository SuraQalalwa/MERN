import React, { useEffect, useState } from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';

const Update = (props) => {
const { id } = useParams();
const [author, setAuthor] = useState();
const [loaded, setLoaded] = useState(false);
const navigate = useNavigate();
useEffect(() => {
    axios.get('http://localhost:8000/' + id)
        .then(res => {
            setAuthor(res.data);
            setLoaded(true);
        })
}, [])
const updateAuthor = author => {
    axios.put('http://localhost:8000/' + id, author)
        .then(res => console.log(res));
        navigate("/")
}

{loaded && (
    <AuthorForm
        onSubmitProp={updateAuthor}
        initialName={author.name}/>
)}
return (
    <div>
        {/* <Link to="/">Home</Link> */}
        <h1>Update Author</h1>
        {loaded && (
            <>
                <AuthorForm
                    onSubmitProp={updateAuthor}
                    initialName={author.name} />
            </>
        )}
    </div>
)
}
export default Update;
