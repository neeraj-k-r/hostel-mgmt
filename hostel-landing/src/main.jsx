import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/LandingPage';
import StaffAuth from './pages/StaffAuth';
import StudentAuth from './pages/StudentAuth';
import StaffLogin from './pages/StaffLogin';
import StaffSignup from './pages/StaffSignup';
import StaffDashboard from './pages/StaffDashboard';
import StudentSignup from './pages/StudentSignup';
import StudentLogin from './pages/StudentLogin';
import StudentDashboard from './pages/StudentDashboard';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/staff-auth" element={<StaffAuth/>}/>
        <Route path="/student-auth" element={<StudentAuth/>}/>
        <Route path="/staff-login" element={<StaffLogin/>}/>
        <Route path="/staff-signup" element={<StaffSignup/>}/>
        <Route path="/staff-dashboard" element={<StaffDashboard/>}/>
        <Route path="/student-signup" element={<StudentSignup/>}/>
        <Route path="/student-login" element={<StudentLogin/>}/>
        <Route path="/student-dashboard" element={<StudentDashboard/>}/>
 
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

