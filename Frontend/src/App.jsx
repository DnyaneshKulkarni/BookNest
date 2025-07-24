import { useState } from 'react'
import Home from './home/Home'
import Course from './courses/course'
import Signup from './components/signup'
import Contact from './contact/contact'
import { Routes, Route } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      <div className='dark:bg-gray-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/contact" element={<Contact/>} />'
      </Routes>
      </div>
    </>
  )
}

export default App
