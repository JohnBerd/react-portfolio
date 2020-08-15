import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import Main from './components/sections/Main';
import Projects from './components/sections/Projects';
import { ParallaxProvider } from 'react-scroll-parallax';
import { CssBaseline, AppBar, ThemeProvider } from '@material-ui/core';
import NavBar from './components/NavBar';
import { theme } from './globals/theme';
import menu from './globals/Menu'

function App() {

  useEffect(() => {
    window.scrollTo(0, 1)
  }, [])

  return (

    <ThemeProvider theme={theme}>
    <ParallaxProvider>
      <Header />
      <NavBar menu={menu} />
      <div className="App">
        {menu.map(current => {
          const C = current.component
          return <div id={current.anchor.substr(1)}>
            {React.cloneElement(<C />)}
          </div>
        })}
      </div>
    </ParallaxProvider>
    </ThemeProvider>
  )
}

export default App