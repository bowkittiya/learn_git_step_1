

import { useEffect , useState } from "react";
import {api} from '../servine/api';

export const useProducts = () => {
    const [ products ,searchProducts] = useState([]);
    const [loading ,setLoading] = useState(true)
    const [error , setError] = useState(null);

    useEffect( ()=>{
        const featchProducts = async () =>{
            try {
                setLoading(true);
                const data = await api.getProducts();
                setProducts(data.products);
            } catch (error) {
                setError(error.message);
            } finally{
                setLoading(false);
            }
        }
         featchProducts();
    },[])

    return { products , loading ,error};
};