import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'
import { ThemeProvider } from 'styled-components'

const Sidebar = ({colorScheme, isOpen, toggleOpen}) => {
    return (
        <>
            <ThemeProvider theme={colorScheme}>
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
                                <SidebarRoute to={{pathname: 'https://drive.google.com/file/d/1gnTbWk2aFYIm_Yx72NZksM1M-a-pd-rL/view?usp=sharing'}} target='_blank'>Resume</SidebarRoute>
                        </SideBtnWrap>
                    </SidebarWrapper>
                </SidebarContainer>
            </ThemeProvider>
        </>
    )
}

export default Sidebar
