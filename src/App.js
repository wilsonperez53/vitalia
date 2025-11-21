
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './screens/Inicio';
import Plan from './screens/Plan';
import Recordatorios from './screens/Recordatorios';
import Consejos from './screens/Consejos';
import Asistencia from './screens/Asistencia';
import Seguimiento from './screens/Seguimiento';
import Login from './screens/Login';
import Menu from './screens/Menu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/recordatorios" element={<Recordatorios />} />
        <Route path="/consejos" element={<Consejos />} />
        <Route path="/asistencia" element={<Asistencia />} />
        <Route path="/seguimiento" element={<Seguimiento />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
