import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Technology from './Technology'
import Experience from './Experience'
import Project from './Project'
import Contact from './Contact'

const Body = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-200 selection:text-blue-600'>
      <div className='fixed top-0 -z-10 h-full w-full'></div>
      <div className=" absolute top-0 z-[-2] h-auto w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className='container mx-auto px-8'>

          <Navbar />
          <Hero />
          <About />
          <Technology />
          <Experience />
          <Project />
          <Contact />
        </div>
      </div>
    </div>
    

    
  )
}

export default Body;