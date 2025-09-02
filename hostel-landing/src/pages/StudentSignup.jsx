import React, { useState } from "react";
import axios from "axios";
import { Api_Url } from "../config";

export default function StudentSignup(){
    const [student_id, setStudentid] = useState("");
    const[full_name,setFullname]=useState("");
    const[dob,setDob]=useState("");
    const[gender,setGender]=useState("");
    const[phone,setPhone]=useState("");
    const[email,setEmail]=useState("");
    const[course,setCourse]=useState("");
    const[join_date,setJoinDate]=useState("");
    const[room_id,setRoomid]=useState("");
    const[password,setPassword]=useState("");

    const submit=async()=>{
        if(
            student_id===""||
            full_name===""||
            dob===""||
            gender===""||
            phone===""||
            email===""||
            course===""||
            join_date===""||
            room_id===""||
            password===""
        ){
            alert("PLEASE FILL EVERY FIELD");   
            return;
        }

        const newStudent={
            student_id:student_id,
            full_name:full_name,
            dob:dob,
            gender:gender,
            phone:phone,
            email:email,
            course:course,
            join_date:join_date,
            room_id:room_id,
            password:password
        };

        try{
            const result=await axios.post(Api_Url+"student-signup",newStudent);
            console.log(result.data);
            alert("SIGNUP SUCCESSFUL");
            setStudentid("");setFullname("");setDob("");setGender("");setPhone("");setEmail("");setCourse("");setJoinDate("");setRoomid("");setPassword("");
        }
        catch(eerror){
            console.log(error);
            alert("SIGNUP FAILED");
        }
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Student Signup
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Student ID
            </label>
            <input
              type="text"
              value={student_id}
              onChange={(e) => setStudentid(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              value={full_name}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <input
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Course
            </label>
            <input
              type="text"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Join Date
            </label>
            <input
              type="date"
              value={join_date}
              onChange={(e) => setJoinDate(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Room ID
            </label>
            <input
              type="text"
              value={room_id}
              onChange={(e) => setRoomid(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="button"
            onClick={submit}
            className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}