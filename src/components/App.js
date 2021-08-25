import styled from 'styled-components';
import { useState }  from 'react';

import Header from './Header.js';
import Catalog from './Catalog.js';
import Footer from './Footer.js';
import CartContext from '../contexts/CartContext';

export default function App() {
    const [meal, setMeal] = useState("");
    const [drink, setDrink] = useState("");
    const [dessert, setDessert] = useState("");

    return (
        <CartContext.Provider value={{ meal, drink, dessert, setMeal, setDrink, setDessert }}>
            <Body>
                <Header/>
                <Catalog/>
                <Footer/>
            </Body>
        </CartContext.Provider>
    )
}

const Body = styled.div`
    display: flex;
    flex-direction: column;
`;