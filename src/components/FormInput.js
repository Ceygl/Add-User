import React, { useState } from 'react';
import "../index.css"
import Button from './Button';
import WarningWindow from './WarningWindow';

const FormInput = () => {
    const [userName, setUserName] = useState('');
    const [ageInput, setAgeInput] = useState('');
    const [usersList, setUsersList] = useState([]);
    const [showWarning, setShowWarning] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'input1') {
            setUserName(value);
        } else if (name === 'input2') {
            setAgeInput(value);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (userName.trim() === '' || isNaN(ageInput) || ageInput <= 0) {
            setShowWarning(true);
            return;
        }
        const newUser = {
            username: userName,
            age: ageInput,
        };
        setUsersList([...usersList, newUser]);

        setUserName('');
        setAgeInput('');

        setShowWarning(false);
    };
    return (
        <div className='container'>
            {showWarning && <WarningWindow onClose={() => setShowWarning(false)} />}
            <form onSubmit={handleSubmit}>
                <label htmlFor="input1">Username</label>
                <input
                    type="text"
                    id="input1"
                    name="input1"
                    value={userName}
                    onChange={handleInputChange}
                />

                <label htmlFor="input2">Age (Years)</label>
                <input
                    type="text"
                    id="input2"
                    name="input2"
                    value={ageInput}
                    onChange={handleInputChange}
                />
                <Button />
            </form>
            {usersList.length > 0 && (
                <div className='container added'>

                    {usersList.map((user, index) => (
                        <div key={index}>
                            <p>{user.username} ({user.age})</p>
                        </div>
                    ))}


                </div>
            )}
        </div>
    )
}

export default FormInput;