import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

// Placeholder components for the other routes
const StaffLoginPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
    <h1 className="text-4xl font-bold text-gray-800">Staff Login</h1>
    <p className="mt-4 text-gray-600">This is a placeholder page.</p>
  </div>
);

const StudentLoginPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
    <h1 className="text-4xl font-bold text-gray-800">Student Login</h1>
    <p className="mt-4 text-gray-600">This is a placeholder page.</p>
  </div>
);

// The original LandingPage component
function LandingPage() {
  const navigate = useNavigate();

  const handleStaffClick = () => {
    // Navigate to the staff login/dashboard page
    navigate('/staff-login');
  };

  const handleStudentClick = () => {
    // Navigate to the student login/dashboard page
    navigate('/student-login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8 font-sans">
      {/* Main Hostel Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-gray-800 mb-12 drop-shadow-lg">
        <span className="text-blue-600">SNM</span> Hostel
      </h1>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-4xl">

        {/* Staff Card */}
        <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-10 w-full sm:w-96 border-b-4 border-b-blue-500">
          <div className="flex flex-col items-center text-center">
            {/* Staff Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-blue-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.354a4 4 0 110 5.292M15 21H9a3 3 0 01-3-3v-1a2 2 0 012-2h6a2 2 0 012 2v1a3 3 0 01-3 3z"
              />
            </svg>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Staff Portal</h2>
            <p className="text-gray-600 mb-6">
              Access administrative tools, student records, and hostel management features.
            </p>
            <button
              onClick={handleStaffClick}
              className="w-full bg-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300"
            >
              Log in as Staff
            </button>
          </div>
        </div>

        {/* Student Card */}
        <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-10 w-full sm:w-96 border-b-4 border-b-teal-500">
          <div className="flex flex-col items-center text-center">
            {/* Student Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-teal-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Student Portal</h2>
            <p className="text-gray-600 mb-6">
              View announcements, check room details, and manage your personal information.
            </p>
            <button
              onClick={handleStudentClick}
              className="w-full bg-teal-500 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-teal-600 transition-colors duration-300"
            >
              Log in as Student
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
