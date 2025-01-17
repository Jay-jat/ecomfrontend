
import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import Category from '../components/Category'
import Picks from '../components/Picks'
import Strap from '../components/Strap'
import Noiseblogs from '../components/Noiseblogs'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Header></Header>
        <Carousel></Carousel>
        <Category></Category>
        <Picks></Picks>
        <Strap></Strap>
        <Noiseblogs></Noiseblogs>
        <Footer></Footer>
    </div>
  )
}

export default Home