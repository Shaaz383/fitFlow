import { useContext } from "react";
import { WeightContext } from "@/context/WeightContext";
import { useAuth } from "@/context/AuthContext";
import { FaWeight, FaBullseye, FaFire } from "react-icons/fa";

const GoalCard = () => {
  const { currentUser } = useAuth();
  const { 
    currentWeight = currentUser?.stats?.weight || 0,
    goalWeight = currentUser?.stats?.goalWeight || 0,
    goalType = currentUser?.stats?.goalType || "weight_loss"
  } = useContext(WeightContext);

  // Format goal type for display
  const formattedGoalType = goalType === "weight_loss" 
    ? "Weight Loss" 
    : goalType === "gain_muscle" 
      ? "Muscle Building" 
      : goalType;

  // Determine color based on goal type
  const goalTypeColor = goalType === "weight_loss" 
    ? "bg-red-500" 
    : goalType === "gain_muscle" 
      ? "bg-blue-500" 
      : "bg-purple-500";

  return (
    <div className="p-4">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700">
        <h2 className="text-xl font-bold mb-4 flex items-center space-x-2 text-white">
          <FaFire className="text-yellow-500 text-2xl animate-pulse" />
          <span>Your Goals</span>
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-gray-700 px-4 py-2 rounded-lg">
            <div className="flex items-center space-x-2">
              <FaWeight className="text-yellow-400 text-lg" />
              <p className="text-gray-300">Current Weight:</p>
            </div>
            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold">
              {currentWeight} kg
            </span>
          </div>

          <div className="flex items-center justify-between bg-gray-700 px-4 py-2 rounded-lg">
            <div className="flex items-center space-x-2">
              <FaBullseye className="text-yellow-400 text-lg" />
              <p className="text-gray-300">Goal Weight:</p>
            </div>
            <span className="bg-green-500 text-white px-3 py-1 rounded-full font-semibold">
              {goalWeight} kg
            </span>
          </div>

          <div className="flex items-center justify-between bg-gray-700 px-4 py-2 rounded-lg">
            <div className="flex items-center space-x-2">
              <FaFire className="text-yellow-400 text-lg" />
              <p className="text-gray-300">Goal Type:</p>
            </div>
            <span className={`${goalTypeColor} text-white px-3 py-1 rounded-full font-semibold`}>
              {formattedGoalType}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalCard;