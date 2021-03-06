import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const FeaturedProjectContainer = styled.div`
    background: none;
    border: 2px solid;
    border-color: ${props => props.theme.bold};
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 20px 30px;
    width: 800px;
    margin-top: 30px;
    margin-bottom: 30px;

    @media screen and (max-width: 800px) {
        width: 90%;
        flex-direction: column;
    }
`;

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;

    @media screen and (max-width: 800px) {
        align-items: center;
        width: 100%;
    }
`;

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

export const FeaturedTitle = styled.h1`
    font-size: 35px;
    color: #fff;
    margin-bottom: 10px;

    @media screen and (max-width: 800px) {
        font-size: 25px;
        margin-top: 20px;
    }
`;

export const FeaturedImg = styled.img`
    height: 300px;
    max-width: 80%;
    border-radius: 20%;

    @media screen and (max-width: 800px) {
        width: 80%;
        height: auto;
    }
`;

export const FeaturedDescription = styled.p`
    font-size: 20px;
    color: ${props => props.theme.maintext};
    white-space: pre-wrap;

    @media screen and (max-width: 800px) {
        font-size: 15px;
    }
`;

export const FeaturedSkills = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
`;

export const FeaturedSkill = styled.h1`
    font-size: 18px;
    color: ${props => props.theme.maintext};
    opacity: 0.8;
    margin-right: 20px;
    margin-top: 15px;

    @media screen and (max-width: 800px) {
        font-size: 14px;
    }
`;


export const FeaturedButtons = styled.div`
    display: flex;
    margin-top: 20px;
`;

export const FeaturedLink = styled(LinkR)`
    font-size: 35px;
    color: ${props => props.theme.maintext};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        color: ${props => props.theme.link};
    }

    @media screen and (max-width: 768px) {
        font-size: 25px;
    }
`;

export const LinkIcon = styled.div`
    margin-right: 20px;
    
    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;