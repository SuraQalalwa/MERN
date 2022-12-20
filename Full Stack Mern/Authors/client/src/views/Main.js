import React,{useState,useEffect} from 'react'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm'
import AuthorList from '../components/AuthorList';
import { useNavigate } from 'react-router-dom';

export default () => {
    const [author, setAuthor]=useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/')
            .then(res =>{
                setAuthor(res.data)
                setLoaded(true);
              })
            .catch(err => console.err(err));
    },[author]); 
    const createAuthor = author => {
        axios.post('http://localhost:8000/', author)
            .then(res=>{setAuthor([...author, res.data]);})
              navigate("/")
            .catch(err=>{
              const errorResponse =err.response.data.errors;
              const errorArr=[];
              for (const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
              }
              setErrors(errorArr);
              console.log(errors)
            })

        }
  return (
    <div>
      <AuthorForm onSubmitProp={createAuthor} errors = {errors}initialName=""/>
      {/* {loaded && <AuthorList author={author}/>} */}
    </div>
  )
}
