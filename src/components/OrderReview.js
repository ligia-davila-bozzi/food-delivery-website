import styled from 'styled-components';
import { useContext } from 'react';

import CartContext from '../contexts/CartContext'

// FALTA RECEBER O TOTAL, CRIAR O LINK PELO FOOTER E IMPLEMENTAR BOTAO DE FINALIZAÇÃO

export default function OrderReview(props) {
    const { meals, drinks, desserts } = useContext(CartContext);
    let orderedMeals = [];
    let orderedDrinks = [];
    let orderedDesserts = [];
    meals.forEach(meal => {if (meal.amount > 0) orderedMeals.push(meal)});
    drinks.forEach(drink => {if (drink.amount > 0) orderedDrinks.push(drink)});
    desserts.forEach(dessert => {if (dessert.amount > 0) orderedDesserts.push(dessert)});
    return(
        <OrderReviewBox>
            <Title>Revise seu pedido</Title>
            <OrderInfo>
                {orderedMeals.map((meal, index) => (
                    <ItemsInfo key={index}>
                        <h1>{meal.name} (x{meal.amount})</h1>
                        <h1>R${meal.price * meal.amount}</h1>
                    </ItemsInfo>
                ))}
                {orderedDrinks.map((drink, index) => (
                    <ItemsInfo key={index}>
                        <h1>{drink.name} (x{drink.amount})</h1>
                        <h1>R${drink.price * drink.amount}</h1>
                    </ItemsInfo>
                ))}
                {orderedDesserts.map((dessert, index) => (
                    <ItemsInfo key={index}>
                        <h1>{dessert.name} (x{dessert.amount})</h1>
                        <h1>R${dessert.price * dessert.amount}</h1>
                    </ItemsInfo>
                ))}
                <Total>
                <h1>TOTAL</h1>
            </Total>
            </OrderInfo>
        </OrderReviewBox>
    )
}

const OrderReviewBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: calc(100% - 92px);
    margin-top: 92px;
    background-color: #E5E5E5;
`;

const Title = styled.h1`
    font-family: Righteous;
    font-size: 26px;
    line-height: 32px;
    color: #333;
    margin-top: 30px;
    margin-bottom: 17px;
    margin-left: 19px;
`;

const OrderInfo = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
    border-radius: 9px;
    width: calc(100vw - 34px);
    margin-right: 17px;
    margin-left: 17px;
    padding-top: 30px;
    padding-bottom: 24px;
    padding-left: 25px;
    padding-right: 25px;
`;

const ItemsInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 13px;
    h1 {
        font-family: Roboto;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
`;

const Total = styled.div`
display: flex;
justify-content: space-between;
h1 {
    font-family: Roboto;
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
    color: #333333;
}
`;