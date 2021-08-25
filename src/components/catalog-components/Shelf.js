import styled from 'styled-components';

export default function Shelf(props) {
    const { title, items, setItems } = props;
    function addOne(index) {
        console.log("Aôba");
        console.log(items[index].amount);
        let newArray = items.slice();
        newArray[index].amount += 1;
        setItems(newArray);
    }
    console.log(items);
    return(
        <ShelfBox>
            <Title>{title}</Title>
            <Items>
                {items.map((i, index) => (
                    <Item key={index} selected={i.amount > 0 ? true : false} onClick={() => {addOne(index)}}>
                        <img alt="" src={i.img}></img>
                        <Name>{i.name}</Name>
                        <Info>{i.info}</Info>
                        <Price>{i.price}</Price>
                    </Item>
                ))}
            </Items>
        </ShelfBox>
    )
}

const ShelfBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 265px;
    margin-top: 30px;
`;

const Title = styled.h1`
    font-family: Righteous;
    font-size: 26px;
    line-height: 32px;
    color: #333;
    margin-bottom: 17px;
    margin-left: 19px;
`;

const Items = styled.div`
    display: flex;
    overflow-x: scroll;
    scrollbar-width: none;
    div:first-child {
        margin-left: 19px;
    }
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 172px;
    height: 202px;
    background-color: #FFF;
    margin-right: 16px;
    padding-top: 18px;
    border-radius: 9px;
    box-shadow: ${props => props.selected ? "0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F" : "none"};
    img {
        width: 144px;
        height: 87px;
        border-radius: 4px;
        margin-bottom: 8px;
    }
`;

const Name = styled.div`
    width: 144px;
    font-family: Roboto;
    font-size: 16px;
    line-height: 19px;
    color: #333;
    margin-bottom: 4px;
`;

const Info = styled.div`
    width: 144px;
    font-family: Roboto;
    font-size: 15px;
    line-height: 18px;
    color: #A6A6A6;
    margin-bottom: 4px;
`;

const Price = styled.div`
    width: 144px;
    font-family: Roboto;
    font-size: 16px;
    line-height: 19px;
    color: #000;
`;