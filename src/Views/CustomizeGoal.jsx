import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaWeight, FaBullseye, FaTachometerAlt } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";
import BottomNavbar from "@/customComponents/BottomNavbar";

export default function CustomizeGoal() {
  const navigate = useNavigate();
  const [currentWeight, setCurrentWeight] = useState(75);
  const [goalWeight, setGoalWeight] = useState(null);
  const [speed, setSpeed] = useState("Recommended");

  // Goal Weight Options
  const goalWeights = Array.from({ length: 60 }, (_, i) => i + 40); // Generates 40kg to 100kg

  return (
    <div className="min-h-screen bg-black text-white flex flex-col px-6 pt-6">
      
      {/* Back Button */}
      <div className="w-full flex items-start">
        <button onClick={() => navigate(-1)} className="p-2">
          <ArrowLeft className="text-white" size={28} />
        </button>
      </div>

      {/* Page Icon & Title */}
      <div className="mt-6">
        <div className="bg-yellow-500 p-4 rounded-full w-fit">
          <FaWeight size={30} className="text-black" />
        </div>
      </div>
      <h1 className="text-2xl font-semibold mt-4">Customize your goal</h1>
      <p className="text-gray-400 mt-1">Last step to get your calories and macros</p>

      {/* Options */}
      <div className="w-full max-w-md mt-6 space-y-4">
        
        {/* Current Weight */}
        <div className="bg-gray-900 p-4 rounded-lg flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <FaWeight className="text-yellow-500" />
            <span className="text-lg">Current Weight</span>
          </div>
          <span className="text-gray-300">{currentWeight} kg</span>
        </div>

        {/* Goal Weight Selection */}
        <div className="bg-gray-900 p-4 rounded-lg flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <FaBullseye className="text-yellow-500" />
            <span className="text-lg">Goal Weight</span>
          </div>
          <select
            className="bg-transparent text-yellow-400 outline-none"
            value={goalWeight || ""}
            onChange={(e) => setGoalWeight(e.target.value)}
          >
            <option value="" disabled>Select</option>
            {goalWeights.map((weight) => (
              <option key={weight} value={weight} className="bg-black text-white">
                {weight} kg
              </option>
            ))}
          </select>
        </div>

        {/* Speed Selection */}
        <div className="bg-gray-900 p-4 rounded-lg flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <FaTachometerAlt className="text-yellow-500" />
            <span className="text-lg">Speed</span>
          </div>
          <span className="text-gray-300">{speed}</span>
        </div>
      </div>

      {/* Create Plan Button */}
      <button
        onClick={() => navigate("/plan")}
        disabled={!goalWeight}
        className={`w-full max-w-md mt-6 p-4 rounded-lg text-center font-bold transition-all duration-300 ${
          goalWeight ? "bg-yellow-500 text-black" : "bg-gray-700 text-gray-400 cursor-not-allowed"
        }`}
      >
        Create My Plan
      </button>

       {/* Bottom Navbar */}
       <BottomNavbar />
    </div>
  );
}
