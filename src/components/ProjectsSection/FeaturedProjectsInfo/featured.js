import React from 'react'
import { FeaturedProjectContainer, LeftSide, FeaturedTitle, FeaturedImg, RightSide, FeaturedDescription, FeaturedSkills, FeaturedSkill, FeaturedButtons, FeaturedLink, LinkIcon } from './FeaturedElements'
import { ThemeProvider } from 'styled-components'

const FeaturedProjectInfo = ({colorScheme, id, title, picture, description, skills, buttons}) => {
    return (
        <ThemeProvider theme={colorScheme}>
            <FeaturedProjectContainer id={id}>
                <LeftSide>
                    <FeaturedImg src={picture} alt="Project Picture"/>
                </LeftSide>
                <RightSide>
                    <FeaturedTitle>{title}</FeaturedTitle>
                    <FeaturedDescription>{description}</FeaturedDescription>
                    <FeaturedSkills>
                        {skills.map((s, index) => (
                            <FeaturedSkill key={index}>{s}</FeaturedSkill>
                        ))}
                    </FeaturedSkills>
                    <FeaturedButtons>
                        {buttons.map((b, index) => (
                            <FeaturedLink key={index} to={{pathname: b.url}} target="_blank"><LinkIcon>{b.icon()}</LinkIcon></FeaturedLink>
                        ))}
                    </FeaturedButtons>
                </RightSide>
            </FeaturedProjectContainer>
        </ThemeProvider>
    )
}

export default FeaturedProjectInfo
