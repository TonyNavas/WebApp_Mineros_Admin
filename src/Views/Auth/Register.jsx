import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {sendRequest} from "../../functions";
import DivInput from "../../Components/DivInput";

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const go = useNavigate();

  const csrf = async () => {
    await axios.get('/sanctum/csrf-cookie');
  };

  const register = async (e) => {
    e.preventDefault();
    await csrf();

    const form = { name: name, email: email, password: password };
    const res = await sendRequest('POST', form, '/api/auth/register', '', false);

    if (res.status == true) {
      go('/login')
    }
  };
  
  return (
    <div>
      <div className="container container-tight py-4">
        <div className="text-center mb-4">
          <a href="." className="navbar-brand navbar-brand-autodark">
            MINEROS
          </a>
        </div>
        <div className="card card-md shadow border-0">
          <div className="card-body">
            <h2 className="h2 text-center mb-4">Crea una cuenta</h2>

            <form onSubmit={register}>
            <div className="mb-3">
                <label className="form-label">Nombre y apellidos</label>
                <DivInput type="text" icon='fa-user' className="form-control"
                  value={name}
                  placeholder='Nombre y apellidos'
                  required = 'required'
                  handleChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Correo electronico</label>
                <DivInput type="email" icon='fa-at' className="form-control"
                  value={email}
                  placeholder="tu@email.com"
                  required = "required"
                  handleChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label className="form-label">Contraseña</label>
                  <DivInput type="password" icon='fa-key' className="form-control"
                    value={password}
                    placeholder="Ingresa tu contraseña"
                    required = "required"
                    handleChange={(e) => setPassword(e.target.value)}
                  />
              </div>

              <div className="form-footer">
                <button className="btn btn-primary w-100">
                  Crear cuenta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register