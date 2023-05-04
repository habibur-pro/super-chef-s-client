import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.jsx'
import AuthProvider from './routes/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
  <Toaster />
)
