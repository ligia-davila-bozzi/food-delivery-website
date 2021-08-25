import styled from 'styled-components';

export default function Header() {
    return(
        <HeaderBox>
            <Heading>Foodcamp</Heading>
            <Subheading>Sua comida em 6 minutos</Subheading>
        </HeaderBox>
    )
}

const HeaderBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 92px;
    position: fixed;
    top: 0px;
    background-color: #CF2B2B;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 8px 21px;
`;

const Heading = styled.h1`
    font-family: Righteous;
    font-size: 44px;
    line-height: 55px;
    color: #FFF;
`;

const Subheading = styled.h1`
    font-family: Roboto;
    font-size: 18px;
    line-height: 21px;
    color: #FFF;
`;