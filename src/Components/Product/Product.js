import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props)



    const { name, img, price, ratings, seller } = props.product;
    const { handleAddToCart } = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="info">
                <p className='product-name'>{name}</p>
                <p>Price:{price}</p>
                <p>Manufacturer:{seller}</p>
                <p><small>Rating:{ratings}</small> </p>
                <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                    <p>Add To Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>

            </div>



        </div>
    );
};

export default Product;