import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import './jobseeker.css'
import { FaLock,FaUser } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from '../config';


export default function JobSeekerLogin({onJobSeekerLogin}) 
{

  const notifySuccess = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/checkjobseekerlogin`, formData);
      if (response.data != null) 
      {
        onJobSeekerLogin();

        localStorage.setItem('jobseeker', JSON.stringify(response.data));

        notifySuccess("Login Successful!");
        navigate("/jobseekerhome");
      } 
      else 
      {
        setMessage("Login Failed")
        notifyError("An error occurred. Please try again later.");
        setError("")
      }
    } 
    catch (error) 
    {
      notifyError(error.message);
      setMessage("")
      // setError(error.message)
    }
  };

  const onReCAPTCHAChange = (token) => {
    console.log("reCAPTCHA token:", token);
    // You can handle the token here or use it in your form submission
  };

  return (
//     <div>
//       <h3 align="center"><u>Job Seeker Login</u></h3>
//       {
//         message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{color:"red"}}>{error}</h4>
//       }
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email</label>
//           <input type="email" id="email" value={formData.email} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Password</label>
//           <input type="password" id="password" value={formData.password} onChange={handleChange} required />
//         </div>
//         <button type="submit" className="button">Login</button>
//       </form>
// </div>

<div className='bg'>
      <h3 align="center"><u>Student Login</u></h3>
      {message ? <h4 align="center" style={{color:"red"}}>{message}</h4> : <h4 align="center">{error}</h4>}
      <form onSubmit={handleSubmit} className='formj'>
        <div>
          <label>Email</label>
          <FaUser />&nbsp;&nbsp;
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />&nbsp;
        </div>
        <div>
          <label>Password</label>
          <FaLock />&nbsp;&nbsp;
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />&nbsp;
          

          
        </div>
        <ReCAPTCHA
          sitekey="6Lf-GWYpAAAAAEGEn3FdyMXvxLhc5Y-_uzFzCXtE"
          onChange={onReCAPTCHAChange} align="center"
        /><br/>
        <button type="submit" className="button3">Login</button><br/><br/>

        <p>
          New User ?   <a href="/registration" className="button2">Register Here</a>
        </p>

      </form>

      <footer className='footer'>
    <div>
      <span>© 2023 <a href="/" class="hover:underline">Ganesh</a>. All Rights Reserved.
    </span>
    <ul>
        <li>
            <a href="/about">About</a>
        </li>
        <li>
            <a href="/contact">Contact</a>
        </li>
    </ul>
    </div>
</footer>

    </div>
  );
}