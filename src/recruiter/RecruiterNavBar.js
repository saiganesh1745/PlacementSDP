// import React from 'react'
// import { Route, Routes, Link, useNavigate } from 'react-router-dom';
// import './recruiter.css'
// import RecruiterHome from './RecruiterHome';
// import RecruiterProfile from './RecruiterProfile';
// import AddJob from './AddJob';
// import ViewJobs from './ViewJobs';
// import ViewJobApplicants from './ViewJobApplicants';

// export default function RecruiterNavBar() {

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('isRecruiterLoggedIn');
//     localStorage.removeItem('recruiter');

//     navigate('/recruiterlogin');
//     window.location.reload()
//   };

//   return (
//     <div>

//     <nav>
//      <ul>
//      <Link to="/recruiterhome">Home</Link>
//      <Link to="/recruiterprofile">Recruiter Profile</Link>
//      <li className="dropdown">
//             <Link>Jobs</Link>
//             <div className="dropdown-content">
//             <Link to="/addjob">Post a Job</Link>
//             <Link to="/viewjobs">View Jobs</Link>
//             </div>
//     </li>
//     <Link to="/viewjobapplicants">Job Applicants</Link>
//      <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
//      </ul>
//      </nav>

//          <Routes>
//          <Route path="/recruiterhome" element={<RecruiterHome/>} exact/>
//          <Route path="/recruiterprofile" element={<RecruiterProfile/>} exact/>
//          <Route path="/addjob" element={<AddJob/>} exact/>
//          <Route path="/viewjobs" element={<ViewJobs/>} exact/>
//          <Route path="/viewjobapplicants" element={<ViewJobApplicants/>} exact/>
//         </Routes>

//     </div>
//   )
// }

import React from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import './recruiter.css'
import RecruiterHome from './RecruiterHome';
import RecruiterProfile from './RecruiterProfile';
import AddJob from './AddJob';
import ViewJobs from './ViewJobs';
import ViewJobApplicants from './ViewJobApplicants';
import { FaSignOutAlt } from 'react-icons/fa';

export default function RecruiterNavBar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isRecruiterLoggedIn');
    localStorage.removeItem('recruiter');

    navigate('/recruiterlogin');
    window.location.reload()
  };

  return (
    <div>
<hi className='nav'>
      <div className="menu">
          <div className="logo">
          <a href="/">CPMS</a>
          </div>
      <ul>
          <li><Link to="/recruiterhome">Home</Link></li>
          <li><Link to="/recruiterprofile">Recruiter Profile</Link></li>
          <li className="dropdown">
            <Link>Jobs</Link>
            <div className="dropdown-content">
            <Link to="/addjob">Post a Job</Link>
            <Link to="/viewjobs">View Jobs</Link>
            </div>
          </li>
          <li><Link to="/viewjobapplicants">Job Applicants</Link></li>
          <li><a className="logoutButton" onClick={handleLogout}><FaSignOutAlt /></a></li> {/* Use anchor tag with icon */}
        </ul>
        </div>
      </hi>

         <Routes>
         <Route path="/recruiterhome" element={<RecruiterHome/>} exact/>
         <Route path="/recruiterprofile" element={<RecruiterProfile/>} exact/>
         <Route path="/addjob" element={<AddJob/>} exact/>
         <Route path="/viewjobs" element={<ViewJobs/>} exact/>
         <Route path="/viewjobapplicants" element={<ViewJobApplicants/>} exact/>
        </Routes>

    </div>
  )
}