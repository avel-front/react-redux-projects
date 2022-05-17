import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button} from "../button";
import './game-buy.css'
import {deleteItemFromCart, setItemInCart} from "../../redux/cart/reducer";

// нижняя часть карточки - покупка

export const GameBuy = ({ game }) => {

    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);
    const isItemInCart = items.some(item => item.id === game.id);

    // Добавить или удалить из [] itemsInCart
    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInCart) {
            dispatch(deleteItemFromCart(game.id));
        } else {
            dispatch(setItemInCart(game));
        }
    };

    return (
        <div className="game-buy">
            <span className="game-buy__price">{game.price} руб.</span>

            <Button
                onClick={handleClick}
                type={isItemInCart ? 'secondary' : 'primary'}
            >
                {isItemInCart ? 'Убрать из корзины' : 'В корзину'}
            </Button>
        </div>
    );
};



