import React from 'react'
import { ProjectsContainer, ProjectsText, ProjectsTitle, ProjectsTitleName, ProjectsSectionLine } from './ProjectsElements'
import { ThemeProvider } from 'styled-components'

const Projects = ({colorScheme, id}) => {
    return (
        <ThemeProvider theme={colorScheme}>
            <ProjectsContainer id={id}>
                <ProjectsText>
                    <ProjectsTitle>
                        <ProjectsTitleName>Projects</ProjectsTitleName><ProjectsSectionLine/>
                    </ProjectsTitle>
                </ProjectsText>
            </ProjectsContainer>
        </ThemeProvider>
    )
}

export default Projects
