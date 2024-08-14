import React from 'react';
import steamIcon from '../img/steam.png';
import epicIcon from '../img/epic.png';
import windowsIcon from '../img/windows.png';
import playIcon from '../img/play.png';
import xboxIcon from '../img/xbox.png';
import swishIcon from '../img/swish.png';
import './welcome.css';

const Welcome = () => {
    return (
        <div className="welcome-container">
            <h1 className="welcome-title">Welcome to the deadly game of hide and seek</h1>
            <div className="welcome-icons">
                <img src={steamIcon} alt="Steam" />
                <img src={epicIcon} alt="Epic" />
                <img src={windowsIcon} alt="Windows" />
                <img src={playIcon} alt="Play" />
                <img src={xboxIcon} alt="Xbox" />
                <img src={swishIcon} alt="Swish" />
            </div>
        </div>
    );
}

export default Welcome;
