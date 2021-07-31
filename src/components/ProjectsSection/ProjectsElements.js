import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const ProjectsContainer = styled.div`
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

export const ProjectsText = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const ProjectsTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const ProjectsTitleName = styled.h1`
    font-size: 40px;
    color: ${props => props.theme.bold};
    margin-right: 50px;

    @media screen and (max-width: 768px) {
        font-size: 25px;
        margin-right: 20px;
    }
`;

export const ProjectsSectionLine = styled.hr`
    height: 1px;
    width: 700px;
    opacity: 0.4;

    @media screen and (max-width: 800px) {
        width: 160px;
    }

    @media screen and (max-width: 400px) {
        width: 100px;
    }
`;

export const ProjectsInfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ProjectsSubtitle = styled.h1`
    font-size: 30px;
    color: ${props => props.theme.maintext};
    margin-top: 20px;
    margin-bottom: -5px;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;

export const ProjectsMoreLink = styled(LinkR)`
    margin-top: 50px;
    border-radius: 25px;
    padding: 15px 30px;
    border: 2px solid ${props => props.theme.link};
    color: ${props => props.theme.maintext};
    font-size: 22px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        border: 3px solid ${props => props.theme.bold};
    }

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
`;