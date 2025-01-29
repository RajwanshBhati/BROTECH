import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../public/css/style.css'
import '../public/css/bootstrap.css'
import '../public/css/bootstrap.min.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
