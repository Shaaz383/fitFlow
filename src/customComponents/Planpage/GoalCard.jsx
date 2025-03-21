import { FaWeight, FaBullseye, FaFire } from "react-icons/fa";

const GoalCard = ({ currentWeight, goalWeight, goalType }) => {
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
            <span
              className={`px-3 py-1 rounded-full font-semibold ${
                goalType === "weight_loss"
                  ? "bg-red-500 text-white"
                  : "bg-blue-500 text-white"
              }`}
            >
              {goalType === "weight_loss" ? "Weight Loss" : "Muscle Building"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalCard;
