import styled, { keyframes } from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const StartContainer = styled.div`
    background: ${props => props.theme.background};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    width: 100%;
    position: relative;
    z-index: 1;
    padding-bottom: 15%;
`;

export const StartText = styled.div`
    display: flex;
    justify-content: center;
    height: 600px;
    width: 60%;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        width: 100%;
        height: 50%;
    }
`;

export const StartImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    width: 40%;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        align-self: center;
        width: 100%;
        height: 50%;
    }
`;

export const StartTitleContainer = styled.div`
    align-self: flex-start;
    display: flex;
    flex-direction: column;
`;

const fadein = keyframes`
    0% { opacity: 0 }
    50% { opacity: 0 }
    100% { opacity: 100% }
`

export const StartTitleGreeting = styled.h1`
    color: ${props => props.theme.maintext};
    font-size: 48px;
    text-align: center;
    animation: ${fadein} 4s;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const WhiteWord = styled.span`
    color: #fff;
`;

export const BlueWord = styled.span`
    color: ${props => props.theme.bold};
`;

const fadein2 = keyframes`
    0% { opacity: 0 }
    67% { opacity: 0 }
    100% { opacity: 100% }
`

export const StartSubTitle = styled.h1`
    align-self: flex-start;
    color: ${props => props.theme.maintext};
    font-size: 44px;
    text-align: center;
    animation: 3.5s;
    animation: ${fadein2} 6s;

    @media screen and (max-width: 768px) {
        font-size: 36px;
    }

    @media screen and (max-width: 480px) {
        font-size: 28px;
    }
`;

const fadein3 = keyframes`
    0% { opacity: 0 }
    75% { opacity: 0 }
    100% { opacity: 100% }
`

export const StartSummary = styled.p`
    align-self: flex-start;
    color: ${props => props.theme.maintext};
    font-size: 20px;
    text-align: start;
    max-width: 680px;
    animation: ${fadein3} 8s;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`;

export const StartImg = styled.img`
    width: 75%;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.bold};
    animation: ${fadein3} 8s;

    @media screen and (max-width: 800px) {
        height: 75%;
        margin: 10px;
    }
`;

export const StartLinks = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;
    flex-wrap: wrap;
    animation: ${fadein3} 8s;
`;

export const StartLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    width: 170px;
    border-radius: 20px;
    white-space: nowrap;
    padding: 3px 22px;
    border: 2px solid ${props => props.theme.link};
    color: ${props => props.theme.maintext};
    font-size: 18px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        border: 3px solid ${props => props.theme.bold};
    }

    @media screen and (max-width: 768px) {
        width: 140px;
        font-size: 16px;
    }
`;

export const MediaIcon = styled.div`
    font-size: 40px;
    margin-top: 5px;
    margin-right: 10px;
    
    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;