import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavigationBar from './components/shared/NavigationBar'
import { AddNewUserPage, AllUsersPage, HomePage } from './pages'
import UserProvider from './context/UserContext'

function App() {
  

  return (
    <>
    <UserProvider>
      <BrowserRouter>
      
      
        <NavigationBar/>


        <div>


          
            <Routes>
                  <Route path='/' element={<HomePage/>}></Route>
                  <Route path='all-users' element={<AllUsersPage/>}></Route>
                  <Route path='add-new' element={<AddNewUserPage/>}></Route>
            </Routes>
          
        </div>

        
      </BrowserRouter>
      </UserProvider>
    </>
  )
}

export default App
