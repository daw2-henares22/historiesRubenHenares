import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { GlobalProvider } from './context/globalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <GlobalProvider>
        <main className="purple-dark text-foreground bg-background"/>
          <App />
      </GlobalProvider>
    </NextUIProvider>
  </React.StrictMode>,
)
