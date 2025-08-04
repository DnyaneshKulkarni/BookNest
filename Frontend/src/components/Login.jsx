import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Login = () => {
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = async(data) =>{
    const userInfo={
      email: data.email,
      password: data.password
    }
    await axios.post("http://localhost:4001/user/login", userInfo)
    .then((res)=>{   //then returns a promise , promise is resolved when the data is received
      // promise is rejected when there is an error , promis is either resolved or rejected
      console.log(res.data);
      if(res.data){
        toast.success('Successfully logged in'); 
        document.getElementById("my_modal_3").close();
        setTimeout(() => {
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          window.location.reload();
          // Reload the page after 3 seconds to reflect the changes in the UI
        }, 1000);
      }
      
    }).catch((err)=>{
      if(err.response){
        console.log(err.response.data);
        toast.error("Error: " + err.response.data.message);
        setTimeout(() => {},1000);
    }}) 
  };


  return (
    <>
    <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_3" className="modal ">
  <div className="modal-box dark:bg-slate-900 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)} >
      {/* if there is a button in form, it will close the modal */}
      <Link to='/'
      onClick={() => document.getElementById("my_modal_3").close()}>
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </Link>

    {/* </form> */}
    <h3 className="font-bold text-lg ">Login</h3>
       <div>
         <br/>
        <div className='flex flex-col'>Email
        <input type="email" 
         placeholder='Enter your email ' 
         className='border border-black rounded-md p-2 mt-2'
         {...register("email", { required: true })}
         />

         {errors.email && <span className='text-red-900'>This field is required</span>}

        </div>
        <div className='flex flex-col mt-6'>Password
        <input type="password"
         placeholder='Enter your password'
          className='border border-black rounded-md p-2 mt-2' 
          {...register("password", { required: true })}
           />
  
           {errors.password && <span className='text-red-900'>This field is required</span>}

        </div>

        <div className='mt-8 flex justify-around'>
            <button className='border px-3 py-2 rounded-md cursor-pointer bg-pink-400 hover:bg-pink-600'>Login </button>
            <p className='mt-2'>Not registered? <Link to='/signup' className='underline text-blue-500 cursor-pointer'>SignUp</Link></p>
        </div>
       </div>
   </form>
  </div>
</dialog>
    </div>

    </>
  )
}

export default Login
