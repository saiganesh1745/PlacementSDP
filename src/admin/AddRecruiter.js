// import React, { useState } from 'react';
// import axios from 'axios';


// export default function AddRecruiter() 
// {
//   //formData state variable
//   const [formData, setFormData] = useState({
//     fullname: '',
//     gender: '',
//     dateofbirth: '',
//     company: '',
//     username: '',
//     email: '',
//     address: '',
//     contact: ''
//   });

//   //message state variable
//   const [message, setMessage] = useState('');
//   //error state variable
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     const newValue = id === 'fullname' ? value.toUpperCase() : value;
//     setFormData({ ...formData, [id]: newValue });
//   };
  

//   const handleSubmit = async (e) => 
//   {
//     e.preventDefault();
//     try 
//     {
//       const response = await axios.post('http://localhost:2032/addrecruiter', formData);
//       if (response.status === 200) 
//       {
//         setFormData({
//           fullname: '',
//           gender: '',
//           dateofbirth: '',
//           company: '',
//           username: '',
//           email: '',
//           address: '',
//           contact: ''
//         });
//       }
//       setMessage(response.data);
//       setError('');
//     } 
//     catch(error) 
//     {
//       setError(error.response.data);
//       setMessage('');
//     }
//   };
  
//   return (
//     <div>
//       <h3 align="center"><u>Add Recruiter</u></h3>
//       {
//         message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{color:"red"}}>{error}</h4>
//       }
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Full Name</label>
//           <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} onKeyUp={handleChange} required />
//         </div>
//         <div>
//           <label>Gender</label>
//           <select id="gender" value={formData.gender} onChange={handleChange} required>
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
//         <div>
//           <label>Date of Birth</label>
//           <input type="date" id="dateofbirth" value={formData.dateofbirth} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Company Name</label>
//           <input type="text" id="company" value={formData.company} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Username</label>
//           <input type="text" id="username" value={formData.username} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Email</label>
//           <input type="email" id="email" value={formData.email} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Address</label>
//           <textarea type="text" id="address" value={formData.address} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Contact</label>
//           <input type="number" id="contact" value={formData.contact} onChange={handleChange} required />
//         </div>
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// }

import React, { useState } from 'react';
import axios from 'axios';
import './admin.css'; // Import the provided CSS file
import config from '../config';

export default function AddRecruiter() {
  const [formData, setFormData] = useState({
    fullname: '',
    gender: '',
    dateofbirth: '',
    company: '',
    username: '',
    email: '',
    address: '',
    contact: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    const newValue = id === 'fullname' ? value.toUpperCase() : value;
    setFormData({ ...formData, [id]: newValue });
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/addrecruiter`, formData);
      if (response.status === 200) 
      {
        setFormData({
          fullname: '',
          gender: '',
          dateofbirth: '',
          company: '',
          username: '',
          email: '',
          address: '',
          contact: ''
        });
      }
      setMessage(response.data);
      setError('');
    } 
    catch(error) 
    {
      setError(error.response.data);
      setMessage('');
    }
  };

  return (
    
    <div className="main-w3layouts wrapper">
      <h1>ADD Recruiter</h1>
      
          <form onSubmit={handleSubmit} align="center">
          <input className="text" type="text" id="fullname" placeholder="Username" value={formData.fullname} onChange={handleChange} onKeyUp={handleChange} required />
          <select className="checkbox"  type="select" placeholder="gender" id="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input className="text" type="date" placeholder="date of birth" id="dateofbirth" value={formData.dateofbirth} onChange={handleChange} required />
          <input className="text" type="text" id="company" placeholder="company name"value={formData.company} onChange={handleChange} required />
          <input className="text" type="text" placeholder="user name" id="username" value={formData.username} onChange={handleChange} required />
          <input className="text" type="email" id="email" placeholder="email" value={formData.email} onChange={handleChange} required />

          <input className="text" placeholder="address" type="text" id="address" value={formData.address} onChange={handleChange} required />
          <input className="text" type="text" placeholder="contact" id="contact" value={formData.contact} onChange={handleChange} required />
<br/>

            <button type="submit" className='button3' >Add</button>
          </form>
    </div>
  );
}


