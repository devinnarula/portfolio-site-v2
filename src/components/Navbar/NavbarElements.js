import styled, { keyframes } from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

const fadein = keyframes`
    from { opacity: 0 }
    to { opacity: 100% }
`

export const Nav = styled.nav`
    background: ${props => props.theme.background};
    height: 80px;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    border-bottom: 1px dotted ${props => props.theme.border};
    animation: ${fadein} 3s;
`;

export const NavLeft = styled.div`
    color: ${props => props.theme.maintext};
    justify-self: flex-start;
    width: 20%;
    justify-content: space-between;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
`;

export const NavLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 45px;
    border: 4px solid;
    border-color: ${props => props.theme.bold};
    color: ${props => props.theme.bold};
`

export const LogoLink = styled(LinkS)`
    color: ${props => props.theme.bold};
    font-size: 20px;
    font-weight: 300;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    cursor: pointer;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: ${props => props.theme.link};
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLink = styled(LinkS)`
    color: ${props => props.theme.maintext};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid ${props => props.theme.bold};
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 15px;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavHomeBtn = styled.nav`
    display: flex;
    align-items: center;
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    border: 2px solid ${props => props.theme.link};
    white-space: nowrap;
    padding: 10px 22px;
    color: ${props => props.theme.maintext};
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        border: 2px solid ${props => props.theme.maintext};
    }
`;

export const NavColorBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    width: 200px;
    border-radius: 20px;
    white-space: nowrap;
    padding: 3px 22px;
    border: 2px solid ${props => props.theme.link};
    color: ${props => props.theme.maintext};
    background-color: transparent;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        border: 3px solid ${props => props.theme.bold};
    }

    @media screen and (max-width: 768px) {
        width: 160px;
        font-size: 16px;
    }
`;

export const ColorIcon = styled.div`
    font-size: 40px;
    margin-top: 5px;
    margin-left: 10px;
    
    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;