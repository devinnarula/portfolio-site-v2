import React from 'react'
import { ProjectsContainer, ProjectsText, ProjectsTitle, ProjectsTitleName, ProjectsSectionLine } from './ProjectsElements'

const Projects = ({id}) => {
    return (
        <ProjectsContainer id={id}>
            <ProjectsText>
                <ProjectsTitle>
                    <ProjectsTitleName>Projects</ProjectsTitleName><ProjectsSectionLine/>
                </ProjectsTitle>
            </ProjectsText>
        </ProjectsContainer>
    )
}

export default Projects
