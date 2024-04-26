// import React from 'react';
// import { Route, Routes, Link, useNavigate } from 'react-router-dom';
// import './admin.css';

// import AdminHome from './AdminHome';
// import ViewJobSeekers from './ViewJobSeekers';
// import AddRecruiter from './AddRecruiter';
// import ViewRecruiters from './ViewRecruiters';
// import ChangeAdminPwd from './ChangeAdminPwd';
// import ViewJobSeekerProfile from './ViewJobSeekerProfile';

// export default function AdminNavBar() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('isAdminLoggedIn');
//     localStorage.removeItem('admin');
//     navigate('/adminlogin');
//     window.location.reload()
//   };

//   return (
//     <div>
//       <nav>
//         <ul>
//           <li><Link to="/adminhome">Home</Link></li>
//           <li><Link to="/changeadminpwd">Change Password</Link></li>
          // <li className="dropdown">
          //   <Link>Job Seeker</Link>
          //   <div className="dropdown-content">
          //     <Link to="/viewjobseekers">View Job Seekers</Link>
          //   </div>
          // </li>
//           <li className="dropdown">
//             <Link>Recruiter</Link>
//             <div className="dropdown-content">
//                  <Link to="/addrecruiter">Add Recruiter</Link>
//                  <Link to="/viewrecruiters">View Recruiters</Link>
//             </div>
//           </li>
//           <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/adminhome" element={<AdminHome />} exact />
//         <Route path="/viewjobseekers" element={<ViewJobSeekers />} exact />
//         <Route path="/addrecruiter" element={<AddRecruiter />} exact />
//         <Route path="/viewrecruiters" element={<ViewRecruiters/>} exact />
//         <Route path="/changeadminpwd" element={<ChangeAdminPwd/>} exact />
//         <Route path="/viewjobseekerprofile/:email" element={<ViewJobSeekerProfile/>} exact />
//       </Routes>
//     </div>
//   );
// }

import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import './admin.css';

import AdminHome from './AdminHome';
import ViewJobSeekers from './ViewJobSeekers';
import AddRecruiter from './AddRecruiter';
import ViewRecruiters from './ViewRecruiters';
import ChangeAdminPwd from './ChangeAdminPwd';
import ViewJobSeekerProfile from './ViewJobSeekerProfile';
import { FaSignOutAlt } from 'react-icons/fa';

export default function AdminNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate('/adminlogin');
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
          <li><Link to="/adminhome">Home</Link></li>
          <li><Link to="/changeadminpwd">Change Password</Link></li>
          <li className="dropdown">
            <Link>Job Seeker</Link>
            <div className="dropdown-content">
              <Link to="/viewjobseekers">View Job Seekers</Link>
            </div>
          </li>
          <li className="dropdown">
            <Link>Recruiter</Link>
            <div className="dropdown-content">
                 <Link to="/addrecruiter">Add Recruiter</Link>
                 <Link to="/viewrecruiters">View Recruiters</Link>
            </div>
          </li>
          <li><a className="logoutButton" onClick={handleLogout}><FaSignOutAlt /></a></li> 
        </ul>
        </div>
      </hi>

      <Routes>
        <Route path="/adminhome" element={<AdminHome />} exact />
        <Route path="/viewjobseekers" element={<ViewJobSeekers />} exact />
        <Route path="/addrecruiter" element={<AddRecruiter />} exact />
        <Route path="/viewrecruiters" element={<ViewRecruiters/>} exact />
        <Route path="/changeadminpwd" element={<ChangeAdminPwd/>} exact />
        <Route path="/viewjobseekerprofile/:email" element={<ViewJobSeekerProfile/>} exact />
      </Routes>
    </div>
  );
}

