import { useState } from 'react'

import './App.css'
import Landpage from './components/landpage/landpage'
import ChooseUs from './components/chooseUs/chooseus'
import Project from './components/projects/project'
import Expert from './components/Expert/expert'
import Client from './components/client/client'
import Footer from './components/footer/footer'
import CarousalPage from './components/carousalPage/carousalPage'

function App() {

  return (
    <>
      <Landpage/>
      <CarousalPage/>
        <ChooseUs/>
        <Project/>
        <Expert/>
        <Client/>
        <Footer/>
    </>
  )
}

export default App
