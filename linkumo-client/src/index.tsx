import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'

import { createRoot } from 'react-dom/client'

import { router } from './router/router.tsx'
import './index.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
