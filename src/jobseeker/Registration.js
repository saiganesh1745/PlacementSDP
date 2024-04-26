// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// export default function Registration() 
// {

//   const notifySuccess = (msg) => toast.success(msg);
//   const notifyError = (msg) => toast.error(msg);

//   //formData state variable is initialized with all required keys and empty values
//   const [formData, setFormData] = useState({
//     fullname: '',
//     gender: '',
//     dateofbirth: '',
//     email: '',
//     password: '',
//     location: '',
//     contact: ''
//   });

//   //message state variable
//   const [message, setMessage] = useState('');
//   //error state variable
//   const [error, setError] = useState('');

//   const handleChange = (e) =>   // e - event
//   {
    
//     setFormData({...formData, [e.target.id]: e.target.value});
    
//     // It updates the state `formData` by adding or updating a property with a key equal to 
//     //the ID of the input field 
//     //that triggered the change event (e.target.id). The value of this property is 
//     //set to the new value entered in that input field (e.target.value).
//   };

//   const handleSubmit = async (e) => 
//   {
//     e.preventDefault();
//     try 
//     {
//       const response = await axios.post('http://localhost:2032/insertjobseeker', formData);
//       if (response.status === 200) 
//       {
//         //It will set all fields to ""
//         setFormData({
//           fullname: '',
//           gender: '',
//           dateofbirth: '',
//           email: '',
//           password: '',
//           location: '',
//           contact: ''
//         });
//       }
//       // setMessage(response.data);
//       notifySuccess("registered Successful!");
//       setError(''); //set error to ""
//     } 
//     catch(error) 
//     {
//       // setError(error.response.data);
//       notifyError(error.response.data);
//       notifyError("An Error Occurred");
//       setMessage(''); //set message to ""
//     }
//   };
  
//   return (
//     <div className='body1'>
//       {/* <h3 align="center"><u>Job Seeker Registration</u></h3> */}
//       {/* {
//         message ? <h4 align="center">{message}  </h4> : <h4 align="center">{error}</h4>
//       } */}
//      <form onSubmit={handleSubmit} class="form1">
// <div class="title">Student Registration</div>
//       <div class="title">Welcome</div>
//       <div class="subtitle">Let's create your account!</div>
//       <br/>
//         <div>
//           <label class="label">Full Name</label>
//           <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} required  placeholder='Full Name'/>
//         </div>
//         <div>
//           <label class="label">Gender</label>
//           <select id="gender" value={formData.gender} onChange={handleChange} required>
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="others">Other</option>
//           </select>
//         </div>
//         <div>
//           <label class="label">Date of Birth</label>
//           <input type="date" id="dateofbirth" value={formData.dateofbirth} onChange={handleChange} required />
//         </div>
//         <div>
//           <label class="label">Email</label>
//           <input type="email" id="email" value={formData.email} onChange={handleChange} required placeholder='E-mail' />
//         </div>
//         <div>
//           <label class="label">Password</label>
//           <input type="password" id="password" value={formData.password} onChange={handleChange} required placeholder='password' />
//         </div>
//         <div>
//           <label class="label">Location</label>
//           <input type="text" id="location" value={formData.location} onChange={handleChange} required placeholder='location' />
//         </div>
//         <div>
//           <label class="label" >Contact</label>
//           <input type="number" id="contact" pattern="[6789][0-9]{9}" placeholder="Must be 10 digits" value={formData.contact} onChange={handleChange} required />
//         </div>
//         <button type="submit" className='submit' >Register</button>
//       </form>


// </div>
//   );
// }






import React, { useState } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import config from '../config';

export default function Registration() {

  const notifySuccess = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);

  const [formData, setFormData] = useState({
    fullname: '',
    gender: '',
    dateofbirth: '',
    email: '',
    password: '',
    location: '',
    contact: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');



  const handleChange = (e) =>   // e - event
  {
    
    setFormData({...formData, [e.target.id]: e.target.value});
    
    // It updates the state `formData` by adding or updating a property with a key equal to 
    //the ID of the input field 
    //that triggered the change event (e.target.id). The value of this property is 
    //set to the new value entered in that input field (e.target.value).
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/insertjobseeker`, formData);
      if (response.status === 200) {
        setFormData({
          fullname: '',
          gender: '',
          dateofbirth: '',
          email: '',
          password: '',
          location: '',
          contact: ''
        });
      }
      setMessage(response.data);
      notifySuccess("registered Successful!");
      setError(''); //set error to ""

    } catch (error) {
      // setError(error.response.data);
      notifyError(error.response.data);
      notifyError("An Error Occurred");
      setMessage(''); //set message to ""
    }
  };
  
  return (
    <div className='img3'>
    <div className="bodyR">
      <div className="containerR">
        <div className="titleR">Registration</div>
        <div className="contentR">
          <form onSubmit={handleSubmit}>
            <div className="user-detailsR">
              <div className="input-boxR">
                <span className="detailsR">Full Name</span>
                <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} placeholder="Enter name" required />
              </div>
              <div className="input-boxR">
                <span className="detailsR">Gender</span>
                <select id="gender" value={formData.gender} onChange={handleChange} required>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Other</option>
                </select>
              </div>
              <div className="input-boxR">
                <span className="detailsR">Date of Birth</span>
                <input type="date" id="dateofbirth" value={formData.dateofbirth} onChange={handleChange} required  />
              </div>
              <div className="input-boxR">
                <span className="detailsR">Email</span>
                <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Enter email" required />
              </div>
              <div className="input-boxR">
                <span className="detailsR">Password</span>
                <input type="password" id="password" value={formData.password} onChange={handleChange} placeholder="Enter password" required />
              </div>
              <div className="input-boxR">
                <span className="detailsR">Location</span>
                <input type="text" id="location" value={formData.location} onChange={handleChange} placeholder="Enter location" required />
              </div>
              <div className="input-boxR">
                <span className="detailsR">Contact</span>
                <input type="number" id="contact" pattern="[6789][0-9]{9}" value={formData.contact} onChange={handleChange} placeholder="Enter number" maxLength={10} required  />
              </div>
            </div>
            <div className="">
              <button type="submit" className='buttonR' >Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
