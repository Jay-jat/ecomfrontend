import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Powerseries from './Pages/Powerseries'


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='/Powerseries' element={<Powerseries/>} ></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App