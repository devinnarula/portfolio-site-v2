import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/sidebar'
import Navbar from '../components/Navbar/navbar'
import Start from '../components/StartSection/start'
import About from '../components/AboutSection/about'
import Projects from '../components/ProjectsSection/projects'
import Experience from '../components/ExperienceSection/experience'
import Contact from '../components/ContactSection/contact'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
           <Sidebar isOpen={isOpen} toggle={toggle}/>
           <Navbar toggle={toggle}/>
           <Start/>
           <About id='about'/>
           <Experience id='experience'/>
           <Projects id='projects'/>
           <Contact id='contact'/>
        </>
    )
}

export default Home
