import React from 'react';
import './cart-item.css'

// одна позиция в меню корзины
export const CartItem = ({title, price}) => {
    return (
        <div className="cart-item">
            <span>{title}</span>
            <div className="cart-item__price">
                <span>
                    {price} руб.
                </span>

            </div>
        </div>
    );
};
