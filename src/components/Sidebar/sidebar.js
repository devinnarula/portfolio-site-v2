import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggleOpen}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggleOpen}>
                <Icon onClick={toggleOpen}>
                    <CloseIcon/>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="about" spy={true} smooth={true} offset={-85} duration={500} onClick={toggleOpen}>About</SidebarLink>
                        <SidebarLink to="experience" spy={true} smooth={true} offset={-85} duration={500} onClick={toggleOpen}>Experience</SidebarLink>
                        <SidebarLink to="projects" spy={true} smooth={true} offset={-85} duration={500} onClick={toggleOpen}>Projects</SidebarLink>
                        <SidebarLink to="contact" spy={true} smooth={true} offset={-85} duration={500} onClick={toggleOpen}>Contact</SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                            <SidebarRoute to='/resume'>Resume</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
