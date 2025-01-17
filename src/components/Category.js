import React from 'react'

function Category() {
  return (
    <div className='h-[52vh] w-[100%] bg-white justify-center items-center mt-5'>
        <div className=' text-2xl font-bold px-24'>
            <label>Explore by Category</label>
        </div>
        <div className=' flex gap-8 justify-center items-center mt-5'>
        <div className='flex h-[40vh] w-[15%]'>
            <img className=' rounded-2xl' src='https://www.gonoise.com/cdn/shop/files/Smartwatches-D.webp?v=1729498070'></img>
        </div>
        <div className='flex gap-2 h-[40vh] w-[15%] '>
            <img className=' rounded-2xl' src='https://www.gonoise.com/cdn/shop/files/Audio-D.webp?v=1729498106'></img>
        </div>
        <div className='flex gap-2 h-[40vh] w-[15%] '>
            <img className=' rounded-2xl' src='https://www.gonoise.com/cdn/shop/files/Collection-D_2x_59615cab-659f-4e1e-9565-8362b33d54db.png?v=1734517451'></img>
        </div>
        <div className='flex gap-2 h-[40vh] w-[15%] '>
            <img className=' rounded-2xl' src='https://www.gonoise.com/cdn/shop/files/Accessories-D.webp?v=1729498151'></img>
        </div>
        <div className='flex gap-2 h-[40vh] w-[15%] '>
            <img className=' rounded-2xl' src='https://www.gonoise.com/cdn/shop/files/Collection-D.webp?v=1729498199'></img>
        </div>
        </div>
    </div>
  )
}

export default Category