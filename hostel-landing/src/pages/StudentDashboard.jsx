import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [student_id, setStudentid] = useState("");


  const [student, setStudent] = useState(null);

  const fetchStudentbyid = async () => {
    const result = await axios.get(API_URL + "getstudentdetailsbyid", {
      params: {
        id: student_id,
      },
    });

    if (result.status === 200) {
      setStudent(result.data[0]);
    }
  };

  useEffect(() => {
    if (student_id) fetchStudentbyid();
  }, [student_id]);

  useEffect(() => {
    const savedStudentID = localStorage.getItem("student_id");
    if (savedStudentID) {
      setStudentid(savedStudentID);
    } else {
      navigate("/student-login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("student_id");
    navigate("/student-login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-green-600 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold">Student Dashboard</h2>
        <nav className="space-y-3">
          {/* <button className="block w-full text-left hover:bg-green-700 p-2 rounded">
            Rooms


          </button> */}
          <button className="block w-full text-left hover:bg-green-700 p-2 rounded">
            Payments
          </button>
          <button className="block w-full text-left hover:bg-green-700 p-2 rounded">
            Complaints
          </button>
        </nav>
        <button
          onClick={handleLogout}
          className="mt-6 bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
        >
          Logout
        </button>
      </aside>
{/* Main Content */}
<div className="flex-1 p-8 flex justify-center items-start">
  {student ? (
    <div className="max-w-2xl w-full bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl p-8 border border-gray-300">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-500 to-green-700 text-white flex items-center justify-center rounded-full text-3xl font-bold shadow-md">
          {student.full_name.charAt(0)}
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mt-4">
          Welcome, {student.full_name} 👋
        </h1>
        <p className="text-gray-500">Your personal dashboard</p>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-5 bg-gradient-to-r from-green-50 to-green-100 rounded-xl shadow hover:shadow-md transition">
          <p className="text-sm text-gray-500">📧 Email</p>
          <p className="text-gray-800 font-semibold break-all">{student.email}</p>
        </div>

        <div className="p-5 bg-gradient-to-r from-green-50 to-green-100 rounded-xl shadow hover:shadow-md transition">
          <p className="text-sm text-gray-500">🆔 Student ID</p>
          <p className="text-gray-800 font-semibold">{student_id}</p>
        </div>

        <div className="p-5 bg-gradient-to-r from-green-50 to-green-100 rounded-xl shadow hover:shadow-md transition">
          <p className="text-sm text-gray-500">📘 Course</p>
          <p className="text-gray-800 font-semibold">{student.course}</p>
        </div>

        <div className="p-5 bg-gradient-to-r from-green-50 to-green-100 rounded-xl shadow hover:shadow-md transition">
          <p className="text-sm text-gray-500">🏠 Room</p>
          <p className="text-gray-800 font-semibold">{student.room_id}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-xl shadow-md transition">
          Edit Profile
        </button>
      </div>
    </div>
  ) : (
    <p className="text-gray-500">Loading student info...</p>
  )}
</div>



    </div>
  );
}
