import React, { useState } from 'react'
import Start from '../components/StartSection/start'
import About from '../components/AboutSection/about'
import Projects from '../components/ProjectsSection/projects'
import Experience from '../components/ExperienceSection/experience'
import Contact from '../components/ContactSection/contact'
import Footer from '../components/Footer/footer'

const Home = ({colorScheme}) => {
    return (
        <>
            <Start colorScheme={colorScheme} id='/'/>
            <About colorScheme={colorScheme} id='about'/>
            <Experience colorScheme={colorScheme} id='experience'/>
            <Projects colorScheme={colorScheme} id='projects'/>
            <Contact colorScheme={colorScheme} id='contact'/>
            <Footer colorScheme={colorScheme}/>
        </>
    )
}

export default Home
