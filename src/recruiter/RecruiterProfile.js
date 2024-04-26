// import React, { useEffect, useState } from 'react';
// import './recruiter.css';

// export default function RecruiterProfile() {
//   const [recruiterData, setRecruiterData] = useState(null);

//   useEffect(() => {
//     const storedRecruiterData = localStorage.getItem('recruiter');
//     if (storedRecruiterData) {
//       const parsedRecruiterData = JSON.parse(storedRecruiterData);
//       setRecruiterData(parsedRecruiterData);
//     }
//   }, []);

//   return (
//     recruiterData ? (
//       <div className='profile-card'>
//         <p><strong>Full Name:</strong> {recruiterData.fullname}</p>
//         <p><strong>Gender:</strong> {recruiterData.gender}</p>
//         <p><strong>Date of Birth:</strong> {recruiterData.dateofbirth}</p>
//         <p><strong>Company:</strong> {recruiterData.company}</p>
//         <p><strong>Email:</strong> {recruiterData.email}</p>
//         <p><strong>Address:</strong> {recruiterData.address}</p>
//         <p><strong>Contact:</strong> {recruiterData.contact}</p>
//       </div>
//     ) : (
//       <p>No Recruiter Data Found</p>
//     )
//   );
// }

import React, { useEffect, useState } from 'react';
import './recruiter.css';

export default function RecruiterProfile() {
  const [recruiterData, setRecruiterData] = useState(null);

  useEffect(() => {
    const storedRecruiterData = localStorage.getItem('recruiter');
    if (storedRecruiterData) {
      const parsedRecruiterData = JSON.parse(storedRecruiterData);
      setRecruiterData(parsedRecruiterData);
    }
  }, []);

  

return (
  recruiterData ? (
  <div className='bodyP'>
    <label htmlFor="slider"></label>

    <div className="wrapper">


      <div className="profile">
        <img src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w" className="thumbnail" alt="Profile Thumbnail" />
        <p className='title'><strong>Full Name:</strong> {recruiterData.fullname}</p>
     <p className='description'><strong>Gender:</strong> {recruiterData.gender}</p>
       <p className='description' ><strong>Date of Birth:</strong> {recruiterData.dateofbirth}</p>
       <p className='description' ><strong>Company:</strong> {recruiterData.company}</p>
       <p className='description' ><strong>Email:</strong> {recruiterData.email}</p>
       <p className='description' ><strong>Address:</strong> {recruiterData.address}</p>
       <p className='description' ><strong>Contact:</strong> {recruiterData.contact}</p>
      </div>

    </div>

    <div className="concept">concept by 
      <a href="https://www.linkedin.com/in/amaraneni-venkata-sai-ganesh-10b513249/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-dribbble"></i> Amaraneni Ganesh
      </a>
    </div>
  </div>
  ) : (
    <p>No Job Seeker Data Found</p>
)
);
}
