// import React, { useState } from 'react';
// import './recruiter.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


// export default function RecruiterLogin({onRecruiterLogin}) 
// {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });
//   const [message,setMessage] = useState("")
//   const [error,setError] = useState("")

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try 
//     {
//       const response = await axios.post('http://localhost:2032/checkrecruiterlogin', formData);
//       if (response.data != null) 
//       {
//         onRecruiterLogin();

//         localStorage.setItem('recruiter', JSON.stringify(response.data));

//         navigate("/recruiterhome");
//       } 
//       else 
//       {
//         setMessage("Login Failed")
//         setError("")
//       }
//     } 
//     catch (error) 
//     {
//       setMessage("")
//       setError(error.message)
//     }
//   };

//   return (
//     <div>
//       <h3 align="center"><u>Recruiter Login</u></h3>
//       {
//         message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
//       }
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username</label>
//           <input type="text" name="username" value={formData.username} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Password</label>
//           <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//         </div>
//         <button type="submit" className="button">Login</button>
//       </form>
//     </div>
//   );
// }
 

import React, { useState } from 'react';
import './recruiter.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaRegUser,FaKey } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from 'react-google-recaptcha';
import config from '../config';


export default function RecruiterLogin({onRecruiterLogin}) 
{

  const notifySuccess = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);

  
  

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/checkrecruiterlogin`, formData);
      if (response.data != null) 
      {
        onRecruiterLogin();

        localStorage.setItem('recruiter', JSON.stringify(response.data));
        notifySuccess("Login Successful!");
        navigate("/recruiterhome");
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
      setError(error.message)
    }
  };

  const onReCAPTCHAChange = (token) => {
    console.log("reCAPTCHA token:", token);
    // You can handle the token here or use it in your form submission
  };

  return (
    <div className='body'>
      <h3 align="center"><u>Recruiter Login</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
      <form onSubmit={handleSubmit} className='form'>
        
      <div class="con">
   
   <header class="head-form">
      <h2>Log In</h2>
     
      <p>login here using your username and password</p>
   </header>
  
   <br/>
   <div class="field-set">
     

         <span class="input-item">
         <FaRegUser />
         </span>
  
         <input class="form-input" type="text" name="username" value={formData.username} onChange={handleChange} placeholder="UserName" required/>
     
      <br/>

      <span class="input-item">
      <FaKey />
       </span>
      <input class="form-input" type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required/>
     
      <ReCAPTCHA
          sitekey="6Lf-GWYpAAAAAEGEn3FdyMXvxLhc5Y-_uzFzCXtE"
          onChange={onReCAPTCHAChange} align="center"
        /><br/>
     
      <button class="log-in" className='button4' >Log In </button>
   </div>
     
  </div>


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
 