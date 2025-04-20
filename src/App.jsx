import React from 'react'
import './App.css'

import Home from "./components/Home";
import Philosophy from "./components/Philosophy";
import Process from "./components/Process";
import Build from "./components/Build";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Connect from "./components/Connect";

function App() {

  return (
    <>
      <Home />
      <Services />
      <Process />
      <Philosophy />
      <Build />
      <Connect />
      <Contact />
    </>
  )
}

export default App
