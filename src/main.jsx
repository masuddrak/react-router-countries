import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import About from './About';
import Services from './Services';
import Home from './components/Home';
import Contries from './components/Contries';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/service",
        element: <Services></Services>,
      },
      {
        path: "/contries",
        loader:()=> fetch ('https://restcountries.com/v3.1/all'),
        element: <Contries></Contries>,
      },
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
