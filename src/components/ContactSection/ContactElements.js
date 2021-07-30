import styled from 'styled-components'

export const ContactContainer = styled.div`
    background: ${props => props.theme.background};
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    position: relative;
    z-index: 1;
    padding-bottom: 20%;
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
    color: ${props => props.theme.bold};
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

export const ContactPrompt = styled.p`
    align-self: center;
    color: ${props => props.theme.maintext};
    font-size: 20px;
    text-align: center;
    max-width: 680px;
    margin-top: 30px;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`;

export const ContactForm = styled.form`
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    width: 100%;
`;

export const ContactCaption = styled.caption`
    color: ${props => props.theme.bold};
    font-size: 20px;
    margin-bottom: 5px;
`;

export const ContactSubject = styled.input`
    width: 35%;
    height: 30px;
    margin-bottom: 10px;
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    background: ${props => props.theme.maintext};
    padding: 5px;

    &:focus {
        outline: 0;
    }

    @media screen and (max-width: 768px) {
        width: 85%
    }
`;

export const ContactMessage = styled.textarea`
    width: 55%;
    height: 200px;
    margin-bottom: 10px;
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    padding: 5px;
    background: ${props => props.theme.maintext};;

    &:focus {
        outline: 0;
    }

    @media screen and (max-width: 768px) {
        width: 90%
    }
`;

export const EmailButton = styled.a`
    border-radius: 50px;
    border: 2px solid ${props => props.theme.link};
    white-space: nowrap;
    padding: 10px 22px;
    color: ${props => props.theme.maintext};
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-top: 10px;

    &:hover {
        transition: all 0.2s ease-in-out;
        border: 3px solid ${props => props.theme.bold};
    }

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;