import React from 'react'
import {Routes} from "react-router-dom"
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import PostDetails from './pages/PostDetails'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Profile from './pages/Profile'
import { UserContextProvider } from './Context/UserContext'

const App = () => {
  return (
      <UserContextProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/write' element={<CreatePost/>}/>
        <Route path='/posts/post/:id' element={<PostDetails/>}/>
        <Route path='/edit/:id' element={<EditPost/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </UserContextProvider>
  )
}

export default App