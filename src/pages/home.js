import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/sidebar'
import Navbar from '../components/Navbar/navbar'
import Start from '../components/StartSection/start'

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
        </>
    )
}

export default Home
