import React from 'react';
import './gmail.css';

const Gmail = () => {
    return (
        <div className="gmail-container">
            <div className="text-container">
                <h1 className="gmail-title">
                    STAY ONE<br />
                    STEP AHEAD
                </h1>
            </div>
            <div className="input-container">
                <input
                    type="email"
                    id="email"
                    className="email-input"
                    placeholder="Enter your email"
                />
                <button className="subscribe-btn">Sing Up</button>
            </div>
        </div>
    );
};

export default Gmail;