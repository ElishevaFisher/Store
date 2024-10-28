
import React, {useEffect, useState} from 'react';
import {getJwelleryProducts} from '../../service/store.js';
import Styles from './jewelery.module.css'

function Jewelery() {
    const [products, setProducts]= useState([]);
    const [loading, setLoading]= useState(true);

    useEffect(() =>{
        getJwelleryProducts()
        .then(response => response.json())
        .then(data => {
            setProducts(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching products', error);
            setLoading(false);
        });
    },[]);
    return(
        <div className={Styles.productList}>
            {
                products.map(product => (
                    <div key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.price}</p>
                    </div>
                ))
            }
        </div>
    );
}
export default Jewelery;