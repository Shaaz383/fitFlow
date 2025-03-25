import { useContext, useState, useEffect } from "react";
import { WeightContext } from "@/context/WeightContext";
import { useAuth } from "@/context/AuthContext";

const WeightGoalInput = ({ calculateDailyCalories }) => {
  const { currentUser, updateUserStats } = useAuth();
  const { goalWeight, setGoalWeight } = useContext(WeightContext);
  const [inputValue, setInputValue] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  // Initialize input value from context or user data
  useEffect(() => {
    setInputValue(goalWeight || currentUser?.stats?.goalWeight || "");
  }, [goalWeight, currentUser]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Always allow free-form input
  };

  const handleSave = async () => {
    const numericValue = parseFloat(inputValue);
    
    // Validate input
    if (isNaN(numericValue) || numericValue < 30 || numericValue > 300) {
      alert("Please enter a valid weight between 30 and 300 kg");
      return;
    }

    setIsSaving(true);
    try {
      // Update both context and backend
      setGoalWeight(numericValue);
      await updateUserStats({ 
        goalWeight: numericValue,
        weight: currentUser?.stats?.weight // Include current weight for proper calculation
      });
      calculateDailyCalories();
    } catch (error) {
      console.error("Failed to update goal weight:", error);
      // Revert to previous value if update fails
      setInputValue(goalWeight || currentUser?.stats?.goalWeight || "");
    } finally {
      setIsSaving(false);
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
              value={inputValue}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-lg text-white"
              min="30"
              max="300"
              step="0.1"
              placeholder="Enter your goal weight"
              disabled={isSaving}
            />
          </div>
          <button
            onClick={handleSave}
            className={`w-full bg-yellow-500 text-black font-bold py-2 rounded-lg hover:bg-yellow-400 transition ${
              isSaving ? "opacity-75 cursor-not-allowed" : ""
            }`}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save Goal Weight"}
          </button>
          {isSaving && (
            <p className="text-xs text-yellow-400 text-center">
              Updating your nutrition plan...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeightGoalInput;