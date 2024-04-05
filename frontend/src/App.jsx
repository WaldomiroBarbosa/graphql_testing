import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom'

import { register } from './components/register.jsx'
import { login } from './components/login.jsx'
import { userpage } from './components/userpage.jsx'

import "./styles.css"

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><register/></div>
  },
  {
    path: '/login',
    element: <div><login/></div>
  },
  {
    path: '/userpage',
    element: <div><userpage/></div>
  }
])

function App ()
{

  return (
    <div className="App">
      <RouterProvider router= {router}>
        <Routes>
            <>
              <Route
                path="/"
                element={<register />}
              />
              <Route 
               path="/register" 
               element={<login />} 
              />
            </>
        </Routes>
      </RouterProvider>
    </div>
  )
}

export default App
