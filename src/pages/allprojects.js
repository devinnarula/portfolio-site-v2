import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AllProjectsContainer, ProjectsTitle, ProjectsHomeLink } from './AllProjectsElements'
import FeaturedProjectInfo from '../components/ProjectsSection/FeaturedProjectsInfo/featured'
import { ShapeWorld, Symptobot, LetsDraw, SudokuSolver, PortfolioV1, PortfolioV2, Puddle, ZigZagDodge, AlexaCanvas, Thesis, SwarmRobotics } from '../components/ProjectsSection/Data/projectdata'

const AllProjects = ({colorScheme}) => {
    const projects = [ShapeWorld, Symptobot, LetsDraw, SudokuSolver, PortfolioV1, PortfolioV2, Puddle, ZigZagDodge, AlexaCanvas, Thesis, SwarmRobotics]

    return (
            <ThemeProvider theme={colorScheme}>
                <AllProjectsContainer>
                    <ProjectsTitle>Projects</ProjectsTitle>
                    <ProjectsHomeLink to='/'>Back to Home</ProjectsHomeLink>
                    {projects.map((p, index) => (
                        <FeaturedProjectInfo key={index} colorScheme={colorScheme} {...p}/>
                    ))}
                    <ProjectsHomeLink to='/'>Back to Home</ProjectsHomeLink>
                </AllProjectsContainer>
        </ThemeProvider>
    )
}

export default AllProjects
