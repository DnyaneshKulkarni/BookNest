import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json' 
import {Link} from 'react-router-dom'


const courses = () => {
  return (
    <>
    <div className='max-w-screen-2xl containter mx-auto md:px-20 px-5'>
      <div className='text-center mt-30 my-20  '>
      <h1 className='text-bold text-2xl md:text-4xl'>
        Master Your Knowledge: Courses & Premium Reads
      </h1>
      <p className='mt-4 text-lg md:text-xl'>
        Enhance your learning journey with expertly curated courses and premium books. Whether you're mastering a new skill, exploring academic topics, or diving deep into your passion, our exclusive collection offers high-quality resources designed to help you grow, succeed, and stay ahead.
      </p>

      <Link to="/" >
      <button className='mt-8 border border-black px-4 py-2 rounded-md bg-blue-400 hover:bg-blue-700 duration-250 text-white cursor-pointer  '>
        Back
      </button>
      </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
        {
          list.map((item)=>(
            <Cards item={item} key={item.id}/>
          ))
        }
      </div>

    </div>
    </>
  )
}

export default courses
