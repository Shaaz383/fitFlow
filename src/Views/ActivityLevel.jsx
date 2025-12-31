import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BottomNavbar from "@/customComponents/BottomNavbar";

const ActivityLevel = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState(null);

  const levels = [
    { id: "sedentary", title: "Sedentary", description: "Little or no exercise", bars: 1 },
    { id: "lightly_active", title: "Lightly active", description: "Exercise 2–3 days per week", bars: 2 },
    { id: "moderately_active", title: "Moderately active", description: "Exercise 4–5 days per week", bars: 3 },
    { id: "very_active", title: "Very active", description: "Exercise 6–7 days per week", bars: 4 },
    { id: "athlete", title: "Professional athlete", description: "Intense exercise 6–7 days per week", bars: 5 },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col px-6 pt-6">
      
      {/* Back Button */}
      <div className="w-full flex items-start">
        <button onClick={() => navigate(-1)} className="p-2">
          <ArrowLeft className="text-white" size={28} />
        </button>
      </div>

      {/* Activity Icon */}
      <div className="mt-6">
        <div className="bg-yellow-500 p-4 rounded-full w-fit">
          <span className="text-black text-3xl">🏃</span>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold mt-6">What's your activity level?</h2>

      {/* Activity Level Options */}
      <div className="mt-6 w-full space-y-4">
        {levels.map((level) => (
          <button
            key={level.id}
            className={`w-full p-4 rounded-lg flex items-center space-x-4 transition-all duration-300 text-left
              ${selectedLevel === level.id ? "bg-yellow-500 text-white" : "bg-gray-800 text-white"}`}
            onClick={() => setSelectedLevel(level.id)}
          >
            <div className="flex space-x-1">
              {[...Array(level.bars)].map((_, i) => (
                <div key={i} className="h-4 w-2 rounded-sm transition-all duration-300"
                  style={{ backgroundColor: selectedLevel === level.id ? "white" : "#FACC15" }} // Changes bar color on selection
                ></div>
              ))}
            </div>
            <div>
              <h3 className="text-lg font-bold">{level.title}</h3>
              <p className="text-gray-400 text-sm">{level.description}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Bottom Text */}
      <p className="text-gray-400 mt-6">Don’t worry, you can change this later</p>

      {/* Next Button */}
      <div className="mt-8">
        <button
          onClick={() => navigate("/next-page")}
          disabled={!selectedLevel}
          className={`w-full py-3 text-center font-bold rounded-lg transition-all duration-300 ${
            selectedLevel ? "bg-yellow-500 text-black" : "bg-gray-600 text-gray-400 cursor-not-allowed"
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

export default ActivityLevel;
