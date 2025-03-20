import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "Male",
    height: "",
    weight: "",
    activityLevel: "Sedentary",
    dietPreference: "Balanced",
    goal: "Lose Weight",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
  };

  return (
    <div className=" bg-black min-h-screen flex flex-col items-center text-white px-6 py-10">
      
      {/* Title */}
      <h2 className="text-4xl font-extrabold mb-4">Create Account</h2>

      {/* Form */}
      <form className="w-full max-w-lg bg-gray-900 p-2 rounded-2xl shadow-xl flex flex-col gap-6" onSubmit={handleSubmit}>

        {/* Name */}
        <div className="relative">
          <input type="text" name="name" required className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 outline-none focus:border-yellow-500" onChange={handleChange} placeholder=" " />
          <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500">Full Name</label>
        </div>

        {/* Email */}
        <div className="relative">
          <input type="email" name="email" required className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 outline-none focus:border-yellow-500" onChange={handleChange} placeholder=" " />
          <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500">Email</label>
        </div>

        {/* Password */}
        <div className="relative">
          <input type="password" name="password" required className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 outline-none focus:border-yellow-500" onChange={handleChange} placeholder=" " />
          <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500">Password</label>
        </div>

        {/* Age & Gender */}
        <div className="flex gap-4">
          <input type="number" name="age" required className="w-1/2 p-3 bg-gray-800 text-white rounded-lg border border-gray-600 outline-none focus:border-yellow-500" onChange={handleChange} placeholder="Age" />
          <select name="gender" className="w-1/2 p-4 bg-gray-800 text-white rounded-lg border border-gray-600 outline-none focus:border-yellow-500" onChange={handleChange}>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* Height & Weight */}
        <div className="flex gap-4">
          <input type="number" name="height" required className="w-1/2 p-3 bg-gray-800 text-white rounded-lg border border-gray-600 outline-none focus:border-yellow-500" onChange={handleChange} placeholder="Height (cm)" />
          <input type="number" name="weight" required className="w-1/2 p-3 bg-gray-800 text-white rounded-lg border border-gray-600 outline-none focus:border-yellow-500" onChange={handleChange} placeholder="Weight (kg)" />
        </div>



     

        {/* Submit Button */}
        <Button type="submit" className="w-full bg-yellow-500 text-black font-bold py-6 rounded-lg text-lg hover:bg-yellow-400 transition">
          Sign Up
        </Button>
      </form>

      {/* Already have an account? */}
      <p className="mt-6 text-gray-400 text-sm">
        Already have an account ? &nbsp; 
        <Link to="/signin" className="text-white font-semibold cursor-pointer hover:underline">
          Log In
        </Link>      </p>
    </div>
  );
}
