import React from 'react'
import Navbar from './components/Navbar'
import Name from './components/Name'
import About from './components/About'
import Technology from './components/Technology'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
function App() {
  return (
    <div className=" overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 
      absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

      <div className="fixed top-0 -z-10 h-full w-full"> </div>

      <div className="container mx-auto px-8"></div>
      <Navbar />
      <Name />
      <About />
      <Technology />
      <Experience />
      <Projects />
      <Contact/>
    </div>
  )
}

export default App