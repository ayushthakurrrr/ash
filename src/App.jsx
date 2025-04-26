// import React from 'react'
// import './App.css'

// import Home from "./components/Home";
// import Philosophy from "./components/Philosophy";
// import Process from "./components/Process";
// import Build from "./components/Build";
// import Services from "./components/Services";
// import Contact from "./components/Contact";
// import Connect from "./components/Connect";

// function App() {

//   return (
//     <>
//       <Home />
//       <Services />
//       <Process />
//       <Philosophy />
//       <Build />
//       <Connect />
//       <Contact />
//     </>
//   )
// }

// export default App


import React from 'react'
import './App.css'

import Home from "./components/Home.jsx";
import Philosophy from "./components/Philosophy.jsx";
import Process from "./components/Process.jsx";
import Build from "./components/Build.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Connect from "./components/Connect.jsx";
import Clients from './components/Clients.jsx';

function App() {
  return (
    <div className="scroll-container">
      <section className="page"><Home /></section>
      <section className="page"><Services /></section>
      <section className="page"><Process /></section>
      <section className="page"><Philosophy /></section>
      <section className="page"><Clients /></section>
      <section className="page"><Build /></section>
      <section className="page"><Connect /></section>
      <section className="page"><Contact /></section>
    </div>
  )
}

export default App;
