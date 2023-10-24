import React, { useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import {sendRequest} from "../../functions";
import DivInput from "../../Components/DivInput";
import storage from "../../Storage/storage";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const go = useNavigate();

  const csrf = async () => {
    await axios.get('/sanctum/csrf-cookie');
  };

  const login = async (e) => {
    e.preventDefault();
    await csrf();

    const form = { email: email, password: password };
    const res = await sendRequest('POST', form, '/api/auth/login', '', false);

    if (res.status == true) {
      storage.set("authToken", res.token);
      storage.set("authUser", res.data);
      go("/");
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
            <h2 className="h2 text-center mb-4">Iniciar sesion en tu cuenta</h2>

            <form onSubmit={login}>
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

              <div className="mb-2">
                <label className="form-check">
                  <input type="checkbox" className="form-check-input" />
                  <span className="form-check-label">
                    Remember me on this device
                  </span>
                </label>
              </div>
              <div className="form-footer">
                <button type="submit" className="btn btn-primary w-100">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center text-secondary mt-3">
          Don't have account yet?{" "}
          <Link to='/register'>Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

// Revisado