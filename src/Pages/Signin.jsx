import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "../assets/logoDark.png"; // Import your logo

export default function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center  text-white px-6 py-4">
      {/* Logo */}
      <img src={logo} alt="Logo" className="h-32 mb-2 filter invert" />

      {/* Title */}
      <h2 className="text-4xl font-extrabold mb-8">Sign In</h2>

      {/* Form */}
      <form className="w-full max-w-lg bg-gray-900 p-4 rounded-2xl shadow-xl flex flex-col gap-6" onSubmit={handleSubmit}>

        {/* Email */}
        <div className="relative">
          <input type="email" name="email" required className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-600 outline-none focus:border-yellow-500 peer" onChange={handleChange} placeholder=" " />
          <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500">
            Email
          </label>
        </div>

        {/* Password */}
        <div className="relative">
          <input type="password" name="password" required className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-600 outline-none focus:border-yellow-500 peer" onChange={handleChange} placeholder=" " />
          <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500">
            Password
          </label>
        </div>

        {/* Forgot Password */}
        <div className="text-right text-sm text-yellow-500 cursor-pointer hover:underline">
          Forgot password?
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full bg-yellow-500 text-black font-bold py-6 rounded text-lg hover:bg-yellow-400 transition">
          Sign In
        </Button>
      </form>

      {/* Don't have an account? */}
      <p className=" text-gray-400 text-sm">
        Don't have an account? &nbsp; 
        <Link to="/signup" className="text-white font-semibold cursor-pointer hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
