import React from 'react'
import TodoListPage from '../Components/TodoListPage/TodolistPage'
import ProfilePage from './../Components/ProfilePage/ProfilePage'
import SignInPage from '../Components/SignIN/SignInPage'
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<SignInPage/>} />
        <Route path='/TodoListPage' element={<TodoListPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default router