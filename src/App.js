import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Powerseries from './Pages/Powerseries'
import Gift from './Pages/Gift'
import Account from './Pages/Account'
import SingleProduct from './Pages/SingleProduct'


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='/manyproduct' element={<Powerseries/>} ></Route>
    <Route path='/gift' element={<Gift/>}></Route>
    <Route path='/Account' element={<Account/>}></Route>
    <Route path='/singleproduct' element={<SingleProduct/>} ></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App