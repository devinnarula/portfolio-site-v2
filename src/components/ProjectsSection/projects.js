import React from 'react'
import { ProjectsContainer, ProjectsText, ProjectsTitle, ProjectsTitleName, ProjectsSectionLine, ProjectsInfoContainer, ProjectsSubtitle, ProjectsMoreLink } from './ProjectsElements'
import { ThemeProvider } from 'styled-components'
import { ShapeWorld, Symptobot, LetsDraw, PortfolioV1, PortfolioV2, Puddle, ZigZagDodge, AlexaCanvas, Thesis, SwarmRobotics } from './Data/projectdata'
import FeaturedProjectInfo from './FeaturedProjectsInfo/featured'
import OtherProjectInfo from './OtherProjectsInfo/other'

const Projects = ({colorScheme, id}) => {
    const featuredProjects = [ShapeWorld, Symptobot, LetsDraw, PortfolioV1]
    const otherProjects = [PortfolioV2, Puddle, ZigZagDodge, AlexaCanvas, Thesis, SwarmRobotics]
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
