import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './style.css';
import JobSeekerLogin from './../jobseeker/JobSeekerLogin';
import Registration from './../jobseeker/Registration';
import Contact from './Contact';
import AdminLogin from './../admin/AdminLogin';
import RecruiterLogin from '../recruiter/RecruiterLogin';
import PageNotFound from './PageNotFound';

export default function MainNavBar({ onAdminLogin,onJobSeekerLogin,onRecruiterLogin }) {
  return (
    <div>
      <hi className='nav'>
      <div className="menu">
          <div className="logo">
          <a href="/">CPMS</a>
          </div>
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/registration">Job Seeker Registration</Link></li>
          <li className="dropdown">
            <Link>Login</Link>
            <div className="dropdown-content">
              <Link to="/jobseekerlogin">Job Seeker Login</Link>
              <Link to="/recruiterlogin">Recruiter Login</Link>
              <Link to="/adminlogin">Admin Login</Link>
            </div>
          </li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        </div>
      </hi>

      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/about" element={<About/>} exact />
        <Route path="/registration" element={<Registration/>} exact />
        <Route path="/jobseekerlogin" element={<JobSeekerLogin onJobSeekerLogin={onJobSeekerLogin}/>} exact />
        <Route path="/adminlogin" element={<AdminLogin onAdminLogin={onAdminLogin}/>} exact />
        <Route path="/recruiterlogin" element={<RecruiterLogin onRecruiterLogin={onRecruiterLogin}/>} exact />
        <Route path="/contact" element={<Contact/>} exact />
        <Route path="*" element={<PageNotFound/>} exact />
      </Routes>
    </div>
  );
}