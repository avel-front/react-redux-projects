import React, {useState} from 'react';
import {useSelector} from "react-redux";
import './cart-block.css'
import {BsCart2} from 'react-icons/bs'
import {CartMenu} from "../cart-menu";
import {calcTotalPrice} from "../utils";
import {ItemsCart} from "../items-cart";

// корзина
export const CartBlock = () => {

    // видимость CartMenu
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
    // получить список корзины
    const items = useSelector(state => state.cart.itemsInCart);
    // общая цена
    const totalPrice = calcTotalPrice(items);


    return (
        <div className="cart-block">
            {/* кружок */}
            <ItemsCart quantity={items.length} />
            {/* иконка и показать корзину */}
            <BsCart2 size={25} className="cart-block__icon" onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
            {/* показать цену или корзина пуста */}
            {totalPrice > 0 ? <span className="cart-block__total-price">{totalPrice} руб.</span> : 'Корзина пуста'}
            {/* содержимое корзины, если isCartMenuVisible true */}
            { isCartMenuVisible && <CartMenu items={ items } onClick={() => null}/> }
        </div>
    );
};

