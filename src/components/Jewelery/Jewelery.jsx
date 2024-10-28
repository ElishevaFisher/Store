
import React, {useEffect, useState} from 'react';
import {getJwelleryProducts} from '../../service/store.js';
import style from './Jewelery.module.css'
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
        <div className={style.productList}>
            {
                products.map(product => (
                    <div key={product.id} className={style.productCard}>
                        <h2  className={style.productTitle}>{product.title}</h2>
                        <img src={product.image} alt={product.title} className={style.productImage}/>
                        <p className={style.productPrice}>${product.price}</p>
                    </div>
                ))
            }
        </div>
    );
}
export default Jewelery;