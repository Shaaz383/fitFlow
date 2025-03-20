import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Target, TrendingDown, TrendingUp, Minus } from "lucide-react";
import BottomNavbar from "@/customComponents/BottomNavbar";

const GoalSelection = () => {
  const navigate = useNavigate();
  const [selectedGoal, setSelectedGoal] = useState(null);

  // Goal options
  const goals = [
    { id: "fat_loss", name: "Fat Loss", icon: <TrendingDown size={24} />, description: "Optimize weight loss and preserve muscle mass" },
    { id: "muscle_gain", name: "Muscle Gain", icon: <TrendingUp size={24} />, description: "Increase your weight and get stronger" },
    { id: "maintenance", name: "Weight Maintenance", icon: <Minus size={24} />, description: "Keep your weight stable and aim for body recomposition" }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col px-6 pt-6">
      
      {/* Back Button */}
      <div className="w-full flex items-start">
        <button onClick={() => navigate(-1)} className="p-2">
          <ArrowLeft className="text-white" size={28} />
        </button>
      </div>
      
      {/* Icon */}
      <div className="mt-6 mb-4">
        <div className="bg-yellow-500 p-4 rounded-full w-fit">
          <Target size={40} className="text-black" />
        </div>
      </div>
      
      {/* Title & Subtitle */}
      <h2 className="text-2xl font-bold">What's your goal?</h2>
      <p className="text-gray-400 mt-2">We'll help you find the right calorie intake to achieve it</p>
      
      {/* Goal Selection Options */}
      <div className="mt-6 w-full space-y-4">
        {goals.map((goal) => (
          <button
            key={goal.id}
            className={`w-full p-4 rounded-lg flex items-center space-x-4 transition-all duration-300 text-left 
              ${selectedGoal === goal.id ? "bg-yellow-500 text-white" : "bg-gray-800 text-white"}`}
            onClick={() => setSelectedGoal(goal.id)}
          >
            <div className="text-yellow-500">{goal.icon}</div>
            <div>
              <h3 className="text-lg font-bold">{goal.name}</h3>
              <p className="text-gray-400 text-sm">{goal.description}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Next Button */}
      <div className="mt-8">
        <button
          onClick={() => navigate("/next-page")}
          disabled={!selectedGoal}
          className={`w-full py-3 text-center font-bold rounded-lg transition-all duration-300 ${
            selectedGoal ? "bg-yellow-500 text-black" : "bg-gray-600 text-gray-400 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
       {/* Bottom Navbar */}
       <BottomNavbar />
    </div>
  );
};

export default GoalSelection;
