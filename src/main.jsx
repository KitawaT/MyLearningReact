import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Edit from './Edit.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { element } from 'prop-types'

const router = createBrowserRouter ([
  {
    path: '/test',
    element: <App />,
  },
  {
    path: '/test/:id',
    element: <Edit />,
  }, 
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
