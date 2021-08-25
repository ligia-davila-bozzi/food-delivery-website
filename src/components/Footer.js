import styled from 'styled-components';
import { useContext } from 'react';

import CartContext from '../contexts/CartContext';

export default function Footer() {
    const { meal, drink, dessert } = useContext(CartContext);
    
    function orderProduct() {
        alert(`Você pediu: ${meal}, ${drink} e ${dessert}`);
    }

    return(
        <FooterBox>
            <Button>
                <h1 onClick={() => orderProduct()}>Selecione os 3 itens para fechar o pedido</h1>
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