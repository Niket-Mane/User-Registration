import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './components/Header'
import Users from './components/Users'
import UserReg from './components/UserReg'
import UpdateUser from './components/UpdateUser'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<UserReg/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/updateUser/:id' element={<UpdateUser/>}/>
      </Routes> 
      </BrowserRouter>
    </div>
  )
}

export default App
