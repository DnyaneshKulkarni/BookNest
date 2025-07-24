import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'


const Contacts = () => {
  const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data =>{console.log(data)};
   
  return (
    <>
    <div className='w-2xl mx-auto md:px-20 px-5  mt-40 border border-gray-300 p-8  rounded-lg shadow-lg'>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className='flex flex-col items-center justify-center text-4xl font-bold mb-4 '>
          Contact Us
        </h1>

        <div className='text-lg mb-6 '>
          <p className='left-0'>Name</p>
          <input type="text" 
           placeholder='Enter your name'
            className='border p-1 rounded-md w-full'
            {...register("name", { required: true })} />
            {errors.name && <span className='text-red-900'>This field is required</span>}
        </div>

        <div className='text-lg mb-6 '>
          <p className='left-0'>Email</p>
          <input type="Email"
           placeholder='Enter your email' 
           className='border p-1 rounded-md w-full'
           {...register("email", { required: true })} />
           {errors.email && <span className='text-red-900'>This field is required</span>}
        </div>

        <div className='text-lg mb-6 '>
          <p className='left-0'>Message</p>
          <textarea 
           placeholder='Type your message'
            className='border p-2 rounded-md w-full ' 
            {...register("message", { required: true })}/>
            {errors.message && <span className='text-red-900'>This field is required</span>}
        </div>

        <button className='border-[2px] border-black px-2 py-1 rounded-md bg-blue-400 hover:bg-blue-700 duration-250 text-white cursor-pointer'>
          Submit
        </button>
    </form>
    </div>
    </>
  )
}

export default Contacts
