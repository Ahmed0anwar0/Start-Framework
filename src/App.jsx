import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Navbar from './Components/Navbar/Navbar'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Home from './Components/Home/Home'
import { createBrowserRouter , createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'


  let router = createHashRouter([
    { 
      path: '', element: <Layout/>, children:[
        {index: true,element:<Home/>},
        {path: 'About',element:<About/>},
        {path: 'Portfolio',element:<Portfolio/>},
        {path: 'Contact',element:<Contact/>}
      ]}
  ])


function App() {
  const [count, setCount] = useState(0)

  return <RouterProvider router={router}></RouterProvider>
}

export default App
