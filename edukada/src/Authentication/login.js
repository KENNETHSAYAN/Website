import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie'; // For secure token storage
import { Link, useNavigate } from 'react-router-dom'; // Import Link from React Router
import http from '../axios';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [isDelayed, setIsDelayed] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();
  const tokens = Cookies.get('auth_token');

  useEffect(() => {
    if (tokens) {
        navigate("/Profile");
    }
}, [tokens])
const notifyerror = () => toast.error('Login Failed!! Incorrect email or password or Make sure that the email is activated', {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: true
});
const notifysuccess = () => toast.success('Login Successfully', {
  position: "top-center",
  autoClose: 1000,
  hideProgressBar: true
});
  // State variables for form fields and remember me checkbox
  const [data, setData] = useState({
    email: '',
    password: ''
})
  const [rememberMe, setRememberMe] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Perform form validation
    if (!data.email || !data.password) {
      alert('Please fill in all fields.');
      return; // Exit the function early if any field is empty
    }

    // Here you can add additional validation if needed
    setIsDisabled(!isDisabled);
  http.post('auth/token/login', data).then(response => {
      if (response.status === 200) {
        notifysuccess();
        setIsDelayed(true);
        setTimeout(() => {
            Cookies.set('auth_token', response.data.auth_token, { expires: 1, secure: true }); // Set appropriate expiration and secure flag
            navigate('/Profile')
        }, 2000); // Delay of 3 seconds (adjust as needed)
      }
      setIsDisabled(false);
  }).catch(() => {
    notifyerror() 
    setIsDisabled(false);})

    // If remember me is checked, save the email and password to local storage
    if (rememberMe) {
      Cookies.set('rememberedEmail', data.email, { expires: 1, secure: true });
      Cookies.set('rememberedPassword', data.password, { expires: 1, secure: true });
    }

    // Redirect to Addlist path upon successful login
    // Replace '/addlist' with your actual Addlist path
    // window.location.href = '/addlist'; // Redirect to Addlist path
  };

  // Function to handle the "Remember me" checkbox change
  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  // Effect to load remembered username and password from local storage
  useEffect(() => {
    const rememberedEmail = Cookies.get('rememberedEmail');
    const rememberedPassword = Cookies.get('rememberedPassword');

    if (rememberedEmail && rememberedPassword) {
      setData({...data, email: rememberedEmail});
      setData({...data, password: rememberedPassword});
      setRememberMe(true);
    }
  }, []);

  return (
    <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginLeft: '100px' }}>
      <img src='/assets/logo.png' style={{ width: '300px', height: '300px', marginTop: '30px' }} />
      <p style={{ color: 'black', fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginTop: '50px' }}>Edukada</p>
      
      {/* Login Form */}
      <form className="flex max-w-lg flex-col gap-4" style={{ marginTop: '30px', width: '600px' }} onSubmit={handleSubmit}>
        <input type="email" id="email" name="Email" placeholder="Enter your Email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} required style={{ marginBottom: '10px', padding: '10px', width:'550px' }} />
        <input type="password" id="password" name="password" placeholder="Enter your password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} required style={{ marginBottom: '10px', padding: '10px', width:'550px' }} />
        
      <div style={{ display: 'flex', gap: 340, width: 600, justifyContent: 'start', marginRight: 200}}>
        <div>
          <input type="checkbox" id="remember" name="remember" checked={rememberMe} onChange={handleRememberMeChange} />
          <label htmlFor="remember">Remember me</label>
       </div>

        {/* Forgot Password */}
        <div >
          <Link to="/Reset" style={{ textDecoration: 'underline', color: 'black' }} >Forgot password</Link>
        </div>
     </div>


         {/* Sign In button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <div style={{ textDecoration: 'none', width: '20%' }}>
            <button  disabled={isDisabled} type="submit" onClick={handleSubmit} style={{ padding: '10px', backgroundColor: '#45b6fe', color: 'white', border: 'none', borderRadius: '20px', cursor: 'pointer', width: '100%', marginTop:'30px'}}>Sign In</button>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          Don’t have an account? Create <Link to="/register" style={{ textDecoration: 'underline', color: 'blue' }}>here.</Link> 
        </div>
      </form>
      <ToastContainer
            />
    </div>
  );
}
