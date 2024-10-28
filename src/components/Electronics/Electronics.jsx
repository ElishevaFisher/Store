import React, {useEffect, useState} from 'react';
import {getElectronicsProducts} from '../../service/store.js';
import Styles from './Electronics.module.css';
function Electronics() {
    const [products, setProducts]= useState([]);
    const [loading, setLoading]= useState(true);

    useEffect(() =>{
        getElectronicsProducts()
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
export default Electronics;