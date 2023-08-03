import React, { useState } from 'react';
import "../index.css"
import Button from './Button';
import WarningWindow from './WarningWindow';
import Card from './Card';

const FormInput = () => {
    const [userName, setUserName] = useState('');
    const [ageInput, setAgeInput] = useState('');
    const [usersList, setUsersList] = useState([]);
    const [showWarning, setShowWarning] = useState(false);

    const handleNameChange = (e) => {
        setUserName(e.target.value);
    };
    const handleAgeInput = (e) => {
        setAgeInput(e.target.value);
    }
    const handleWarningClose = () => {
        setShowWarning(false);
        setUserName('');
        setAgeInput('');
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (userName.trim() === '' || isNaN(ageInput) || userName.trim().length < 5 || +ageInput <= 0) {
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
        <Card>
            {showWarning && (
                <div className="modal-overlay">
                    <WarningWindow onClose={handleWarningClose} />
                </div>
            )}
            {showWarning && <WarningWindow onClose={() => {
                setShowWarning(false)
                setUserName('')
                setAgeInput('')
            }
            } />}
            <form onSubmit={handleSubmit}>
                <label htmlFor="input1">Username</label>
                <input
                    type="text"
                    id="input1"
                    name="input1"
                    value={userName}
                    onChange={handleNameChange}
                />

                <label htmlFor="input2">Age (Years)</label>
                <input
                    type="text"
                    id="input2"
                    name="input2"
                    value={ageInput}
                    onChange={handleAgeInput}
                />
                <Button />
            </form>
            {usersList.length > 0 && (
                <div className='container added'>
                    {usersList.map((user, index) => (
                        <div key={index}>
                            <div className='added-input'><p>{user.username} ({user.age})</p></div>


                        </div>
                    ))}


                </div>
            )}
        </Card>
    )
}

export default FormInput;