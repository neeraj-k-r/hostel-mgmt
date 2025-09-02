import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";

export default function StaffDashboard() {
  const navigate = useNavigate();
  const [staffid, setStaffId] = useState("");
  const [stats, setStats] = useState({
    totalStudents: 0,
    occupiedRooms: 0,
    pendingComplaints: 0,
  });
  

  const [staff,setStaff]=useState(null);

  const fetchStaffbyid = async()=>{
    const result=await axios.get(API_URL+"getstaffdetailsbyid",{
      params:{
        id:staffid
      }
    });
    if(result.status==200){
      setStaff(result.data[0]);
      console.log(staff)
      console.log(result.data)
    }
  }
      useEffect(()=>{
      if(staffid)
      fetchStaffbyid();
    console.log(staff)
    },[staffid])

  useEffect(() => {
    // Load staff info from localStorage
    const savedStaffID = localStorage.getItem("staff_id");
    if (savedStaffID) {
      setStaffId(savedStaffID)
      
     
    } else {
      navigate("/staff-login");
    }



    // Fetch real data from backend
    const fetchStats = async () => {
      try {
        const [studentsRes, roomsRes, complaintsRes] = await Promise.all([
          axios.get(API_URL + "stats/students"),
          axios.get(API_URL + "stats/rooms"),
          axios.get(API_URL + "stats/complaints"),
        ]);

        setStats({
          totalStudents: studentsRes.data[0].total,
          occupiedRooms: roomsRes.data[0].occupied,
          pendingComplaints: complaintsRes.data[0].pending,
        });
      } catch (err) {
        console.error("Failed to fetch stats:", err);
      }
    };

    fetchStats();
  }, [navigate]);


  const handleLogout = () => {
    localStorage.removeItem("staff_id");
    navigate("/staff-login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-green-600 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold">Staff Dashboard</h2>
        <nav className="space-y-3">
          <button className="block w-full text-left hover:bg-green-700 p-2 rounded">
            Students
          </button>
          <button className="block w-full text-left hover:bg-green-700 p-2 rounded">
            Rooms
          </button>
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
  {staff ? (
    <div className="max-w-3xl w-full bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl p-8 border border-gray-200">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-500 to-green-700 text-white flex items-center justify-center rounded-full text-3xl font-bold shadow-md">
          {staff.name.charAt(0)}
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mt-4">
          Welcome, {staff.name} 👋
        </h1>
        <p className="text-gray-500">{staff.role} • {staff.email}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl shadow hover:shadow-md transition">
          <p className="text-sm text-gray-500">👨‍🎓 Total Students</p>
          <p className="text-3xl font-bold text-gray-800">{stats.totalStudents}</p>
        </div>

        <div className="p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl shadow hover:shadow-md transition">
          <p className="text-sm text-gray-500">🏠 Occupied Rooms</p>
          <p className="text-3xl font-bold text-gray-800">{stats.occupiedRooms}</p>
        </div>

        <div className="p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl shadow hover:shadow-md transition">
          <p className="text-sm text-gray-500">⚠️ Pending Complaints</p>
          <p className="text-3xl font-bold text-gray-800">{stats.pendingComplaints}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 text-center">
        <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-xl shadow-md transition">
          EDIT PROFILE
        </button>
      </div>
    </div>
  ) : (
    <p className="text-gray-500">Loading staff info...</p>
  )}
</div>

    </div>
  );
}
                                