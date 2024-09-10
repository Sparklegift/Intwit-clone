import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import AboutUs from './AboutUs.jsx';


const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />
  },

  {
    path: '/Aboutintwit',
    element: <AboutUs/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
