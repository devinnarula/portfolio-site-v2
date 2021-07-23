import styled from 'styled-components'

export const StartContainer = styled.div`
    background: #1f2833;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 600px;
    width: 100%;
    position: relative;
    z-index: 1;
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

export const StartTitleGreeting = styled.h1`
    color: #c5c6c7;
    font-size: 48px;
    text-align: center;
    margin-right: 12px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const StartTitleName = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const StartSubTitle = styled.h1`
    align-self: flex-start;
    color: #c5c6c7;
    font-size: 44px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 36px;
    }

    @media screen and (max-width: 480px) {
        font-size: 28px;
    }
`;

export const StartSummary = styled.p`
    align-self: flex-start;
    color: #c5c6c7;
    font-size: 20px;
    text-align: start;
    max-width: 680px;

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

    @media screen and (max-width: 800px) {
        height: 75%;
        width: auto;
    }
`;