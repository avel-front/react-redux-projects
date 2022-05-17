import React from 'react';
import './items-cart.css'

export const ItemsCart = ({quantity = 0}) => {
    return (
        quantity > 0 ?
        <div className="items-cart">
            { quantity }
        </div>
            :
            null
    )
};
