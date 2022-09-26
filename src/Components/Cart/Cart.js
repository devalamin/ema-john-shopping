import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h2>This is cart</h2>
            <p>Selected Items:{cart.length}</p>


        </div>
    );
};

export default Cart;