import React from 'react'
import ReactDOM from 'react-dom/client' // Fixed the incorrect casing
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github,{ githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/', // Root path
//     element: <Layout />,
//     children: [
//       {
//         path: '/', // Home route should have '/'
//         element: <Home />
//       },
//       {
//         path: 'about', // About page
//         element: <About />
//       },
//       {
//         path: 'contact', // contact page
//         element: <Contact/>
//       }
//     ]
//   }
// ])


//another methode of making the route
//using loader for more optimization while api calling , it already call the api and fetch the data and keep it init catch before firing the useEffect 
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='' element={<Home/>}/>
      <Route path='user/:userid' element={<User/>}/> {/*userid variable will store the data entered after the userroute an it will be available in the element it is directing to using the Params*/}
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github/>}/>


    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Corrected to RouterProvider */}
  </React.StrictMode>,
)








