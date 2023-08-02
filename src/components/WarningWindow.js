// WarningWindow.js
import React from 'react';

const WarningWindow = ({ onClose }) => {
    return (
        <div className="warning-window">
            <p>Warning: Please fill in a valid username and age (greater than 0).</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default WarningWindow;
