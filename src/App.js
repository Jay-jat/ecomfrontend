import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Powerseries from './Pages/Powerseries'
import Accessories from './Pages/Accessories'
import Gift from './Pages/Gift'
import Account from './Pages/Account'
import SingleProduct from './Pages/SingleProduct'


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='/Powerseries' element={<Powerseries/>} ></Route>
    <Route path='/Accessories' element={<Accessories/>}></Route>
    <Route path='/Gift' element={<Gift/>}></Route>
    <Route path='/Account' element={<Account/>}></Route>
    <Route path='/singleproduct' element={<SingleProduct/>} ></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App