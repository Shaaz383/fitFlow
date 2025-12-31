// src/pages/Signup.js
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logoDark.png";
import { useAuth } from "@/context/AuthContext";

const activityLevels = [
  { id: "sedentary", title: "Sedentary" },
  { id: "lightly_active", title: "Lightly Active" },
  { id: "moderately_active", title: "Moderately Active" },
  { id: "very_active", title: "Very Active" },
  { id: "athlete", title: "Athlete" },
];

const dietOptions = ["Balanced", "Vegetarian", "Vegan", "Keto", "Low Carb"];
const goalOptions = ["Lose Weight", "Maintain Weight", "Gain Muscle"];

export default function SignUp() {
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
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      if (!formData.name || !formData.email || !formData.password) {
        throw new Error("Please fill in all required fields");
      }

      const userData = {
        ...formData,
        age: Number(formData.age),
        height: Number(formData.height),
        weight: Number(formData.weight),
      };

      const result = await register(userData);
      if (!result.success) throw new Error(result.error);
      
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center text-white px-6 py-2">
      <img src={logo} alt="Logo" className="h-32 filter invert" />
      <h2 className="text-4xl font-extrabold mb-4">Create Account</h2>

      {error && (
        <div className="w-full max-w-lg bg-red-500/20 text-red-400 p-3 rounded-lg mb-4 text-center animate-fade-in">
          {error}
        </div>
      )}

      <form
        className="w-full max-w-lg bg-gray-900 p-4 rounded-2xl shadow-xl flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
                <div className="relative">
          <input
            type="text"
            name="name"
            required
            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 outline-none focus:border-yellow-500"
            onChange={handleChange}
            placeholder="Full name"
            value={formData.name}
          />
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 outline-none focus:border-yellow-500"
            onChange={handleChange}
            placeholder="Email"
            value={formData.email}
          />
        </div>

        <div className="relative">
          <input
            type="password"
            name="password"
            required
            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 outline-none focus:border-yellow-500"
            onChange={handleChange}
            placeholder="Password"
            value={formData.password}
          />
        </div>

        <div className="flex gap-4">
          <input
            type="number"
            name="age"
            required
            min="13"
            max="120"
            className="w-1/2 p-3 bg-gray-800 text-white rounded-lg border border-gray-600 outline-none focus:border-yellow-500"
            onChange={handleChange}
            placeholder="Age"
            value={formData.age}
          />
          <select
            name="gender"
            className="w-1/2 p-3 bg-gray-800 text-white rounded-lg border border-gray-600 outline-none focus:border-yellow-500"
            onChange={handleChange}
            value={formData.gender}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="flex gap-4">
          <input
            type="number"
            name="height"
            required
            min="100"
            max="250"
            className="w-1/2 p-3 bg-gray-800 text-white rounded-lg border border-gray-600 outline-none focus:border-yellow-500"
            onChange={handleChange}
            placeholder="Height (cm)"
            value={formData.height}
          />
          <input
            type="number"
            name="weight"
            required
            min="30"
            max="300"
            className="w-1/2 p-3 bg-gray-800 text-white rounded-lg border border-gray-600 outline-none focus:border-yellow-500"
            onChange={handleChange}
            placeholder="Weight (kg)"
            value={formData.weight}
          />
        </div>

        <div>
          <label className="text-gray-300 block mb-2">Activity Level</label>
          <select
            name="activityLevel"
            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 outline-none focus:border-yellow-500"
            onChange={handleChange}
            value={formData.activityLevel}
          >
            {activityLevels.map((level) => (
              <option key={level.id} value={level.title}>
                {level.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-gray-300 block mb-2">Diet Preference</label>
          <select
            name="dietPreference"
            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 outline-none focus:border-yellow-500"
            onChange={handleChange}
            value={formData.dietPreference}
          >
            {dietOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-gray-300 block mb-2">Goal</label>
          <select
            name="goal"
            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 outline-none focus:border-yellow-500"
            onChange={handleChange}
            value={formData.goal}
          >
            {goalOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        
        <Button
          type="submit"
          className="w-full bg-yellow-500 text-black font-bold py-6 rounded-lg text-lg hover:bg-yellow-400 transition disabled:opacity-75"
          disabled={isLoading}
        >
          {isLoading ? "Creating account..." : "Sign Up"}
        </Button>
      </form>

      <p className="text-gray-400 text-sm mt-4">
        Already have an account? &nbsp;
        <Link
          to="/signin"
          className="text-white font-semibold cursor-pointer hover:underline"
        >
          Log In
        </Link>
      </p>
    </div>
  );
}