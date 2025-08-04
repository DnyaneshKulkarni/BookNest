import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Courses from '../components/courses'


const course = () => {
     
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white min-h-screen '>
    <Navbar/>

    <div className='min-h-screen pt-20 '>
        <Courses/>
    </div>
    
    <Footer/>
    </div>
    </>
  )
}

export default course
