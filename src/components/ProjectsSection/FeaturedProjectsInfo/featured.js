import React from 'react'
import { FeaturedProjectContainer, LeftSide, FeaturedTitle, FeaturedImg, RightSide, FeaturedDescription, FeaturedSkills, FeaturedSkill, FeaturedButtons, FeaturedLink, LinkIcon } from './FeaturedElements'
import { ThemeProvider } from 'styled-components'

const FeaturedProjectInfo = ({colorScheme, id, title, picture, description, skills, buttons}) => {
    return (
        <ThemeProvider theme={colorScheme}>
            <FeaturedProjectContainer id={id}>
                <LeftSide>
                    <FeaturedTitle>{title}</FeaturedTitle>
                    <FeaturedImg src={picture} alt="Project Picture"/>
                </LeftSide>
                <RightSide>
                    <FeaturedDescription>{description}</FeaturedDescription>
                    <FeaturedSkills>
                        {skills.map((s) => (
                            <FeaturedSkill>{s}</FeaturedSkill>
                        ))}
                    </FeaturedSkills>
                    <FeaturedButtons>
                        {buttons.map((b) => (
                            <FeaturedLink to={{pathname: b.url}} target="_blank"><LinkIcon>{b.icon}</LinkIcon></FeaturedLink>
                        ))}
                    </FeaturedButtons>
                </RightSide>
            </FeaturedProjectContainer>
        </ThemeProvider>
    )
}

export default FeaturedProjectInfo
