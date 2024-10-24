import React from 'react'
import BlurBackground from './components/BlurBackground'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Loader from './components/Loader'
import { useState,useEffect } from 'react'
import About from './components/About'
import Experience from './components/Experience'
import Contacts from './components/Contacts'

const App = () => {
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)      
    }, 2500);
  },[])
  return (
      <div>
        {loading ? <Loader/> :(
        <Router>
        <NavBar/>
        <BlurBackground/>
          <Routes>
            <Route path="/" element={<>
              <Hero/>
              <Projects/>
              <About/>
              <Experience/>
              <Contacts/>
              </>}></Route>
            <Route path='/work' element={<Projects/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/experience' element={<Experience/>}></Route>
            <Route path='/contacts' element={<Contacts/>}></Route>
          </Routes>
        </Router>)}
      </div>
  )
}

export default App