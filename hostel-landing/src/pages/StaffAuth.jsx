import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function StaffAuth(){

    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-4xl font-bold text-blue-600 mb-6">
                STAFF AUTHENTICATION
                </h1>
                <div className="flex space-x-4">
                    <a
                    href="/staff-login"
                    className="px-6 py-3 bg-blue-500 text-white rounded-2xl shadow hover:bg-blue-600"
                    >
                    LOGIN
                    </a>
                    <a
                    href="/staff-signup"
                    className="px-6 py-3 bg-green-500 text-white rounded-2xl shadow hover:bg-green-600"
                    >
                    SIGN-UP
                    </a>
                </div>
    
            </div>
        
        )
}

