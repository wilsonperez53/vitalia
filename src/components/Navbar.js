
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    
    <nav className="bg-vitaliaGreen text-white p-4 flex justify-around">
      <Link to="/" className="hover:text-vitaliaYellow">Inicio</Link>
      <Link to="/plan" className="hover:text-vitaliaYellow">Plan</Link>
      <Link to="/asistencia" className="hover:text-vitaliaYellow">Asistencia</Link>
    </nav>
  );
}
