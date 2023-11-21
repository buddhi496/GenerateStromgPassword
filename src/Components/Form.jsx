import React, { useState } from 'react';
import './form.css';

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const [passwordLength, newPasswordLength] = useState(8);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue('');
    console.log('Form submitted with value:', inputValue);
  };

  const yourPassword = () => {
    const numbers = '1234567890';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const specialChar = '!@#$%^&*()-=_+[]{}|;:,.<>?';

    const addAll = numbers + upperCase + lowerCase + specialChar;

    let shuffledAll = addAll
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');

    let newPassword = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random( ) * shuffledAll.length);
        newPassword += addAll[randomIndex]
    }

    setInputValue(newPassword);
  }

  const handleCopy = () => {
    // Create a new textarea element to copy the password
    const textarea = document.createElement('textarea');
    textarea.value = inputValue;

    // Make sure it's not visible
    textarea.style.position = 'fixed';
    textarea.style.opacity = 0;

    // Append the textarea to the body
    document.body.appendChild(textarea);

    // Select and copy the password
    textarea.select();
    document.execCommand('copy');

    // Clean up and remove the textarea
    document.body.removeChild(textarea);

    alert('Password copied to clipboard:', inputValue);
  };

  return (
    <form >
      <label htmlFor="simpleInput">Generate strong password:</label>
      <input
        type="text"
        id="simpleInput"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className="generate">
        <button onClick={handleSubmit} type="submit">Submit</button>
        <button onClick={yourPassword} type="button">Generate</button>
        <button onClick={handleCopy} type="button">Copy</button>
      </div>
      
    </form>
  );
};

export default Form;