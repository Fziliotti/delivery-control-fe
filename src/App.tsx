import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { Router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Delivery Control" />
      <RouterProvider router={Router}></RouterProvider>
    </HelmetProvider>
  )
}
