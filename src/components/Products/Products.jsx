import React, { useState } from 'react';
import css from './Products.module.css';
import Plane from '../../assets/plane.png';
import { ProductsData } from '../../data/products';

const Products = () => {
    const [MenuProducts,setMenuProducts] = useState(ProductsData)
  return (
    <div className={css.container}>
        <img src={Plane} alt="product-plane-image" />
        <h1>Our featured Products</h1>

        <div className={css.products}>
            <ul className={css.menu}>
                <li>All</li>
                <li>Skin Care</li>
                <li>Conditioners</li>
                <li>Foundations</li>
            </ul>

            <div className={css.list}>
                {
                    MenuProducts.map((product, i)=>(
                        <div className={css.product}>
                            products
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Products