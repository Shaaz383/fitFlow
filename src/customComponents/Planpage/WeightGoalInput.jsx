import { useContext } from "react";
import { WeightContext } from "@/context/WeightContext";
import { useAuth } from "@/context/AuthContext";

const WeightGoalInput = ({
  calculateDailyCalories,
}) => {
  const { currentUser, updateUserStats } = useAuth();
  const {
    goalWeight,
    setGoalWeight
  } = useContext(WeightContext);

  const handleGoalWeightChange = async (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setGoalWeight(value);
      await updateUserStats({ goalWeight: value });
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Set Your Goal Weight</h2>
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <div className="space-y-4">
          <div>
            <label className="text-gray-400">Goal Weight (kg)</label>
            <input
              type="number"
              value={goalWeight || currentUser?.stats?.goalWeight || ""}
              onChange={handleGoalWeightChange}
              className="w-full p-2 bg-gray-700 rounded-lg text-white"
              min="30"
              max="300"
              step="0.1"
              placeholder="Enter your goal weight"
            />
          </div>
          <button
            onClick={calculateDailyCalories}
            className="w-full bg-yellow-500 text-black font-bold py-2 rounded-lg hover:bg-yellow-400 transition"
          >
            Save Goal Weight
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeightGoalInput;