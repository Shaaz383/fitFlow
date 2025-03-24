import { useState, useContext } from "react";
import { FaWalking, FaTint } from "react-icons/fa"; // Icons
import WeightGoalInput from "../Planpage/WeightGoalInput";
import { WeightContext } from "@/context/WeightContext";

const QuickStats = ({ stats, updateStat }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isStepsPopupOpen, setIsStepsPopupOpen] = useState(false);
  const [isWeightPopupOpen, setIsWeightPopupOpen] = useState(false);
  const [newSteps, setNewSteps] = useState("");
  const [newWeight, setNewWeight] = useState("");

  const { currentWeight, setCurrentWeight, goalWeight, setGoalWeight, goalType, setGoalType } =
    useContext(WeightContext);

  // Function to update step count
  const handleUpdateSteps = () => {
    if (newSteps.trim() !== "") {
      updateStat("Steps Today", `${newSteps} Steps`);
      setNewSteps("");
      setIsStepsPopupOpen(false);
    }
  };

  // Function to update weight
  const handleUpdateWeight = () => {
    if (newWeight.trim() !== "") {
      setCurrentWeight(newWeight);
      updateStat("Weight", `${newWeight} kg`);
      setNewWeight("");
      setIsWeightPopupOpen(false);
    }
  };

  // Function to increase water intake by 250ml
  const handleIncreaseWater = () => {
    const waterStat = stats.find((stat) => stat.title === "Water");
    if (waterStat) {
      const currentWater = parseFloat(waterStat.value); // Extract current value
      const newWater = (currentWater + 0.25).toFixed(2); // Add 250ml (0.25L) and format
      updateStat("Water", `${newWater} L`);
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative"
        >
          <div className="flex items-center space-x-4">
            {stat.icon}
            <div>
              <p className="text-gray-400 text-sm">{stat.title}</p>
              <p className="text-white font-semibold">{stat.value}</p>
            </div>
          </div>

          {/* Water Badge Button */}
          {stat.title === "Water" && (
            <button
              onClick={handleIncreaseWater}
              className="absolute top-[-6px] right-[-8px] bg-blue-500 text-white text-xs px-2 py-1 rounded-full hover:bg-blue-400 transition"
            >
              +250ml
            </button>
          )}

          {/* Steps Update Button */}
          {stat.title === "Steps Today" && (
            <button
              onClick={() => setIsStepsPopupOpen(true)}
              className="absolute top-[-6px] right-[-8px] bg-yellow-500 text-black text-xs px-2 py-1 rounded-full hover:bg-yellow-400 transition"
            >
              Update
            </button>
          )}

          {/* Weight Update Button */}
          {stat.title === "Weight" && (
            <button
              onClick={() => setIsWeightPopupOpen(true)}
              className="absolute top-[-6px] right-[-8px] bg-green-500 text-white text-xs px-2 py-1 rounded-full hover:bg-green-400 transition"
            >
              Update
            </button>
          )}
        </div>
      ))}

      {/* Steps Update Modal */}
      {isStepsPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md">
            <h2 className="text-white text-lg font-bold mb-4">Update Steps</h2>
            <input
              type="number"
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600"
              placeholder="Enter new step count"
              value={newSteps}
              onChange={(e) => setNewSteps(e.target.value)}
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={handleUpdateSteps}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400 transition"
              >
                Update
              </button>
              <button
                onClick={() => setIsStepsPopupOpen(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Weight Update Modal */}
      {isWeightPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md">
            <h2 className="text-white text-lg font-bold mb-4">Update Weight</h2>
            <input
              type="number"
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600"
              placeholder="Enter new weight"
              value={newWeight}
              onChange={(e) => setNewWeight(e.target.value)}
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={handleUpdateWeight}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400 transition"
              >
                Update
              </button>
              <button
                onClick={() => setIsWeightPopupOpen(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Goal Update Modal */}
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
              calculateDailyCalories={() => setIsPopupOpen(false)} // Auto-close modal after goal update
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
            <p className="text-white font-semibold text-base capitalize">{goalType ? ` ${goalWeight} kg` : "Set Your Goal"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
