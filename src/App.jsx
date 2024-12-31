import React from 'react'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-200 selection:text-blue-600'>
      <div className='fixed top-0 -z-10 h-full w-full'></div>
      <div className=" absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      </div>
      <div className='container mx-auto px-8'>

        <Navbar />
      </div>
    </div>
    

    
  )
}

export default App