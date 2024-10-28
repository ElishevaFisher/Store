
import React, {useEffect, useState} from 'react';
import {getBooksProducts} from '../../service/store.js';
import style from './Books.module.css'
function Books() {
    const [products, setProducts]= useState([]);
    const [loading, setLoading]= useState(true);

    useEffect(() =>{
        getBooksProducts()
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
                        <img src={product.img} alt={product.title} className={style.productImage}/>
                        <p className={style.productPrice}>${product.price}</p>
                    </div>
                ))
            }
        </div>
    );
}
export default Books;