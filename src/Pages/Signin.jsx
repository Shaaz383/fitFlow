import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logoDark.png";
import Users from "@/data/userData";
import { useAuth } from "@/context/AuthContext";

const dietaryOptions = [
  "Balanced", "Vegetarian", "Vegan", "Dairy-Free"
];

export default function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const user = Users.find(
        user => user.email === formData.email && 
               user.password === formData.password
      );

      if (user) {
        // Ensure user has all required fields with defaults
        const completeUser = {
          name: user.name || "User",
          email: user.email,
          password: user.password,
          age: user.age || 25,
          gender: user.gender || "Male",
          height: user.height || 170,
          weight: user.weight || 70,
          activityLevel: user.activityLevel || "Moderately Active",
          dietPreference: dietaryOptions.includes(user.dietPreference) 
            ? user.dietPreference 
            : "Balanced",
          goal: user.goal || "Maintain Weight",
          goalWeight: user.goalWeight || null
        };
        
        login(completeUser);
        navigate("/");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center text-white px-6 py-4">
      {/* Logo */}
      <img src={logo} alt="Logo" className="h-32 mb-2 filter invert" />

      {/* Title */}
      <h2 className="text-4xl font-extrabold mb-8">Sign In</h2>

      {/* Error Message */}
      {error && (
        <div className="w-full max-w-lg bg-red-500/20 text-red-400 p-3 rounded-lg mb-4 text-center animate-fade-in">
          {error}
        </div>
      )}

      {/* Form */}
      <form 
        className="w-full max-w-lg bg-gray-900 p-4 rounded-2xl shadow-xl flex flex-col gap-6" 
        onSubmit={handleSubmit}
      >
        {/* Email */}
        <div className="relative">
          <input 
            type="email" 
            name="email" 
            required 
            className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-600 outline-none focus:border-yellow-500" 
            onChange={handleChange} 
            placeholder="Email" 
            value={formData.email}
            autoComplete="username"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <input 
            type="password" 
            name="password" 
            required 
            className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-600 outline-none focus:border-yellow-500" 
            onChange={handleChange} 
            placeholder="Password" 
            value={formData.password}
            autoComplete="current-password"
          />
        </div>

        {/* Forgot Password */}
        <Link 
          to="/forgot-password" 
          className="text-right text-sm text-yellow-500 hover:underline self-end"
        >
          Forgot password?
        </Link>

        {/* Submit Button */}
        <Button 
          type="submit" 
          className="w-full bg-yellow-500 text-black font-bold py-6 rounded text-lg hover:bg-yellow-400 transition disabled:opacity-75"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Signing in...
            </span>
          ) : "Sign In"}
        </Button>
      </form>

      {/* Don't have an account? */}
      <p className="text-gray-400 text-sm mt-4">
        Don't have an account? &nbsp; 
        <Link 
          to="/signup" 
          className="text-white font-semibold hover:underline"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}