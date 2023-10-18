import React from 'react'
import ReactDOM from 'react-dom/client'
import { FirstComponent } from './FirstComponent'
import './styles/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstComponent titulo = 'Esto es un prop'/>
  </React.StrictMode>,
)
