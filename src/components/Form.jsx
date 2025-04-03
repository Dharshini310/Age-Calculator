import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './Form.css';

function Form() {
    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (birthdate) {
            const calculatedAge = calculateAge(birthdate);
            setAge(calculatedAge); 
        }
    };

    const calculateAge = (birthdate) => {
        const birthDateObj = new Date(birthdate);
        const currentDate = new Date();
        let age = currentDate.getFullYear() - birthDateObj.getFullYear();
        const month = currentDate.getMonth();
        const day = currentDate.getDate();
        if (month < birthDateObj.getMonth() || (month === birthDateObj.getMonth() && day < birthDateObj.getDate())) {
            age--;
        }
        return age;
    };
    const resetForm = () => {
        setBirthdate('');  
        setAge(null);       
    };

    return (
        <div>
            <h3>Enter your birthdate to calculate your age</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="date" 
                    value={birthdate} 
                    onChange={(e) => setBirthdate(e.target.value)} 
                /><br /><br />
                <button type="submit" id="b">Submit</button><br /><br />
                <button type="button" id="b" onClick={resetForm}>Reset</button><br/><br/>
            </form>
            
            {age !== null && (
                <div>
                    <h4>Your Age: {age}</h4>
                </div>
            )}

            <Link to="/" id="f">Back to Home</Link>
        </div>
    );
}

export default Form;
