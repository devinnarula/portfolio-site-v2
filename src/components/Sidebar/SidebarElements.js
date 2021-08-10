import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.aside`
 position: fixed;
 z-index: 999;
 width: 100%;
 height: 100%;
 background: ${props => props.theme.border};
 display: grid;
 align-items: center;
 top: 0;
 left: 0;
 transition: 0ms.3s ease-in-out;
 opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
 top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: ${props => props.theme.maintext};
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: ${props => props.theme.maintext}
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 40px);
    }
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: ${props => props.theme.maintext};
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.link};
        transition: 0.2s ease-in-out;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    border: 2px solid ${props => props.theme.link};
    white-space: nowrap;
    padding: 16px 64px;
    color: ${props => props.theme.maintext};
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        border: 2px solid #fff;
    }
`;

