import React, { useState, useEffect } from 'react';
import { Button, Card } from "flowbite-react";
import { useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import http from '../axios';

export default function Activation() {
  const [isDelayed, setIsDelayed] = useState(false);
  const navigate = useNavigate();
  const { uid, token } = useParams();

  // Responsive layout logic (using media queries)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust breakpoint as needed
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      uid,
      token,
    };
    http.post('auth/users/activation/', userData)
      .then((response) => {
        if (response.status === 204) {
          toast.success("Your account has been activated! You can login now", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
          });
          setIsDelayed(true);
          setTimeout(() => {
            navigate('/Login');
          }, 2000); // Delay of 3 seconds (adjust as needed)
        }
      })
      .catch((error) => {
        toast.error("The Account is Already Activated!!!!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
      });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: isMobile ? 'column' : 'row', // Switch to column layout for mobile
      }}
    >
      <Card
        style={{
          width: isMobile ? '100%' : '50%', // Adjust card width for mobile
          maxWidth: '400px', // Set maximum width for card
          margin: isMobile ? '10px 0' : '0 10px', // Adjust margins for mobile
        }}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontSize: '1.5rem', marginLeft: 10 }}>
          ACCOUNT ACTIVATION !!!
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400" style={{  marginLeft: 10 }}>
          By clicking the activate button below your account will be activated and you will be redirected to the Login Page.
        </p>
        <Button onClick={handleSubmit} style={{ width: isMobile ? '50%' : 'auto', padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '20px', cursor: 'pointer', width: '30%', marginLeft:'120px', marginTop:'40px' }}>
          Activate
        </Button>
      </Card>
      <ToastContainer />
    </div>
  );
}
