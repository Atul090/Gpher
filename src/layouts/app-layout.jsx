
import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../components/Header'

const AppLayout = () => {
  // component to render the layout
  return (
    <div className='bg-gray-950 text-white min-h-screen' >
      <div className='container px-6 py-4 mx-auto' >
        <Header/>
        <main>
          {/*  addig the outlet to render the orutes as children  */}
          <Outlet/> 
        </main>
      </div>
    </div>
    
  )
}

export default AppLayout