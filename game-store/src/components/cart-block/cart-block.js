import React from 'react';
import './cart-block.css'
import {BsCart2} from 'react-icons/bs'


export const CartBlock = () => {
    return (
        <div className="cart-block">
            <BsCart2 size={25} className="cart-block__icon"/>
            <span className="cart-block__total-price">100 руб.</span>
        </div>
    );
};

