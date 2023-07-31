import React, { useState } from 'react';
import "../index.css"

const FormInput = () => {
    const [userName, setUserName] = useState('');
    const [ageInput, setAgeInput] = useState('');

    const handleInputChange = (e) => {

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add any additional logic you need for form submission here
        console.log('Form submitted!');
        console.log('Input 1 value:', userName);
        console.log('Input 2 value:', ageInput);
    };
    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="input1">Username</label>
                <input
                    type="text"
                    id="input1"
                    name="input1"
                    value={userName}
                    onChange={handleInputChange}
                /><br />

                <label htmlFor="input2">Age (Years)</label>
                <input
                    type="text"
                    id="input2"
                    name="input2"
                    value={ageInput}
                    onChange={handleInputChange}
                /><br />

                <button type="submit">Add User</button>
            </form></div>
    )
}

export default FormInput;