import styled from 'styled-components'

export const ContactContainer = styled.div`
    background: #1f2833;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    position: relative;
    z-index: 1;
    margin-bottom: 15%;
`;

export const ContactText = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const ContactTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const ContactTitleName = styled.h1`
    font-size: 40px;
    color: #66fcf1;
    margin-left: 50px;

    @media screen and (max-width: 768px) {
        font-size: 25px;
        margin-left: 20px;
    }
`;

export const ContactSectionLine = styled.hr`
    height: 1px;
    width: 700px;
    opacity: 0.4;

    @media screen and (max-width: 768px) {
        width: 160px;
    }
`;