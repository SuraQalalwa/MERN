import axios from 'axios';
import React, {useState, useEffect} from 'react'
import ProductManagerForm from '../components/ProductManagerForm'
import ManagersList from '../components/ManagersList';
const Main= (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() =>{
        axios.get("http://localhost:8000")
        .then(res => {
                setProducts(res.data);
                setLoaded(true);})
        .catch(err => console.error(err));
    },[]);
    return (
        <div>
        <ProductManagerForm/>
        <hr/>
        {loaded && <ManagersList products = {products} />}
        </div>
    )
}
export default Main;

