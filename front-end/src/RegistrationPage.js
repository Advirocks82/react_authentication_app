import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  const [registrationData, setRegistrationData] = useState({
    username: '',
    password: ''
  });

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/register', registrationData);
      console.log(response.data);
    }
    catch (error) {
      console.log(error);
    }
    setRegistrationData({
      username: '',
      password: '',
    });
  };

  // Basic inline styles for beautification
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f2f5',
      fontFamily: 'Arial, sans-serif',
    },
    formWrapper: {
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '10px',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      width: '350px',
      textAlign: 'center',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '1rem',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
    },
    linkText: {
      marginTop: '1rem',
      fontSize: '0.9rem',
      color: '#007BFF',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h1>Register</h1>
        <form onSubmit={handleRegistrationSubmit}>
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={registrationData.username}
            onChange={handleRegistrationChange}
            style={styles.input}
            required
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={registrationData.password}
            onChange={handleRegistrationChange}
            style={styles.input}
            required
          />
          <button type='submit' style={styles.button}>Register</button>
          <p style={styles.linkText}>
            Already registered?{' '}
            <Link to="/login" style={{ color: '#007BFF' }}>Login Here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
