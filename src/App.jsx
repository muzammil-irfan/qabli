import { useState } from 'react'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import routes from './routes'
// import './App.css'

function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App
