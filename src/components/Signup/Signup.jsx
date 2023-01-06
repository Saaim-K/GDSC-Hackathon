import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../firebaseConfig/firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'
import './Signup.css'


const Signup = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate()

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const initialcatvalue = 0;
        console.log(user);

        addDoc(collection(db, "users"), {
          username: username, email: email, phonenumber: phonenumber,
          password: password, cart: initialcatvalue, address: address, uid: user.uid
        }).then(() => {
          setSuccessMsg('New user added successfully, you will now be automatically redirected to home page.')
          setUserName('')
          setPassword('')
          setEmail('')
          setPassword('')
          setErrorMsg('')

          setTimeout(() => {
            setSuccessMsg('');
            navigate('/login')
          }, 1000)

        })
          .catch((error) => { setErrorMsg(error.message) });
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMsg(error.message);

      })
      // e.reset()
  }

  return (
    <div>
      <Navbar />
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <p>Create Account</p>
          {successMsg && <><div className="success-msg">
            {successMsg}
          </div></>}
          {errorMsg && <><div className="error-msg">
            {errorMsg}
          </div></>}

          <label>Your Name</label>
          <input onChange={(e) => setUserName(e.target.value)}
            type="text" placeholder="First and last name" />

          <label>Mobile Number</label>
          <input onChange={(e) => setPhonenumber(e.target.value)}
            type="tel" placeholder="Mobile Nmber" />

          <label>Email</label>
          <input onChange={(e) => setEmail(e.target.value)}
            type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input onChange={(e) => setPassword(e.target.value)}
            type="password" placeholder="Enter Your Password" />

          <label>Address</label>
          <textarea onChange={(e) => setAddress(e.target.value)}
            type="text" placeholder="Enter your Address" ></textarea>

          <button type="submit">Sign up</button>

          <div>
            <span>Already have an Account?</span>
            <Link to="/login">Sign in</Link>
          </div>

        </form>
      </div>

    </div>
  );
};

export default Signup;

