import React from 'react'
import { Link,useLocation,useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-hot-toast';

const signup = () => {
  const location =useLocation()
  const navigate= useNavigate()
  const from =location.state?.from?.pathname||"/"
   const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit =async (data) =>{
    const userInfo={
      fullname: data.fullname,
      email: data.email,
      password: data.password
    }
    await axios.post("http://localhost:4001/user/signup", userInfo)
    .then((res)=>{   //then returns a promise , promise is resolved when the data is received
      // promise is rejected when there is an error , promis is either resolved or rejected
      console.log(res.data);
      if(res.data){
        toast.success('Successfully signed up'); 
        navigate(from,{replace:true});  
      }

      localStorage.setItem("Users", JSON.stringify(res.data.user));
    }).catch((err)=>{
      if(err.response){
        console.log(err.response.data);
        toast.error("Error: " + err.response.data.message);
    }
  }) 
  };
  return (
   <>
   <div className='flex h-screen justify-center items-center '>
    <div className='border-[2px] p-8 showdow-md rounded-md modal modal-open'>
  <div className="modal-box dark:bg-slate-900 dark:text-white"> 
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/'>
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </Link>
  
    <h3 className="font-bold text-lg ">SignUp</h3>
       <div >
         <br />

         <div className='flex flex-col'>Name
        <input type="text" 
         placeholder='Enter your name ' 
         className='border border-black rounded-md p-2 mt-2'
         {...register("fullname", { required: true })}/>

         {errors.fullname && <span className='text-red-900'>This field is required</span>}

        </div>


        <div className='flex flex-col mt-6'>Email
        <input type="email"  
        placeholder='Enter your email ' 
        className='border border-black rounded-md p-2 mt-2'
        {...register("email", { required: true })}/>

        {errors.email && <span className='text-red-900'>This field is required</span>}

        </div>
        <div className='flex flex-col mt-6'>Password
        <input type="password" 
        placeholder='Enter your password' 
        className='border border-black rounded-md p-2 mt-2' 
        {...register("password", { required: true })} />
          {errors.password && <span className='text-red-900'>This field is required</span>}

        </div>

        <div className='mt-8 flex justify-around gap-20'>
            <button className='border px-3 py-2 rounded-md cursor-pointer bg-pink-400 hover:bg-pink-600'>SignUp </button>
            <div className='mt-2'>Already SignedUp? 
             
            <button className='underline text-blue-500 cursor-pointer'
             onClick={() => {document.getElementById('my_modal_3').showModal()}}>
                Login
            </button>
               
            </div>
             
        </div>
       </div>
     </form>
     <Login />
  </div>
</div> 
   </div>
   </>
  )
}

export default signup

//  onClick={()=>
//                 document.getElementById('my_modal_3').showModal()
//               }