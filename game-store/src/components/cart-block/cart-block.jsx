import React, {useCallback, useState} from 'react';
import {useSelector} from "react-redux";
import {BsCart2} from 'react-icons/bs'
import {CartMenu} from "../cart-menu";
import {calcTotalPrice} from "../utils";
import {ItemsCart} from "../items-cart";
import {useNavigate} from "react-router-dom";
import './cart-block.css'

// корзина
export const CartBlock = () => {

    // видимость CartMenu
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
    // доступ к списку корзины
    const items = useSelector(state => state.cart.itemsInCart);
    // итого
    const totalPrice = calcTotalPrice(items);

    //переход на страницу оформления заказа
    const navigate = useNavigate();
    const handleClick = useCallback(() => {
        setIsCartMenuVisible(false)
        navigate(`/order`)
    }, [navigate])

    return (
        <div className="cart-block">
            {/* кружок */}
            <ItemsCart quantity={items.length} />
            {/* иконка и показать корзину */}
            <BsCart2 size={25} className="cart-block__icon" onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
            {/* показать цену или корзина пуста */}
            {totalPrice > 0 ? <span className="cart-block__total-price">{totalPrice} руб.</span> : 'Корзина пуста'}
            {/* содержимое корзины, если isCartMenuVisible true */}
            { isCartMenuVisible ? <CartMenu items={ items } onClick={handleClick}/> : null }
        </div>
    );
};

