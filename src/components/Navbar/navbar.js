import React from 'react'
import { RiMenu3Fill } from 'react-icons/ri'
import { IoColorPalette } from 'react-icons/io5'
import {Nav, NavLeft, NavLogo, LogoLink, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLink, NavBtn, NavBtnLink, NavColorBtn, ColorIcon} from './NavbarElements'
import Logo from '../../images/Logo.png'
import { ThemeProvider } from 'styled-components'

const Navbar = ({colorScheme, toggleOpen, toggleColor}) => {
    return (
        <>
        <ThemeProvider theme={colorScheme}>
            <Nav>
                <NavbarContainer>
                    <NavLeft>
                        <NavLogo>
                            <LogoLink to='/' spy={true} smooth={true} offset={-85} duration={500}>DN</LogoLink>
                        </NavLogo>
                        <NavColorBtn onClick={toggleColor}>
                        Switch Colors
                        <ColorIcon>
                            <IoColorPalette/>
                        </ColorIcon>
                    </NavColorBtn>
                    </NavLeft>
                    <MobileIcon onClick={toggleOpen}>
                        <RiMenu3Fill />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="about" spy={true} smooth={true} offset={-85} duration={500}>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="experience" spy={true} smooth={true} offset={-85} duration={500}>Experience</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="projects" spy={true} smooth={true} offset={-85} duration={500}>Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="contact" spy={true} smooth={true} offset={-85} duration={500}>Contact</NavLink>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to={{pathname: 'https://drive.google.com/file/d/1gnTbWk2aFYIm_Yx72NZksM1M-a-pd-rL/view?usp=sharing'}} target='_blank'>Resume</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </ThemeProvider>
        </>
    )
}

export default Navbar
