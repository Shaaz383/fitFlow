import { useState, useContext } from "react";
import { FaWalking } from "react-icons/fa"; // Icon for steps
import WeightGoalInput from "../Planpage/WeightGoalInput";
import { WeightContext } from "@/context/WeightContext";

const QuickStats = ({ stats }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { currentWeight, setCurrentWeight, goalWeight, setGoalWeight, goalType, setGoalType } =
    useContext(WeightContext);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex items-center space-x-4">
            {stat.icon}
            <div>
              <p className="text-gray-400 text-sm">{stat.title}</p>
              <p className="text-white font-semibold">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}

    

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md">
            <WeightGoalInput
              currentWeight={currentWeight}
              setCurrentWeight={setCurrentWeight}
              goalWeight={goalWeight}
              setGoalWeight={setGoalWeight}
              goalType={goalType}
              setGoalType={setGoalType}
              calculateDailyCalories={() => setIsPopupOpen(false)}
            />
            <button
              onClick={() => setIsPopupOpen(false)}
              className="w-full bg-red-500 text-white font-bold py-2 rounded-lg hover:bg-red-400 transition mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Update Goal Card */}
      <div
        className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
        onClick={() => setIsPopupOpen(true)}
      >
        <div className="flex items-center space-x-4">
          <FaWalking className="text-yellow-500 text-2xl" />
          <div>
            <p className="text-gray-400 text-sm">Update Goal</p>
            <p className="text-white font-semibold">Set Your Goal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
