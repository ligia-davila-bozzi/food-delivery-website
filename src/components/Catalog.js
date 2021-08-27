import styled from 'styled-components';
import { useContext } from 'react';

import Shelf from "./catalog-components/Shelf";
import CartContext from "../contexts/CartContext";

import React from 'react';

export default function Catalog() {
    const { meals, setMeals, drinks, setDrinks, desserts, setDesserts } = useContext(CartContext);

    return(
        <CatalogBox>
            <Shelf title={"Primeiro, seu prato"} items={meals} setItems={setMeals} />
            <Shelf title={"Agora, sua bebida"} items={drinks} setItems={setDrinks} />
            <Shelf title={"Por fim, sua sobremesa"} items={desserts} setItems={setDesserts} />
        </CatalogBox>
    )
}

const CatalogBox = styled.div`
    margin-top: 92px;
    width: 100vw;
    height: calc(100vh - 184px);
    background-color: #E5E5E5;
    overflow: scroll;
    scrollbar-width: none;
`;