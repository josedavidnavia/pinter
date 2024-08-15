// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Publicidad from './components/publicidad/publicidad'; // Importa el componente Publicidad
import Gmail from './components/gmail/gmail';
import Welcome from './components/welcome/welcome';
import Personajes from './components/personajes/personajes';

const App = () => {
  return (
    <div>
      <Navbar />
      <Publicidad /> 
      <Gmail />
      <Welcome />
      <Personajes />
    </div>
  );
};

export default App;
