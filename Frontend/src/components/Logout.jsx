import React from 'react'
import {useAuth} from '../context/AuthProvider'
import toast from 'react-hot-toast'

const Logout = () => {
    const [authUser,setauthUser]= useAuth();
    const handlelogout=()=>{
        try {
           setauthUser({
            ...authUser,
            user: null
           });
        localStorage.removeItem('Users');
        toast.success("Logout successful")
        setTimeout(() => {
        window.location.reload()
          // Reload the page after 3 seconds to reflect the changes in the UI
        }, 3000);
           
       
        } catch (error) {
            toast.error("Error:"+error.message)
            setTimeout(() => {}, 2000);
        }
    }
  return (
    <div >
      <button className='px-3 py-2 text-white bg-red-500 rounded-md hover:bg-red-700 cursor-pointer' onClick={handlelogout}>
        Logout
      </button>
    </div>

  )
}

export default Logout
