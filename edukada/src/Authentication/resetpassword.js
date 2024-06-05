import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Resetpassword() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSendCode = () => {
    if (!email.trim()) {
      alert('Please enter your email address.');
      return;
    }
  
    console.log('Code sent to:', email);
  };

  const handleResetPassword = () => {
    if (!code.trim() || !newPassword.trim() || !confirmPassword.trim()) {
      alert('Please fill in all fields.');
      return;
    }
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    
    console.log('Password reset successfully');
    // Redirect to the login page
    window.location.href = "/login";
  };

  return (
    <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginLeft:'100px' }}>
      <div style={{ textAlign: 'center', marginRight: '50px' }}>
        <img src='/assets/logo.png' style={{ width: '300px', height: '300px' }} />
        <p style={{ color: 'black', fontSize: '30px', fontWeight: 'bold', marginTop: '20px' }}>Edukada</p>
      </div>
      <div style={{ textAlign: 'left', marginLeft: '20px' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'black', fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>RESET PASSWORD</h1>
        </div>
        <form style={{ margin: '20px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <input type="text" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={{ flex: '1', height: '40px', fontSize: '16px' }} />
            <button type="button" onClick={handleSendCode} style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#45b6fe', color: 'white', border: 'none', borderRadius: '20px', marginLeft: '10px' }}>Send Code</button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <input type="text" placeholder="Code" value={code} onChange={(e) => setCode(e.target.value)} style={{ flex: '1', height: '40px', fontSize: '16px' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} style={{ flex: '1', height: '40px', fontSize: '16px' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <input type="password" placeholder="Re-Enter Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{ flex: '1', height: '40px', fontSize: '16px' }} />
          </div>
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <button type="button" onClick={handleResetPassword} style={{ padding: '10px 20px', fontSize: '18px', backgroundColor: '#45b6fe', color: 'white', border: 'none', borderRadius: '20px',}}>Reset Password</button>
          </div>
          {/* Link to navigate back to the login page */}
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Link to="/login" style={{ color: '#45b6fe', fontSize: '16px', textDecoration: 'none' }}>Back to Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}