// src/components/GoalModal.js
import { FaWalking } from "react-icons/fa";

const GoalCard = ({ onClick, goalType, goalWeight }) => {
  return (
    <div
      className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center space-x-4">
        <FaWalking className="text-yellow-500 text-2xl" />
        <div>
          <p className="text-gray-400 text-sm">Update Goal</p>
          <p className="text-white font-semibold text-base capitalize">
            {goalType ? ` ${goalWeight} kg` : "Set Your Goal"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoalCard;