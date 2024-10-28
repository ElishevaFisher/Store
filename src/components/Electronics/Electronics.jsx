import React, {useEffect, useState} from 'react';
import {getElectronicsProducts} from '../../service/store.js';
import style from './Electronics.module.css';

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
        <div className={style.productList}>
            {
                products.map(product => (
                    <div key={product.id} className={style.productCard}>
                        <h2 className={style.productTitle}>{product.title}</h2>
                        <img src={product.image} alt={product.title} className={style.productImage} />
                        <p className={style.productPrice}>${product.price}</p>
                    </div>
                ))
            }
        </div>
    );
}
export default Electronics;