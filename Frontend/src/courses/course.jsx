import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Courses from '../components/courses'


const course = () => {
     
  return (
    <>
    <Navbar/>

    <div className='min-h-screen  '>
        <Courses/>
    </div>
    
    <Footer/>
    </>
  )
}

export default course
