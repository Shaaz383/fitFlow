// src/components/QuickStats/StatCard.js
import { FaWalking, FaTint } from "react-icons/fa";

const StatCard = ({ stat, onIncreaseWater, onOpenStepsModal }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative">
      <div className="flex items-center space-x-4">
        {stat.icon}
        <div>
          <p className="text-gray-400 text-sm">{stat.title}</p>
          <p className="text-white font-semibold">{stat.value}</p>
        </div>
      </div>

      {stat.title === "Water" && (
        <button
          onClick={onIncreaseWater}
          className="absolute top-[-6px] right-[-8px] bg-blue-500 text-white text-xs px-2 py-1 rounded-full hover:bg-blue-400 transition"
        >
          +250ml
        </button>
      )}

      {stat.title === "Steps Today" && (
        <button
          onClick={onOpenStepsModal}
          className="absolute top-[-6px] right-[-8px] bg-yellow-500 text-black text-xs px-2 py-1 rounded-full hover:bg-yellow-400 transition"
        >
          Update
        </button>
      )}
    </div>
  );
};

export default StatCard;