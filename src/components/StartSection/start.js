import React from 'react'
import { StartContainer, StartText, StartImgContainer, StartImg, StartTitleContainer, StartTitleGreeting, WhiteWord, BlueWord, StartSubTitle, StartSummary, StartLinks, StartLink, MediaIcon } from './StartElements'
import { GrGithub, GrLinkedin, GrInstagram, GrFacebook } from 'react-icons/gr'
import Profile from '../../images/Profile.jpg'
import { ThemeProvider } from 'styled-components'

const Start = ({colorScheme}) => {
    return (
        <ThemeProvider theme={colorScheme}>
            <StartContainer>
                <StartImgContainer>
                    <StartImg src={Profile} alt="Profile Picture"/>
                </StartImgContainer>
                <StartText>
                    <StartTitleContainer>
                        <StartTitleGreeting>Hello! My Name is <WhiteWord>Devin Narula</WhiteWord> </StartTitleGreeting>
                    </StartTitleContainer>
                    <StartSubTitle>I like to <BlueWord>code</BlueWord>.</StartSubTitle>
                    <StartSummary>
                        I'm a student and <BlueWord>software engineer</BlueWord> who loves desining, coding, and building great technology. Currently, I'm working towards bachelor's degrees in <BlueWord>Computer Science</BlueWord> and <BlueWord>Mathematics</BlueWord> from Clemson University.
                    </StartSummary>
                    <StartLinks>
                        <StartLink to={{pathname: 'https://github.com/devinnarula'}} target="_blank">
                            <MediaIcon><GrGithub/></MediaIcon> Github
                        </StartLink>
                        <StartLink to={{pathname: 'https://www.linkedin.com/in/devin-narula-463b39156/'}} target="_blank">
                            <MediaIcon><GrLinkedin/></MediaIcon> LinkedIn
                        </StartLink>
                        <StartLink to={{pathname: 'https://www.instagram.com/devin_narula/'}} target="_blank">
                            <MediaIcon><GrInstagram/></MediaIcon> Instagram
                        </StartLink>
                        <StartLink to={{pathname: 'https://www.facebook.com/devin.narula.3'}} target="_blank">
                            <MediaIcon><GrFacebook/></MediaIcon> Facebook
                        </StartLink>
                    </StartLinks>
                </StartText>
            </StartContainer>
        </ThemeProvider>
    )
}

export default Start
