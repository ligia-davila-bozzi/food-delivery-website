import styled from 'styled-components';

export default function Shelf(props) {
    const { title, items, setItems } = props;

    function addFirst(index) {
        if(items[index].amount === 0) {
            let newArray = [...items];
            newArray[index].amount += 1;
            setItems([...newArray]);
        }
    }
    
    function addOne(index) {
        let newArray = [...items];
        newArray[index].amount += 1;
        setItems([...newArray]);
    }

    function removeOne(index) {
        let newArray = [...items];
        newArray[index].amount -= 1;
        setItems([...newArray]);
    }

    return(
        <ShelfBox>
            <Title>{title}</Title>
            <Items>
                {items.map((i, index) => (
                    <Item key={index} selected={i.amount > 0 ? true : false}>
                        <img alt="" src={i.img}></img>
                        <Name>{i.name}</Name>
                        <Info>{i.info}</Info>
                        <Price>{i.price}</Price>
                        {i.amount > 0 &&
                            <Counter>
                                <button onClick={() => removeOne(index)}>-</button>
                                <Amount>{i.amount}</Amount>
                                <button onClick={() => addOne(index)}>+</button>
                            </Counter>
                        }
                        {i.amount === 0 &&
                            <TriggerCount onClick={() => {addFirst(index)}}></TriggerCount>
                        }
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
    position: relative;
    box-shadow: ${props => props.selected ? "0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F" : "none"};
    img {
        width: 144px;
        height: 87px;
        border-radius: 4px;
        margin-bottom: 8px;
    }
`;

const TriggerCount = styled.div`
    min-width: 172px;
    min-height: 202px;
    background: none;
    border-radius: 9px;
    position: absolute;
    top: 0px;
    cursor: pointer;
    z-index: 3;
`;

const Name = styled.div`
    width: 144px;
    font-family: Roboto;
    font-size: 16px;
    line-height: 19px;
    color: #333;
    margin-bottom: 2px;
`;

const Info = styled.div`
    width: 144px;
    font-family: Roboto;
    font-size: 15px;
    line-height: 18px;
    color: #A6A6A6;
    margin-bottom: 2px;
`;

const Price = styled.div`
    width: 144px;
    font-family: Roboto;
    font-size: 16px;
    line-height: 19px;
    color: #000;
`;

const Counter = styled.div`
    display: flex;
    justify-content: space-between;
    width: 47px;
    height: 19px;
    position: absolute;
    right: 11px;
    bottom: 10px;
    button:first-child {
        background: none;
        border: none;
        color: #CF2B2B;
        cursor: pointer;
    }
    button:last-child {
        background: none;
        border: none;
        color: #32B72F;
        cursor: pointer;
    }
`;

const Amount = styled.h1`
    font-family: Roboto;
    font-size: 16px;
    line-height: 19px;
`;