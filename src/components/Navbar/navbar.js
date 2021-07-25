import React from 'react'
import { RiMenu3Fill } from 'react-icons/ri'
import {Nav, NavLogo, NavImg, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLink, NavBtn, NavBtnLink} from './NavbarElements'
import Logo from '../../images/Logo.png'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <NavImg src={Logo} alt="Logo"/>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
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
        </>
    )
}

export default Navbar
