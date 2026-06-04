import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'; // <-- Ye line nayi hai

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider> {/* <-- Ye wrapper naya hai */}
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)