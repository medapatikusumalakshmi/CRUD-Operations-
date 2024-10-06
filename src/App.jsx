

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GetUsers from './Pages/GetUsers'
import AddUsers from './Pages/AddUsers'
import UpdateUsers from './Pages/UpdateUsers'
import Error from './assests/Error'
import './style.css'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<GetUsers/>}></Route>
        <Route path='/add' element={<AddUsers/>}></Route>
        <Route path='/edit/:id' element={<UpdateUsers/>}></Route>
        <Route path='*' element={<Error/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App



