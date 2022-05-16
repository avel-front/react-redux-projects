import React from 'react';
import './cart-menu.css'
import {calcTotalPrice} from "../utils";
import {Button} from "../button";
import {CartItem} from "../cart-item";

// меню всплывающей корзины
export const CartMenu = ({ items, onClick }) => {
    return (
        <div className="cart-menu">

                {/* Список покупок */}
            <div className="cart-menu__games-list">
                { items.length > 0 ? items.map(game => <CartItem key={game.title} title={game.title} price={game.price} />) : 'Корзина пуста' }
            </div>

            {/* Цена и оформить заказ, если есть покупки */}
            {
                items.length > 0 ?

                    <div className="cart-menu__arrange">
                        <div className="cart-menu__total-price">
                            <span>Итого:</span>
                            <span>{calcTotalPrice(items)} руб.</span>
                        </div>

                        <Button type="primary" size="m" onClick={ onClick }>
                            Оформить заказ
                        </Button>
                    </div>
                    : null
            }
        </div>
    );
};

