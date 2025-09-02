import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
export default function Home(){


    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">
            NIGGAMALOOR HOSTEL
            </h1>

            <p className="text-lg text-gray-700 mb-8 text-center max-w-lg">
                Welcome to the niggamaloor hostel management system. Manage students, rooms, and
                activities seamlessly with our platform.
            </p>
            <div className="flex space-x-4">
                <a
                href="/student-auth"
                className="px-6 py-3 bg-blue-500 text-white rounded-2xl shadow hover:bg-blue-600"
                >
                Student Portal
                </a>
                <a
                href="/staff-auth"
                className="px-6 py-3 bg-green-500 text-white rounded-2xl shadow hover:bg-green-600"
                >
                Staff Portal
                </a>
            </div>

        </div>
    
    )
}