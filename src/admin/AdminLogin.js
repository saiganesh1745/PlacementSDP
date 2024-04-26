import React, { useState } from 'react';
import './admin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegUser,FaKey } from "react-icons/fa";
import config from '../config';


export default function AdminLogin({ onAdminLogin }) {

  const notifySuccess = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/checkadminlogin`, formData);
      if (response.data != null) 
      {
        onAdminLogin(); 

        localStorage.setItem('admin', JSON.stringify(response.data));
        notifySuccess("Login Successful!");
        navigate("/adminhome");
      } 
      else 
      {
        setMessage("Login Failed");
        notifyError("An error occurred. Please try again later.");

        setError("");
      }
    } catch (error) {
      setMessage("");
      notifyError(error.message);

      // setError(error.message);
    }
  };

  return (
    // <div>
    //   <h3 align="center"><u>Admin Login</u></h3>
    //   {
    //     message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{color:"red"}}>{error}</h4>
    //   }
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label>Username</label>
    //       <input type="text" name="username" value={formData.username} onChange={handleChange} required />
    //     </div>
    //     <div>
    //       <label>Password</label>
    //       <input type="password" name="password" value={formData.password} onChange={handleChange} required />
    //     </div>
    //     <button type="submit" className="button3">Login</button>
    //   </form>
    // </div>
<div className='body9'>
<div class="container9" >
	<div class="screen">
		<div class="screen__content">
			<form class="login" onSubmit={handleSubmit} >
        <h3>Admin Login</h3>
				<div class="login__field">
        <span class="input-item">
         <FaRegUser />
         </span>&nbsp;&nbsp;
					<input type="text" name="username" value={formData.username} onChange={handleChange} required placeholder="User name / Email" />
				</div>
				<div class="login__field">
        <span class="input-item">
         <FaKey />
         </span>&nbsp;&nbsp;
          <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="Password" />
				</div>
				<button class="button login__submit">
					<span class="button__text">Log In Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
</div>
    
  );
}

