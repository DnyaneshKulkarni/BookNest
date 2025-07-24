import React from 'react'
import Slider from "react-slick";
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';

const Freebook = () => {
  const filterData=list.filter((data)=>data.Category==="Free");
  console.log(filterData);
  // react slick
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <>
    <div className='max-w-screen-2xl containter mx-auto md:px-20 px-5 my-20 '>
     <div>
       <h1 className='font-bold text-3xl  mb-4'>
        Free Books Available
      </h1>
      <p className=' text-2xl '>
        Unlock your next great read—download these amazing books for free and dive into new worlds of adventure, knowledge, and imagination!
      </p>
     </div>
    
    <div className="slider-container">
      <Slider {...settings}>
        {filterData.map((item)=>{
           return <Cards item={item} key={item.id}/>
        })}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook
