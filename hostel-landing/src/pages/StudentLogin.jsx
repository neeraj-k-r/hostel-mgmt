import React from "react";
import axios from "axios";
import { useState } from "react";
import { API_URL } from "../config";
import { useNavigate } from "react-router-dom";




export default function StudentLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const submit = async () => {
        if (email == "" || password == "") {
            alert("EMAIL IS EMPTY");
           
        }

        const user = {
            email: email,
            password: password
        };
        
        try {
            const result = await axios.post(API_URL + "student-login1", user)
            console.log("Login API Response:", result.data.student); // 👈 add this line
             if(result.status===200){
                alert("LOGIN SUCCESSFUL");

                const studentData=result.data.student;
                console.log(studentData);
                localStorage.setItem("student_id",JSON.stringify(studentData.student_id))
                navigate('/student-dashboard');
                
             }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    Student Login
                </h2>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Email
                        </label>
                        <input
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
