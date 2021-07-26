import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/sidebar'
import Navbar from '../components/Navbar/navbar'
import Start from '../components/StartSection/start'
import About from '../components/AboutSection/about'
import Projects from '../components/ProjectsSection/projects'
import Experience from '../components/ExperienceSection/experience'
import Contact from '../components/ContactSection/contact'
import Footer from '../components/Footer/footer'
import { BlueGrey, BlueOrange, BlackPurple, Earthy, Greens, Colorful, BrightColors } from '../colors/colors'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [colorScheme, setColorScheme] = useState(0)
    const colors = [BlueGrey, BlueOrange, BlackPurple, Earthy, Greens, Colorful, BrightColors]

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    };

    const toggleColorScheme = () => {
        if(colorScheme < colors.length-1)
            setColorScheme(colorScheme+1)
        else
            setColorScheme(0)
    };

    return (
        <>
            <Sidebar colorScheme={colors[colorScheme]} isOpen={isOpen} toggleOpen={toggleOpen}/>
            <Navbar colorScheme={colors[colorScheme]} toggleOpen={toggleOpen} toggleColor={toggleColorScheme}/>
            <Start colorScheme={colors[colorScheme]} id='/'/>
            <About colorScheme={colors[colorScheme]} id='about'/>
            <Experience colorScheme={colors[colorScheme]} id='experience'/>
            <Projects colorScheme={colors[colorScheme]} id='projects'/>
            <Contact colorScheme={colors[colorScheme]} id='contact'/>
            <Footer colorScheme={colors[colorScheme]}/>
        </>
    )
}

export default Home
