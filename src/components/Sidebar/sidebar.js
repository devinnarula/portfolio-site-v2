import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon/>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="about" spy={true} smooth={true} offset={-85} duration={500} onClick={toggle}>About</SidebarLink>
                        <SidebarLink to="experience" spy={true} smooth={true} offset={-85} duration={500} onClick={toggle}>Experience</SidebarLink>
                        <SidebarLink to="projects" spy={true} smooth={true} offset={-85} duration={500} onClick={toggle}>Projects</SidebarLink>
                        <SidebarLink to="contact" spy={true} smooth={true} offset={-85} duration={500} onClick={toggle}>Contact</SidebarLink>
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
