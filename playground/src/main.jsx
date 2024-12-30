import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const ROOT = createRoot(document.getElementById('root'))

ROOT.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
