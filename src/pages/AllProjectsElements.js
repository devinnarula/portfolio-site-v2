import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const AllProjectsContainer = styled.div`
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

export const ProjectsTitle = styled.h1`
    font-size: 50px;
    color: ${props => props.theme.maintext};
    margin-top: 30px;

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`;

export const ProjectsHomeLink = styled(LinkR)`
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