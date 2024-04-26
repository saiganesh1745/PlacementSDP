import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainNavBar from './main/MainNavBar';
import AdminNavBar from './admin/AdminNavBar';
import JobSeekerNavBar from './jobseeker/JobSeekerNavBar';
import RecruiterNavBar from './recruiter/RecruiterNavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isJobSeekerLoggedIn, setIsJobSeekerLoggedIn] = useState(false);
  const [isRecruiterLoggedIn, setIsRecruiterLoggedIn] = useState(false);

  useEffect(() => {
    const adminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    const jobSeekerLoggedIn = localStorage.getItem('isJobSeekerLoggedIn') === 'true';
    const recruiterLoggedIn = localStorage.getItem('isRecruiterLoggedIn') === 'true';
    
    setIsAdminLoggedIn(adminLoggedIn);
    setIsJobSeekerLoggedIn(jobSeekerLoggedIn);
    setIsRecruiterLoggedIn(recruiterLoggedIn);
  }, []);

  const onAdminLogin = () => {
    localStorage.setItem('isAdminLoggedIn', 'true');
    setIsAdminLoggedIn(true);
  };

  const onJobSeekerLogin = () => {
    localStorage.setItem('isJobSeekerLoggedIn', 'true');
    setIsJobSeekerLoggedIn(true);
  };

  const onRecruiterLogin = () => {
    localStorage.setItem('isRecruiterLoggedIn', 'true');
    setIsRecruiterLoggedIn(true);
  };

  return (
    <div className="App">
      {/* <h3 align="center">Campus Placement Management System</h3> */}
      <Router>
        {isAdminLoggedIn ? (
          <>
          <AdminNavBar />
          <ToastContainer />
          </>
        ) : isJobSeekerLoggedIn ? (
          <>
          <JobSeekerNavBar />
          <ToastContainer />
          </>
          ) : isRecruiterLoggedIn ? (
          <>
          <RecruiterNavBar />
          <ToastContainer />
          </>
        ) : (
          <>
          <MainNavBar
            onAdminLogin={onAdminLogin}
            onJobSeekerLogin={onJobSeekerLogin}
            onRecruiterLogin={onRecruiterLogin}
          />
          <ToastContainer />
          </>
        )}
      </Router>
    </div>
  );
}