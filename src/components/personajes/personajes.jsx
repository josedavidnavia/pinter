import React from 'react';
import './personajes.css';
import skullIcon from '../img/craneo.png';
import globeIcon from '../img/bola.png';
import ghostFace from '../img/ghost face.jpg';
import residentEvil from '../img/resident evil.jpg';
import saw from '../img/saw.jpg';
import silentHill from '../img/silent hill.jpg';

const Personajes = () => {
  return (
    <div className="personajes-container">
      <div className="banner">
        <div className="banner-red">
          <img src={skullIcon} alt="Craneo" className="icon"/>
          <h2>PLAY AS THE KILLER (SOLO)</h2>
          <button className="explore-button">EXPLORE GAMEPLAY</button>
        </div>
        <div className="banner-blue">
          <img src={globeIcon} alt="Bola" className="icon"/>
          <h2>PLAY AS A SURVIVOR (CO-OP)</h2>
          <button className="explore-button">EXPLORE GAMEPLAY</button>
        </div>
      </div>
      
      <h1>ICONS OF HORROR</h1>
      
      <div className="characters">
        <img src={ghostFace} alt="Ghost Face" className="character-img"/>
        <img src={saw} alt="Saw" className="character-img"/>
        <img src={residentEvil} alt="Resident Evil" className="character-img"/>
        <img src={silentHill} alt="Silent Hill" className="character-img"/>
      </div>
      
      <button className="view-button">VIEW ALL CHARACTERS</button>
    </div>
  );
};

export default Personajes;
