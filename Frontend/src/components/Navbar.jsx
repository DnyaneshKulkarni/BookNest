import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Login from './Login'
import { useAuth } from '../context/AuthProvider'
import Logout from './Logout'

const Navbar = () => {
  const [authUser, setAuthUser] = useAuth();

  const [theme, setTheme] = useState(localStorage.getItem('theme')? localStorage.getItem('theme') : 'light');
  const element = document.documentElement;
  useEffect(() =>{
    if(theme==='dark'){
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark');
    }
    else{
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark');
    }
  } ,[theme])


  const [sticky, setsticky] = useState(false);
  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY >0 ) {
        setsticky(true);
      } 
      else{
        setsticky(false);
      }
    }
    window.addEventListener('scroll', handlescroll);
    return () => {
      window.removeEventListener('scroll', handlescroll);
    }
  }, [])
  
    const Navitem=()=>{
        return(
            <>
                <li><a href='/'>Home</a></li>
                <li><a href='/course'>Courses</a></li>
                <li><a>About</a></li>
                <li><a href='/contact'>Contact</a></li>
            </>
        )
    }
  return ( 
    <div className="w-full  dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50">
    <div className={ ` navbar max-w-screen-2xl  mx-auto md:px-20 px-5 
       ${
    sticky ? "sticky-navbar  dark:bg-slate-800 dark:text-white shadow-md bg-base-200 transition-all ease-in-out" : ""
    }`}>
    <div className="navbar  ">
  <div className="navbar-start ">
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {Navitem()}
      </ul>
    </div>

    <Link to="/">
    <p className=" text-3xl font-bold cursor-pointer">Book
      <span className='text-blue-400'>Nest</span>
      </p>
    </Link>

  </div>
  <div className="navbar-end space-x-4">

  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1">
    
       {Navitem()}
    </ul> 
  </div>
<div className='hidden md:block '>
  <label className="input dark:bg-slate-900 dark:text-white dark:border-white">
  {/* <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg> */}
  <input type="search" className="grow dark:bg-slate-900 dark:text-white" placeholder="Search" />
  <kbd className="kbd kbd-sm dark:bg-slate-900 dark:text-white dark:border-white">🔍</kbd>
  {/* <kbd className="kbd kbd-sm"></kbd> */}
</label>
</div>


<div>
  <label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}

  <input type="checkbox" className="theme-controller" value="synthwave" onChange={() => setTheme(theme === "dark" ? "light" : "dark")} />

  {/* sun icon */}
  <svg
    className="swap-off h-8 w-8 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
   
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-8 w-8 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">

    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
</div>

{
  authUser ?<Logout/>:
  <div>
    <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-200 hover:dark:bg-white  cursor-pointer dark:bg-white dark:text-black"
    onClick={() => {document.getElementById('my_modal_3').showModal()}}>
      Login
      </a>
    <Login/>
  </div>
}

  </div>
</div>
</div>
</div>
  )
}

export default Navbar
