
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    
    <nav className="bg-vitaliaGreen text-white p-4 flex justify-around">
      <Link to="/" className="hover:text-vitaliaYellow">Inicio</Link>
      <Link to="/menu" className="hover:text-vitaliaYellow">Menu principal</Link>
    </nav>
  );
}
