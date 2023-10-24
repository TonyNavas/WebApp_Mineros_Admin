import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Components/Layouts/Nav";
import Usuarios from "./Views/Usuarios/Index";
import CreateUsuarios from "./Views/Usuarios/Create";
import EditUsuarios from "./Views/Usuarios/Edit";

import Login from "./Views/Auth/Login";
import Register from "./Views/Auth/Register";
import ProtectedRoutes from "./Components/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Nav /> 
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>

        <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Usuarios />}/>
        <Route path="/create" element={<CreateUsuarios />}/>
        <Route path="/edit/:id" element={<EditUsuarios />}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// Revisado