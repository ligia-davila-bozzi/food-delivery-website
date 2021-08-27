import styled from 'styled-components';
import { useContext } from 'react';

import CartContext from '../contexts/CartContext';

export default function Footer() {
    const { meals, drinks, desserts } = useContext(CartContext);
    
    function orderProduct() {
        // generates order
        let selectedItems = [];
        meals.forEach(meal => {if(meal.amount > 0) selectedItems.push(meal)})
        drinks.forEach(drink => {if(drink.amount > 0) selectedItems.push(drink)})
        desserts.forEach(dessert => {if(dessert.amount > 0) selectedItems.push(dessert)})
        console.log(selectedItems);
    }

    return(
        <FooterBox>
            <Button disabled={true} onClick={() => orderProduct()}>
                <h1>Selecione os 3 itens para fechar o pedido</h1>
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
    background-color: #CBCBCB;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    h1 {
        font-family: Roboto;
        font-size: 20px;
        line-height: 23px;
        color: #FFF;
    }
`;