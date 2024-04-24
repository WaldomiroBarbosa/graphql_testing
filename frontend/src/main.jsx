import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import Register from "./components/register.jsx"
import Login from "./components/login.jsx"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:
    [{
    path:"/",
    element: <Login />
  },
  {
    path:"/register",
    element: <Register />
  }]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
