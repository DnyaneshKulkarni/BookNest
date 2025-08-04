import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contacts from '../components/Contacts'

const contact = () => {
  return (
    <>
    <div>
        <Navbar/>
        <div className='min-h-screen pt-20'>
            <Contacts/>
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default contact
