import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Inicio() {

  const [authData, setAuthData] = useState({email: '', password: ''})

  const handleOnChange = e => {
    setAuthData({
      ...authData,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = e => {
    e.preventDefault();

  }

  return (
    <div className='container'>
        <h1>Bienvenid@ a nuestra aplicación</h1>
        {/* <Link to="/soporte">
            <button>Ayuda</button>
        </Link> */}
      <form onSubmit={handleOnSubmit}>
        <div className="row">
          <div className="col-100">
            <label>Email</label>
            <input type="text"
              value={authData.email}
              name="email"
              onChange={handleOnChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-100">
            <label>Contraseña</label>
            <input type="text"
              value={authData.password}
              name="password"
              onChange={handleOnChange} />
          </div>
        </div>
        <div className="row end">
          <button type='submit'>Enviar</button>
        </div>
      </form>

    </div>
  )
}
