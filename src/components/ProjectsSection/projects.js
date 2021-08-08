import React from 'react'
import { ProjectsContainer, ProjectsText, ProjectsTitle, ProjectsTitleName, ProjectsSectionLine, ProjectsInfoContainer, ProjectsSubtitle, ProjectsMoreLink } from './ProjectsElements'
import { ThemeProvider } from 'styled-components'
import { ShapeWorld, Symptobot, LetsDraw, SudokuSolver } from './Data/projectdata'
import FeaturedProjectInfo from './FeaturedProjectsInfo/featured'

const Projects = ({colorScheme, id}) => {
    const featuredProjects = [ShapeWorld, Symptobot, LetsDraw, SudokuSolver]
    return (
        <ThemeProvider theme={colorScheme}>
            <ProjectsContainer id={id}>
                <ProjectsText>
                    <ProjectsTitle>
                        <ProjectsTitleName>Projects</ProjectsTitleName><ProjectsSectionLine/>
                    </ProjectsTitle>
                </ProjectsText>
                <ProjectsInfoContainer>
                    <ProjectsSubtitle>Featured Projects</ProjectsSubtitle>
                        {featuredProjects.map((p) => (
                            <FeaturedProjectInfo colorScheme={colorScheme} {...p}/>
                        ))}
                    <ProjectsMoreLink to='/projects'>More Projects</ProjectsMoreLink>
                </ProjectsInfoContainer>
            </ProjectsContainer>
        </ThemeProvider>
    )
}

export default Projects
