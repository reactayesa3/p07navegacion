import React from 'react'
import { Link } from 'react-router-dom'

export default function DashboardClientes() {
  return (
    <div className="container">
        <h1>Clientes</h1>
        <Link to="/ventas/crear-cliente">
            <button>Nuevo Cliente</button>
        </Link>
    </div>
  )
}
