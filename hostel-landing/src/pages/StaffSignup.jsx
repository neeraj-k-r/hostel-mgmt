import React, { useState } from "react";
import axios from "axios";
import { Api_Url } from "../config";

export default function StaffSignup() {
  const [staff_id, setStaffid] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhno] = useState("");
  const [email, setEmail] = useState("");
  const [shift, setShift] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    if (
      staff_id === "" ||
      name === "" ||
      role === "" ||
      phone === "" ||
      email === "" ||
      shift === "" ||
      password === ""
    ) {
      alert("PLEASE FILL EVERY FIELD");
      return;
    }

    const newStaff = {
      staff_id: staff_id,
      name:name,
      role:role,
      phone:phone,
      email:email,
      shift:shift,
      password:password,
    };

    try {
      const result = await axios.post(Api_Url + "allstaff", newStaff);
      console.log(result.data);
      alert("SIGNUP SUCCESSFUL");
      setStaffid(""); setName(""); setRole(""); setPhno("");
      setEmail(""); setShift(""); setPassword("");
    } catch (error) {
      console.error(error);
      alert("SIGNUP FAILED");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Staff Signup
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Staff ID
            </label>
            <input
              type="text"
              value={staff_id}
              onChange={(e) => setStaffid(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobile No
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhno(e.target.value)}
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
              Shift
            </label>
            <input
              type="text"
              value={shift}
              onChange={(e) => setShift(e.target.value)}
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


// import React, { useState } from "react";
// import axios from "axios";
// import { Api_Url } from "../config";

// export default function StaffSignup() {
//   const [staff_id, setStaffid] = useState("");
//   const [name, setName] = useState("");
//   const [role, setRole] = useState("");
//   const [phone, setPhno] = useState("");
//   const [email, setEmail] = useState("");
//   const [shift, setShift] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const validateForm = () => {
//     if (!staff_id || !name || !role || !phone || !email || !shift || !password) {
//       alert("⚠️ Please fill every field");
//       return false;
//     }
//     if (!/^\d{10}$/.test(phone)) {
//       alert("⚠️ Mobile number must be 10 digits");
//       return false;
//     }
//     if (!/\S+@\S+\.\S+/.test(email)) {
//       alert("⚠️ Enter a valid email address");
//       return false;
//     }
//     if (password.length < 6) {
//       alert("⚠️ Password must be at least 6 characters");
//       return false;
//     }
//     return true;
//   };

//   const submit = async () => {
//     if (!validateForm()) return;

//     const newStaff = { staff_id, name, role, phone, email, shift, password };

//     try {
//       setLoading(true);
//       const result = await axios.post(Api_Url + "allstaff", newStaff);
//       console.log(result.data);
//       alert("✅ Signup successful!");

//       // Reset fields
//       setStaffid("");
//       setName("");
//       setRole("");
//       setPhno("");
//       setEmail("");
//       setShift("");
//       setPassword("");
//     } catch (error) {
//       console.error(error);
//       alert(
//         error.response?.data?.message || "❌ Signup failed. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Staff Signup
//         </h2>

//         <form className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Staff ID
//             </label>
//             <input
//               type="text"
//               value={staff_id}
//               onChange={(e) => setStaffid(e.target.value)}
//               className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Name
//             </label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Role
//             </label>
//             <input
//               type="text"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Mobile No
//             </label>
//             <input
//               type="text"
//               value={phone}
//               onChange={(e) => setPhno(e.target.value)}
//               className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Shift
//             </label>
//             <input
//               type="text"
//               value={shift}
//               onChange={(e) => setShift(e.target.value)}
//               className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           <button
//             type="button"
//             onClick={submit}
//             disabled={loading}
//             className={`w-full py-2 px-4 font-semibold rounded-lg shadow-md text-white ${
//               loading
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-green-500 hover:bg-green-600"
//             }`}
//           >
//             {loading ? "Signing Up..." : "Sign Up"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
