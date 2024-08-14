// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Publicidad from './components/publicidad/publicidad'; // Importa el componente Publicidad
import Gmail from './components/gmail/gmail';
import Welcome from './components/welcome/welcome';

const App = () => {
  return (
    <div>
      <Navbar />
      <Publicidad /> {/* Agrega el componente Publicidad debajo de Navbar */}
      {/* Resto de tu contenido */}
      <Gmail />
      <Welcome />
    </div>
  );
};

export default App;
