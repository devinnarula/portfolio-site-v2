import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ScrollToTop from './pages/scrolltotop'
import Navbar from './components/Navbar/navbar'
import Sidebar from './components/Sidebar/sidebar'
import Home from './pages/home';
import AllProjects from './pages/allprojects';
import { BlueGrey, BlueOrange, BlackPurple, Earthy, Greens, Colorful, BrightColors } from './colors/colors'

function App() {
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
      <Router>
        <Switch>
          <ScrollToTop>
            <Route
              path="/"
              render={() => (
                <>
                  <Navbar colorScheme={colors[colorScheme]} toggleOpen={toggleOpen} toggleColor={toggleColorScheme}/>
                  <Sidebar colorScheme={colors[colorScheme]} isOpen={isOpen} toggleOpen={toggleOpen}/>
                  <Home colorScheme={colors[colorScheme]}/>
                </>
              )}
              exact
            />
            <Route
              path="/projects"
              render={() => (
                <AllProjects colorScheme={colors[colorScheme]}/>
              )}
              exact
            />
          </ScrollToTop>
        </Switch>
      </Router>
  );
}

export default App;
