import { useState } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    justify-content: center;
    align-items: center;
    transform: translateY(40vh);
`
const NormalContainer = styled.div`
    display: flex;
    flex-direction: unset;
`
const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Container = styled.div`
    background-color: #d8d8d8;
	border-radius: 20px;
	position: relative;
	margin: 15px 0;
	height: 30px;
	width: 400px;
`
const ContainerProgress = styled.div`
    background: linear-gradient(to left, #02A95C, #02A95C);
	box-shadow: 0 3px 3px -5px #02A95C, 0 2px 5px #02A95C;
	border-radius: 20px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 0;
	opacity: 0;
	transition: 1s ease 0.3s;
`
const Title = styled.strong`
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
`
const Desc = styled.p`
    font-weight: 300;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    color: #919191;
    margin: auto 10px;
`
const Span = styled.span`
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    margin: auto 10px;
`


export interface params {
    quantity:string,
    goal:string,
    donations?:string,
    style?: React.CSSProperties | undefined,
}

const App = (params: params):JSX.Element => {
    const [style, setStyle] = useState({});
    const title = (100 * parseFloat(params.quantity))/(parseFloat(params.goal))

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${title}%`,
        }
        setStyle(newStyle);
    }, 1000)
    return (
        <MainContainer style={params.style}>
            <TitleContainer>
                <Title>${params.quantity}</Title>
                <Desc>{`raised of $${params.goal} goal`}</Desc>
            </TitleContainer>
            <NormalContainer>
                <Container>
                    <ContainerProgress style={style}>
                        {title}%
                    </ContainerProgress>
                </Container>
            </NormalContainer>
            <Desc>{params.donations}</Desc>
        </MainContainer>
    )
}
export default App;