import React from 'react'
import { RiMenu3Fill } from 'react-icons/ri'
import {Nav, NavLogo, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLink, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        Devin
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <RiMenu3Fill />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="experience">Experience</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="projects">Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="contact">Contact</NavLink>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to='/resume'>Resume</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
