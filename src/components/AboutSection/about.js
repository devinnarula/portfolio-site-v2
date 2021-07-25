import React from 'react'
import { AboutContainer, AboutText, AboutTitle, AboutTitleName, AboutSectionLine, AboutParagraph, AboutSkills, AboutSkillTitle, AboutSkill, SkillIcon } from './AboutElements'
import { DiJava } from 'react-icons/di'
import { SiJavascript, SiCsharp, SiFlask, SiCodio } from 'react-icons/si'
import { FaSwift, FaPython, FaHtml5, FaCss3Alt, FaReact, FaAngular } from 'react-icons/fa'
import { ThemeProvider } from 'styled-components'

const About = ({colorScheme, id}) => {
    return (
        <ThemeProvider theme={colorScheme}>
            <AboutContainer id={id}>
                <AboutText>
                    <AboutTitle>
                        <AboutTitleName>About Me</AboutTitleName><AboutSectionLine/>
                    </AboutTitle>
                        <AboutParagraph>
                            Hi there! My name is Devin and I'm interested in everything to do with technology and coding. I excel at problem solving and believe I learn a lot through doing and creating new things. Currently I'm focused on broadening my technical skillset by experimenting with a variety of frontend and backend programming techniques and languages.
                        </AboutParagraph>
                        <AboutParagraph>    
                            Programming is my passion, but I'm interested in many other things to! Complex mathematics and logic fascinates me and I love the broad applications in both code and other areas of life. I also enjoy thinking about the business applications of what I create and other parts the design process. I love to code, but I find it important to think about the other aspects of creating high quality software!
                        </AboutParagraph>'
                </AboutText>
                <AboutSkillTitle>Familiar Technologies</AboutSkillTitle>

                <AboutSkills>
                    <AboutSkill><SkillIcon><SiCodio/></SkillIcon>C/C++</AboutSkill>
                    <AboutSkill><SkillIcon><DiJava/></SkillIcon>Java</AboutSkill>
                    <AboutSkill><SkillIcon><FaSwift/></SkillIcon>Swift</AboutSkill>
                    <AboutSkill><SkillIcon><FaPython/></SkillIcon>Python</AboutSkill>
                    <AboutSkill><SkillIcon><SiCsharp/></SkillIcon>C#</AboutSkill>
                    <AboutSkill><SkillIcon><SiJavascript/></SkillIcon>JavaScript</AboutSkill>
                    <AboutSkill><SkillIcon><FaHtml5/></SkillIcon>HTML</AboutSkill>
                    <AboutSkill><SkillIcon><FaCss3Alt/></SkillIcon>CSS</AboutSkill>
                    <AboutSkill><SkillIcon><FaReact/></SkillIcon>React</AboutSkill>
                    <AboutSkill><SkillIcon><FaAngular/></SkillIcon>Angular</AboutSkill>
                    <AboutSkill><SkillIcon><SiFlask/></SkillIcon>Flask</AboutSkill>
                </AboutSkills>
            </AboutContainer>
        </ThemeProvider>
    )
}

export default About
