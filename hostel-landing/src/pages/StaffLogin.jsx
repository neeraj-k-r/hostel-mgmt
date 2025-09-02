import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../config"; // Make sure this is correct
import { useNavigate } from "react-router-dom";

export default function StaffLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
                                                                                                                        
  const submit = async () => {
    if (!email || !password) {
      alert("Email or Password is empty");
      return;
    }

    const user = { email, password };

    try {
      const result = await axios.post(API_URL + "staff-login", user);

      if (result.status === 200) {
        alert("LOGIN SUCCESSFUL");

        const staffData = result.data.staff;
        
        // Save full staff object from backend
        localStorage.setItem("staff_id", JSON.stringify(staffData.staff_id));

        navigate("/staff-dashboard");
      }
    } catch (error) {
      console.log("Login failed:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Staff Login
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your password"
            />
          </div>

          <button
            onClick={submit}
            className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
