import React from 'react'
import { useNavigate } from 'react-router-dom';

function Strap() {
  const navigate= useNavigate()
  return (
    <div onClick={()=> {localStorage.setItem("category","accessory"); navigate("/manyproduct")}}  className='h-[55vh] w-[100%] flex justify-center items-center'>
        <div className='h-[45vh] w-[84%]'>
            <img className=' rounded-[20px]' src='https://www.gonoise.com/cdn/shop/files/Desktop2_ef09ed40-ca35-4bff-8f17-b31c8baeef6c.jpg?v=1714634063'></img>
        </div>
    </div>
  )
}

export default Strap