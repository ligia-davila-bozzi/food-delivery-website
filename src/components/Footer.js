import styled from 'styled-components';
import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import CartContext from '../contexts/CartContext';

export default function Footer() {
    const { meals, drinks, desserts, setOrderURL } = useContext(CartContext);
    const [finalMeals, setFinalMeals] = useState("");
    const [finalDrinks, setFinalDrinks] = useState("");
    const [finalDesserts, setFinalDesserts] = useState("");
    const [finalPrice, setFinalPrice] = useState(0);
    const history = useHistory();

    useEffect(() => {
        let selectedMeals = "";
        let selectedDrinks = "";
        let selectedDesserts = "";
        let subtotal = 0;

        meals.forEach(meal => { if(meal.amount > 0) {
            selectedMeals += ` ${meal.name} (${meal.amount}x)`;
            subtotal += (meal.price * meal.amount);
        }})
        drinks.forEach(drink => {if(drink.amount > 0) {
            selectedDrinks += ` ${drink.name} (${drink.amount}x) `;
            subtotal += (drink.price * drink.amount);
        }})
        desserts.forEach(dessert => {if(dessert.amount > 0) {
            selectedDesserts += ` ${dessert.name} (${dessert.amount}x) `;
            subtotal += (dessert.price * dessert.amount);
        }})
        
        setFinalMeals(selectedMeals);
        setFinalDrinks(selectedDrinks);
        setFinalDesserts(selectedDesserts);
        setFinalPrice(subtotal);
    }, [meals, drinks, desserts]);

    useEffect(() => {
        const orderText = `Olá, gostaria de fazer o pedido:\n- Prato(s):${finalMeals}\n- Bebida(s):${finalDrinks}\n- Sobremesa(s):${finalDesserts}\nTotal: R$ ${finalPrice.toFixed(2)}`;
        const encodedURL = `https://wa.me/5522999790099?text=${encodeURIComponent(orderText)}`;
        setOrderURL(encodedURL);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [finalPrice]);
    
    function orderProduct() {history.push('/review-order')}

    return(
        <FooterBox>
            <Button disabled={finalMeals === "" || finalDrinks === "" || finalDesserts === ""} onClick={() => orderProduct()}>
                {finalMeals === "" || finalDrinks === "" || finalDesserts === ""
                ? <h1>Selecione os 3 itens para fechar o pedido</h1>
                : <h1>Finalizar pedido</h1>}
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