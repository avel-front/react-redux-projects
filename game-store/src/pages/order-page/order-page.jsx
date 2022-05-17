import React from 'react';
import './order-page.css'
import {useSelector} from "react-redux";
import {OrderItem} from "../../components/order-item";
import {calcTotalPrice} from "../../components/utils";
import {Button} from "../../components/button";


export const OrderPage = ({onClick}) => {
    // получить доступ к корзине
    const items = useSelector(state => state.cart.itemsInCart)
    // проверка на пустую корзину
    if (items.length === 0) {
        return <h1>Корзина пуста</h1>
    }

    return (
        <div className="order-page">

            <div className="order-page__list">
                {items.map(game => <OrderItem key={game.id} game={game}/>)}
            </div>

            <div className="order-page__total">
                <div className="order-page__total-price">
                    <span>
                         {items.length} товаров на сумму {calcTotalPrice(items)} руб.
                    </span>
                </div>
        </div>
            <Button
                onClick={onClick}
                size="m"
                type="primary"
            >
                Перейти к оплате
            </Button>
        </div>
    );
};

