//Este archivo es el equivalente al index.js que se crea cuando crea una app de react con CRA

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Importar los estilos de bootstrap (importante cargar antes de nuestros estilos para que mis estilos puedan sobreescribir a los de Bootstrap en caso de que lo necesite)
import 'bootstrap/dist/css/bootstrap.min.css'
import "animate.css"
import './index.css' // Nuestros estilos personalizados del proyecto
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
