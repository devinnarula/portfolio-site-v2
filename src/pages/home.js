import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/sidebar'
import Navbar from '../components/Navbar/navbar'
import Start from '../components/StartSection/start'
import About from '../components/AboutSection/about'
import Projects from '../components/ProjectsSection/projects'
import Experience from '../components/ExperienceSection/experience'
import Contact from '../components/ContactSection/contact'
import Footer from '../components/Footer/footer'
import { BlueGrey } from '../colors/colors'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [colorScheme, setColorScheme] = useState(BlueGrey)

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    };

    const toggleColorScheme = () => {
        setColorScheme(BlueGrey)
    };

    return (
        <>
            <Sidebar colorScheme={colorScheme} isOpen={isOpen} toggleOpen={toggleOpen}/>
            <Navbar colorScheme={colorScheme} toggleOpen={toggleOpen}/>
            <Start colorScheme={colorScheme}/>
            <About colorScheme={colorScheme} id='about'/>
            <Experience colorScheme={colorScheme} id='experience'/>
            <Projects colorScheme={colorScheme} id='projects'/>
            <Contact colorScheme={colorScheme} id='contact'/>
            <Footer colorScheme={colorScheme}/>
        </>
    )
}

export default Home
