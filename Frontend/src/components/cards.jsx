import React from 'react'

const cards = ({item}) => {
    //item is passed as props
  return (
    <>
    <div className='mt-4 my-8 relative  p-8 rounded-lg border border-gray-200  duration-300 hover:scale-105 hover:shadow-xl hover:z-50'>
        <div className="card bg-base-100 w-96 shadow-sm dark:bg-slate-900 dark:text-white dark:background-white">
  <figure>
    <img className='w-60'
      src={item.image}  
      alt="Shoes" />
  </figure>
  <div className="card-body">

    <h2 className="card-title">

     <div>
      {item.name}
     </div>

      <div className="badge badge-secondary">
        {item.Category}
      </div>
    </h2>

    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Rs {item.price}</div>
      <div className="px-2 py-1 rounded-full  border-black border-[0.5px] hover:bg-pink-400 hover:text-white cursor-pointer">Buy Now</div>
    </div> 
  </div>
</div>
    </div>
    </>
  )
}

export default cards
