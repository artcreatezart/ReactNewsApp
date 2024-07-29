import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ArcticleContectProvider } from './components/context/ArticleContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ArcticleContectProvider>
      <App />
    </ArcticleContectProvider>
  </React.StrictMode>,
)
