import styled from 'styled-components';
import { useState }  from 'react';

import Header from './Header.js';
import Catalog from './Catalog.js';
import Footer from './Footer.js';
import CartContext from '../contexts/CartContext';

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
        { name: "Prato Executivo", info: "Deliciosa refeição balanceada", img: pratoExec , price: "R$18,99", amount: 0 },
        { name: "Feijoada Caseira", info: "Clássica feijoada brasileira", img: feijoada , price: "R$21,99", amount: 0 },
        { name: "Risoto Vegetariano", info: "Saboroso risoto de alho-poró", img: risotoVeg , price: "R$20,99", amount: 0 }
    ]);
    const [drinks, setDrinks] = useState([
        { name: "Água Mineral", info: "Garrafa de água mineral sem gás", img: aguaMin , price: "R$2,50", amount: 0 },
        { name: "Coca-Cola", info: "Lata de coca-cola bem geladinha", img: cocaCola , price: "R$4,50", amount: 0 },
        { name: "Suco Natural", info: "Copo grande do suco natural do dia", img: sucoNat , price: "R$5,50", amount: 0 }
    ]);
    const [desserts, setDesserts] = useState([
        { name: "Pudim de Leite", info: "Pudim de leite suave e cremoso", img: pudim , price: "R$5,99", amount: 0 },
        { name: "Petit Gâteau", info: "Petit gateau com sorvete de creme", img: petitGateau , price: "R$7,99", amount: 0 },
        { name: "Salada de Frutas", info: "Revigorante salada de frutas frescas", img: saladaFrut , price: "R$4,99", amount: 0 }
    ]);

    return (
        <CartContext.Provider value={{ meals, setMeals, drinks, setDrinks, desserts, setDesserts }}>
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