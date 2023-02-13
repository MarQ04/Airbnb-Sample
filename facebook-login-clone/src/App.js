import React, { useState } from 'react';
import logo from './logo.png'

function FacebookLoginClone() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '400', textAlign: 'center' }}>
        <img src={logo} alt="Facebook Logo" style={{ width: '400px', Height: '200px'}}/>
        <h2>Log in to Facebook</h2>
        <form>
          <div style={{ margin: '1.5rem' }}>
            <input type="email" placeholder="Email address or phone number" value={email} onChange={handleEmailChange} />
          </div>
          <div style={{ margin: '1.5rem' }}>
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          </div>
          <div style={{ margin: '1.5rem' }}>
            <button type="submit">Log In</button>
          </div>
        </form>
        <div>
          <a href="#">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}

export default FacebookLoginClone;
