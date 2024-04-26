import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams
import './admin.css';
import config from '../config';

export default function ViewJobSeekerProfile() {
  const [jobseekerData, setJobSeekerData] = useState(null);
  const { email } = useParams(); // Extract email from URL parameters

  useEffect(() => {
    const fetchJobSeekerData = async () => {
      try {
        const response = await axios.get(`${config.url}/viewjobseekerprofile/${email}`);
        setJobSeekerData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    if (email) {
      fetchJobSeekerData();
    }
  }, [email]);


  if (!email) {
    return null;
  }

  return (
    jobseekerData ? (
      <div className='bodyP'>
        <label htmlFor="slider"></label>
    
        <div className="wrapper">
    
    
          <div className="profile">
            <img src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w" className="thumbnail" alt="Profile Thumbnail" />
            <p className='title'><strong>Full Name:</strong> {jobseekerData.fullname}</p>
         <p className='description'><strong>Gender:</strong> {jobseekerData.gender}</p>
           <p className='description' ><strong>Date of Birth:</strong> {jobseekerData.dateofbirth}</p>
           <p className='description' ><strong>Email:</strong> {jobseekerData.email}</p>
           <p className='description' ><strong>Location:</strong> {jobseekerData.location}</p>
           <p className='description' ><strong>Contact:</strong> {jobseekerData.contact}</p>
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

