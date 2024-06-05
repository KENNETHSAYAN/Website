import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import http from '../axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [registerData, setRegisterData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: ''
  })
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [passwordConfirmText, setPasswordConfirmText] = useState("");
  const [emailColor, setEmailColor] = useState("gray");
  const [passwordColor, setPasswordColor] = useState("gray");
  const [passwordConfirmColor, setPasswordConfirmColor] = useState("gray");
  const regexTest = registerData.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  // const [showPassword, setShowPassword] = useState(false);
  const regexPassword = registerData.password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})");

  const notify = () => toast.success('Check your Email for Activation', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true
});
const notifyerror = () => toast.error('The email Inputted is already registered or The Email and Password is too similar', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true
});
const notifyerrorpass = () => toast.error('Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character.', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true
});
const notifyerrorpassmatch = () => toast.error('Make sure that the Password is match', {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: true
});
const notifyerroremailmatch = () => toast.error('Make sure that the Email is Correct', {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: true
});

  const handleSignUp = (event) => {
    event.preventDefault()
    setIsDisabled(!isDisabled);
    if (regexPassword && registerData.confirm_password===registerData.password && regexTest) {
        http.post('auth/users/', registerData).then((response) => {
            // console.log(response.data)
            // // setId(response.data.id)
            notify()
            setRegisterData({
                ...registerData,
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                confirm_password: ''
            })
            setIsDisabled(false);
        }).catch((error) => {
          notifyerror()
          setIsDisabled(false);
        })
      } else if (registerData.confirm_password!==registerData.password) {
        notifyerrorpassmatch();
      }else if (!regexTest) {
        notifyerroremailmatch();
    } else {
      notifyerrorpass();
      setIsDisabled(false);
    }
}

  useEffect(() => {
    if (regexTest) {
      setEmailColor("gray");
      setEmailText("");
    } else if (registerData.email.length === 0) {
      setEmailColor("gray");
      setEmailText("");
    } else {
      setEmailColor("failure");
      setEmailText("Please enter a valid email address.");
    }
  }, [registerData.email, regexTest]);

  useEffect(() => {
    if (registerData.password.length > 0 && registerData.password.length <= 8) {
      setPasswordColor("failure");
      setPasswordText("Your Password is Weak");
    } else if (registerData.password.length >= 8 && registerData.password.length <= 15) {
      setPasswordColor("warning");
      setPasswordText("Your Password is Moderate");
    } else if (registerData.password.length >= 15) {
      setPasswordColor("success");
      setPasswordText("Your Password is Strong");
    } else {
      setPasswordColor("gray");
      setPasswordText("");
    }
  }, [registerData.password]);

  useEffect(() => {
    if (registerData.confirm_password === registerData.password) {
      setPasswordConfirmColor("gray");
      setPasswordConfirmText("");
    } else if (registerData.confirm_password.length === 0) {
      setPasswordConfirmColor("gray");
      setPasswordConfirmText("");
    } else {
      setPasswordConfirmColor("failure");
      setPasswordConfirmText("Password didn't match!");
    }
  }, [registerData.confirm_password, registerData.password]);

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        marginLeft: "120px",
      }}
    >
      <div style={{ textAlign: "center", marginRight: "50px" }}>
        <img
          src="/assets/logo.png"
          style={{ width: "300px", height: "300px" }}
          alt="Todo List"
        />
        <p
          style={{
            color: "black",
            fontSize: "30px",
            fontWeight: "bold",
            marginTop: "20px",
          }}
        >
          Edukada
        </p>
      </div>

      <div style={{ textAlign: "left", marginLeft: "20px" }}>
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              color: "Black",
              fontSize: "30px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            CREATE ACCOUNT
          </h1>
        </div>

        <form style={{ margin: "20px", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="First Name"
              required
              value={registerData.first_name}
              onChange={(event) => setRegisterData({...registerData, first_name: event.target.value})}
              style={{ flex: "1", height: "40px", fontSize: "16px", width: "500px" }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Last Name"
              required
              value={registerData.last_name}
              onChange={(event) => setRegisterData({...registerData, last_name: event.target.value})}
              style={{ flex: "1", height: "40px", fontSize: "16px" }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <input
              type="email"
              placeholder="Email Address"
              style={{ flex: "1", height: "40px", fontSize: "16px" }}
              required
              color={emailColor}
              value={registerData.email}
              onChange={(event) => setRegisterData({...registerData, email: event.target.value})}
            />
          </div>
          <p style={{ color: emailColor, marginLeft: "2px" , marginTop:"-10px", marginBottom: "10px" }}>{emailText}</p>

          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <input
              type="password"
              placeholder="Password"
              style={{ flex: "1", height: "40px", fontSize: "16px" }}
              required
              color={passwordColor}
              value={registerData.password}
              onChange={(event) => setRegisterData({...registerData, password: event.target.value})}
            />
          </div>
          <p style={{ color: passwordColor, marginLeft: "2px" , marginTop:"-10px", marginBottom: "10px"}}>{passwordText}</p>
          
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px"  }}>
            <input
              type="password"
              placeholder="Confirm Password"
              style={{ flex: "1", height: "40px", fontSize: "16px" }}
              required
              color={passwordConfirmColor}
              value={registerData.confirm_password}
              onChange={(event) => setRegisterData({...registerData, confirm_password: event.target.value})}
            />
          </div>
          <p style={{ color: passwordConfirmColor, marginLeft: "2px", marginTop:"-10px" , marginBottom: "10px"}}>{passwordConfirmText}</p>

          <div style={{ textAlign: "center", marginTop: "30px" }}>
          <Link to="" style={{ textDecoration: "none" }}> {/* Add Link component */}
            <button
            onClick={handleSignUp}
              style={{
                padding: "10px",
                backgroundColor: "#45b6fe",
                color: "white",
                border: "none",
                borderRadius: "20px",
                cursor: "pointer",
                width: "30%",
              }}
            >
              Sign Up
            </button>
            </Link>
          </div>

          <div style={{ textAlign: "center", marginTop: "10px", fontSize: "14px" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ textDecoration: "underline", color: "blue" }}> {/* Replace anchor tag with Link */}
              Sign in
            </Link>
            
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
}
