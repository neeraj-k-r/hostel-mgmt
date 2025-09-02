// src/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    // simple validation
    if (username.trim() === "" || age.trim() === "") {
      alert("Please fill all fields");
      return;
    }
    navigate("/dashboard");
  }

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white border p-6 rounded-2xl w-80 shadow-xl">
        <h1 className="text-center text-2xl font-bold mb-4 text-gray-700">
          LOGIN
        </h1>

        <div className="flex flex-col gap-3">
          {/* Username input */}
          <label htmlFor="username" className="text-sm text-gray-600">
            USERNAME:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Age input */}
          <label htmlFor="age" className="text-sm text-gray-600">
            AGE:
          </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          {/* Button */}
          <button
            onClick={handleLogin}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg mt-3 hover:opacity-90 transition"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
