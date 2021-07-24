import React from 'react'
import { ExperienceContainer, ExperienceText, ExperienceTitle, ExperienceTitleName, ExperienceSectionLine } from './ExperienceElements'

const Experience = ({id}) => {
    return (
        <ExperienceContainer id={id}>
            <ExperienceText>
                <ExperienceTitle>
                    <ExperienceSectionLine/><ExperienceTitleName>Experience</ExperienceTitleName>
                </ExperienceTitle>
            </ExperienceText>
        </ExperienceContainer>
    )
}

export default Experience
