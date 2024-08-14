import React from 'react';
import './publicidad.css';
import publicidadImg from '../img/publicidad.png'; // Ruta ajustada
import trampa1 from '../img/trampa1.png'; // Ruta ajustada
import trampa2 from '../img/trampa2.png'; // Ruta ajustada

const Publicidad = () => {
    return (
        <div className="publicidad">
            <img src={publicidadImg} alt="Publicidad" className="publicidad-img" />
            <button className="buy-game-btn">BUY THE MAIN GAME</button>
            <button className="learn-more-btn">LEARN MORE</button>
            <img src={trampa1} alt="Trampa 1" className="trampa1-img" />
            <img src={trampa2} alt="Trampa 2" className="trampa2-img" />
        </div>
    );
}

export default Publicidad;