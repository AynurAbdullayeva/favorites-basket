import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { DataProvider } from './Context/BasketContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>
    <App />
  </DataProvider>,
)
