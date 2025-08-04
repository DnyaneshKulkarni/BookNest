import { useState } from 'react'
import Home from './home/Home'
import Course from './courses/course'
import Signup from './components/Signup'
import Contact from './contact/contact'
import { Routes, Route, Navigate } from "react-router-dom"
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.jsx'
 
function App() {
   const [authUser, setAuthUser] = useAuth();
    console.log(authUser);
    
  const [count, setCount] = useState(0)

  return (
    <>
  
      <div className='dark:bg-gray-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser?<Course/>:<Navigate to="/signup"/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/contact" element={<Contact/>} />'
      </Routes>
      <Toaster />
      </div>
    </>
  )
}

export default App
