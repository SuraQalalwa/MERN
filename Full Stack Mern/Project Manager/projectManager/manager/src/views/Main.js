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
    const removeFromList= productId=>{
        setProducts(products.filter(products => products._id !== productId));
    }
    return (
        <div>
        <ProductManagerForm/>
        <hr/>
        {loaded && <ManagersList products = {products} removeFromList={removeFromList} />}
        </div>
    )
}
export default Main;

