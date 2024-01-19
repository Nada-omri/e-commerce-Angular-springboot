import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

function AdminLog() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isErrorAlertShown, setIsErrorAlertShown] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all fields are filled
    if (username.trim() === '' || password.trim() === '') {
      setIsFormSubmitted(true);
      setIsErrorAlertShown(true);

      // Hide error alert after 3 seconds
      setTimeout(() => {
        setIsErrorAlertShown(false);
      }, 3000);

      alert('Please fill in all fields');
      return;
    }

    // Perform login validation
    handleLogin();
  };

  const handleLogin = () => {
    // Verification of username and password
    if (username === 'admin' && password === '00000') {
      // Successful authentication
      window.location.href = '/login'; // Redirect to the desired page after successful authentication
    } else {
      setIsFormSubmitted(true);
      setIsErrorAlertShown(true);

      // Hide error alert after 3 seconds
      setTimeout(() => {
        setIsErrorAlertShown(false);
      }, 3000);

      alert('Incorrect username or password');
    }
  };

  return (
    <div className="admin">
      <h1 className="adminName">Welcome Admin!</h1>
      <div className="containerxx">
        <br />
        <label htmlFor="username">Your Name:</label> <br />
        <input
          className={isFormSubmitted && username.trim() === '' ? 'emptyField' : 'fo-fo'}
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nom d'utilisateur"
        />
        <label htmlFor="password">Your Password:</label> <br />
        <input
          className={isFormSubmitted && password.trim() === '' ? 'emptyField' : 'fo-fo'}
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
        />
        <br />
        <button className="button" onClick={handleSubmit}>
          Connect
        </button>
        {isErrorAlertShown && <div className="errorAlert">Incorrect username or password</div>}
      </div>
    </div>
  );
}

export default AdminLog;

