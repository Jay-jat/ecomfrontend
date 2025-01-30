import React, { useState } from 'react'
import { useSubmit } from 'react-router-dom'
import axios from 'axios';

function Noiseblogs() {
 
  const[allBlog,SetAllBlog]=useState([])
 
  axios.get('http://localhost:9000/blog').then((res) => {
    SetAllBlog(res.data);
  },
  (err) => {}
);



  return (
    <div className='h-[70vh] w-[100%] flex mt-10 justify-center items-center'>
    <div className='h-[60vh] w-[83%]'>
        <div className=' flex justify-between'>
            <label className=' text-[26px] font-bold'>Noise Blogs</label>
            <label className=' text-[13px] underline'>View All</label>
        </div>
       
        <div className=' main-div h-[55vh] w-[100%] overflow-hidden'>
          <div className=' animation-div w-[250%] flex gap-[20px]'>

          {allBlog.map((i,index)=>
          <div className='h-[30vh] w-[20%] mt-5'>
            <img className=' h-[30vh] w-[100%] rounded-[20px]' src={i.images}></img>
            <div className=' flex flex-col mt-2'>
              <label className=' text-[16px] font-bold'>{i.title}</label>
              <label className=' text-[13.5px]'>{i.description}
              </label>
              <div>
              <i class="fa fa-calendar" aria-hidden="true"></i>
              <label className=' text-[10px] px-1 '>May,27 2024</label>
              </div>
              </div>            
            </div>
            )}
          
            </div>
        </div>
    </div>
    </div>
  )
}

export default Noiseblogs