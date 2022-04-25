import React from 'react'
import { Link } from 'react-router-dom'

export default function Inicio() {
  return (
    <div className='container'>
        <h1>Bienvenid@ a nuestra aplicación</h1>
        <Link to="/soporte">
            <button>Ayuda</button>
        </Link>
    </div>
  )
}
