import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Gift() {
  return (
    <div>
        <Header></Header>
        <div className=' h-[66vh] w-[100%]  '>
            <img className=' ' src='https://www.gonoise.com/cdn/shop/files/Rectangle_2622_1ee9180a-aaab-4e48-a2a6-6fcb50626302.png?v=1692622097'></img>
        </div>
        <div className=' h-[100vh] w-[100%] bg-gray-400 flex justify-center '>
            <label className=' text-[brown] text-[25px] font-bold+'>Gift for a lasting impression</label>
        </div>
        <Footer></Footer>
        </div>
    
  )
}

export default Gift