import React from 'react'
import { StartContainer, StartText, StartImgContainer, StartImg, StartTitleContainer, StartTitleGreeting, StartTitleName, StartSubTitle, StartSummary } from './StartElements'
import Profile from '../../images/Profile.jpg'

const Start = () => {
    return (
        <StartContainer>
            <StartImgContainer>
                <StartImg src={Profile} alt="Profile Picture"/>
            </StartImgContainer>
            <StartText>
                <StartTitleContainer>
                    <StartTitleGreeting>Hello! My Name is</StartTitleGreeting>
                    <StartTitleName>Devin Narula</StartTitleName>
                </StartTitleContainer>
                <StartSubTitle>I like to code.</StartSubTitle>
                <StartSummary>
                    I'm a student and software engineer who loves desining, coding, and building great technology. Currently, I'm working towards bachelor's degrees in Computer Science and Mathematics from Clemson University.
                </StartSummary>
            </StartText>
        </StartContainer>
    )
}

export default Start
