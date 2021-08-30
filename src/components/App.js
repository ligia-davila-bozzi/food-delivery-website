import styled from 'styled-components';
import { useState }  from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Header.js';
import Catalog from './Catalog.js';
import Footer from './Footer.js';
import CartContext from '../contexts/CartContext';
import OrderReview from './OrderReview';

//meals
import pratoExec from "../imgs/prato-executivo.jpg";
import feijoada from "../imgs/feijoada.webp"
import risotoVeg from "../imgs/risoto-alho-poro.jpg";
//drinks
import aguaMin from "../imgs/agua-mineral.jpg";
import cocaCola from "../imgs/coca-cola.jpg"
import sucoNat from "../imgs/suco-natural.jpg";
//desserts
import pudim from "../imgs/pudim-de-leite.jpg";
import petitGateau from "../imgs/petit-gateau.webp"
import saladaFrut from "../imgs/salada-de-frutas.jpg";

export default function App() {
    const [meals, setMeals] = useState([
        { name: "Prato Executivo", info: "Deliciosa refeição balanceada", img: pratoExec , price: 18.99, amount: 0, category: "meal" },
        { name: "Feijoada Caseira", info: "Clássica feijoada brasileira", img: feijoada , price: 21.99, amount: 0, category: "meal" },
        { name: "Risoto Vegetariano", info: "Saboroso risoto de alho-poró", img: risotoVeg , price: 20.99, amount: 0, category: "meal" }
    ]);
    const [drinks, setDrinks] = useState([
        { name: "Água Mineral", info: "Garrafa de água mineral sem gás", img: aguaMin , price: 2.50, amount: 0, category: "drink" },
        { name: "Coca-Cola", info: "Lata de coca-cola bem geladinha", img: cocaCola , price: 4.50, amount: 0, category: "drink" },
        { name: "Suco Natural", info: "Copo grande do suco natural do dia", img: sucoNat , price: 5.50, amount: 0, category: "drink" }
    ]);
    const [desserts, setDesserts] = useState([
        { name: "Pudim de Leite", info: "Pudim de leite suave e cremoso", img: pudim , price: 5.99, amount: 0, category: "dessert" },
        { name: "Petit Gâteau", info: "Petit gateau com sorvete de creme", img: petitGateau , price: 7.99, amount: 0, category: "dessert" },
        { name: "Salada de Frutas", info: "Revigorante salada de frutas frescas", img: saladaFrut , price: 4.99, amount: 0, category: "dessert" }
    ]);
    const [orderURL, setOrderURL] = useState("");

    return (
        <CartContext.Provider value={{ meals, setMeals, drinks, setDrinks, desserts, setDesserts, orderURL, setOrderURL }}>
            <BrowserRouter>
                <Body>
                    <Header/>
                    <Switch>
                        <Route path="/" exact>
                            <Catalog/>
                            <Footer/>
                        </Route>
                        <Route path="/review-order" exact>
                            <OrderReview/>
                        </Route>
                    </Switch>
                </Body>
            </BrowserRouter>
        </CartContext.Provider>
    )
}

const Body = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;