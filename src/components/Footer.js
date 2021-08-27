import styled from 'styled-components';
import { useContext, useState, useEffect } from 'react';

import CartContext from '../contexts/CartContext';

export default function Footer() {
    const { meals, drinks, desserts } = useContext(CartContext);
    const [mealSelected, setMealSelected] = useState(false);
    const [drinkSelected, setDrinkSelected] = useState(false);
    const [dessertSelected, setDessertSelected] = useState(false);
    const [finalOrder, setFinalOrder] = useState([]);

    useEffect(() => {
        let order = [];
        setMealSelected(false);
        setDrinkSelected(false);
        setDessertSelected(false);
        meals.forEach(meal => { if(meal.amount > 0) {
            setMealSelected(true);
            order.push(meal);
        }})
        drinks.forEach(drink => {if(drink.amount > 0) {
            setDrinkSelected(true);
            order.push(drink);
        }})
        desserts.forEach(dessert => {if(dessert.amount > 0) {
            setDessertSelected(true);
            order.push(dessert);
        }})
        setFinalOrder(order);
    }, [meals, drinks, desserts]);

    console.log(finalOrder);
    
    function orderProduct() {
        const names = finalOrder.map(m => {
            return m.name;
        })
        alert("Seu pedido: " + names);
    }

    return(
        <FooterBox>
            <Button disabled={!mealSelected || !drinkSelected || !dessertSelected} onClick={() => orderProduct()}>
                {mealSelected && drinkSelected && dessertSelected
                ? <h1>Realizar pedido</h1>
                : <h1>Selecione os 3 itens para fechar o pedido</h1>}
            </Button>
        </FooterBox>
    )
}

const FooterBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 92px;
    position: fixed;
    bottom: 0px;
    background-color: #FFF;
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 61px;
    padding: 0px 40px;
    background-color: ${props => props.disabled ? "#CBCBCB" : "#32B72F"};
    border: none;
    border-radius: 50px;
    cursor: ${props => props.disabled ? "auto" : "pointer"};
    h1 {
        font-family: Roboto;
        font-size: 20px;
        line-height: 23px;
        color: #FFF;
    }
`;