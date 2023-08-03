import React from 'react';

const WarningWindow = ({ onClose }) => {
    return (
        <div className="warning-window">
            <p>Please enter a valid username and age!</p>
            <button onClick={onClose}>Ok</button>
        </div>
    );
};

export default WarningWindow;
