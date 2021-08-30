import styled from 'styled-components';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import CartContext from '../contexts/CartContext'

// IMPLEMENTAR BOTAO DE CANCELAR

export default function OrderReview() {
    const { meals, drinks, desserts, orderURL } = useContext(CartContext);
    let orderedMeals = [];
    let orderedDrinks = [];
    let orderedDesserts = [];
    let total = 0;
    const history = useHistory();

    meals.forEach(meal => {if (meal.amount > 0) {
        orderedMeals.push(meal);
        total += (meal.price * meal.amount);
    }});
    drinks.forEach(drink => {if (drink.amount > 0) {
        orderedDrinks.push(drink);
        total += (drink.price * drink.amount);
    }});
    desserts.forEach(dessert => {if (dessert.amount > 0) {
        orderedDesserts.push(dessert);
        total += (dessert.price * dessert.amount);
    }});

    function openInNewTab(url) {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if(newWindow) {newWindow.opener = null}
    }

    function finishOrder() {
        openInNewTab(orderURL);
        alert("Pedido realizado com sucesso!");
        meals.forEach(meal => {meal.amount = 0});
        drinks.forEach(drink => {drink.amount = 0});
        desserts.forEach(dessert => {dessert.amount = 0});
        history.push('/');
    }

    return(
        <OrderReviewBox>
            <Title>Revise seu pedido</Title>
            <OrderInfo>
                {orderedMeals.map((meal, index) => (
                    <ItemsInfo key={index}>
                        <h1>{meal.name} (x{meal.amount})</h1>
                        <h1>R${(meal.price * meal.amount).toFixed(2)}</h1>
                    </ItemsInfo>
                ))}
                {orderedDrinks.map((drink, index) => (
                    <ItemsInfo key={index}>
                        <h1>{drink.name} (x{drink.amount})</h1>
                        <h1>R${(drink.price * drink.amount).toFixed(2)}</h1>
                    </ItemsInfo>
                ))}
                {orderedDesserts.map((dessert, index) => (
                    <ItemsInfo key={index}>
                        <h1>{dessert.name} (x{dessert.amount})</h1>
                        <h1>R${(dessert.price * dessert.amount).toFixed(2)}</h1>
                    </ItemsInfo>
                ))}
                <Total>
                <h1>TOTAL</h1>
                <h1>R$ {total.toFixed(2)}</h1>
            </Total>
            </OrderInfo>
            <Button onClick={() => finishOrder()}>Tudo certo, pode pedir!</Button>
            <Link to='/' style={{ textDecoration: 'none' }}><h2>Cancelar</h2></Link>
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
    overflow: scroll;
    > * {
        h2 { 
            color: #777777;
            font-family: Roboto;
            font-weight: bold;
            font-size: 20px;
            line-height: 23px;
            text-align: center;
            margin-bottom: 30px;
        }
    }
`;

const Button = styled.button`
    min-height: 52px;
    width: calc(100vw - 80px);
    margin: 30px auto 30px auto;
    cursor: pointer;
    background: #50D074;
    :hover {
        background: #91e2a8;
    }
    border: none;
    border-radius: 100px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
    color: #FFFFFF;
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