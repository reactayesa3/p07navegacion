import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
        <div>App</div>
        <div>
            <NavLink to="/" className={({isActive}) => isActive ? 'activo' : ''}>
                Inicio
            </NavLink>
            <NavLink to="/ventas" className={({isActive}) => isActive ? 'activo' : ''}>
                Ventas
            </NavLink>
            <NavLink to="/recursos-humanos" className={({isActive}) => isActive ? 'activo' : ''}>
                Recursos Humanos
            </NavLink>
            <NavLink to="/soporte" className={({isActive}) => isActive ? 'activo' : ''}>
                Ayuda
            </NavLink>
        </div>
    </nav>
  )
}
