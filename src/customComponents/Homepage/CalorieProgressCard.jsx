import { useState } from "react";

const CalorieProgressCard = () => {
  const [calories, setCalories] = useState(0); // Current calorie intake
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [inputValue, setInputValue] = useState(""); // Input value for calories
  const dailyGoal = 2000; // Daily calorie goal

  // Calculate progress percentage
  const progress = Math.min((calories / dailyGoal) * 100, 100);

  // Function to add calories
  const addCalories = () => {
    const newCalories = parseFloat(inputValue);

    // Validate input
    if (!isNaN(newCalories) && newCalories >= 0) {
      setCalories((prev) => prev + newCalories);
      setIsModalOpen(false); // Close the modal
      setInputValue(""); // Reset input
    } else {
      alert("Please enter a valid number!");
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-semibold mb-4 text-center">Calorie Intake</h3>

      {/* Circular Progress Bar */}
      <div className="relative w-40 h-40 mx-auto">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Background Circle */}
          <circle
            className="text-gray-700 stroke-current"
            strokeWidth="10"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
          />
          {/* Progress Circle */}
          <circle
            className="text-yellow-500 stroke-current"
            strokeWidth="10"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            strokeDasharray="251.2" // Circumference of the circle (2 * π * r)
            strokeDashoffset={251.2 - (progress / 100) * 251.2} // Adjust based on progress
            strokeLinecap="round"
          />
        </svg>

        {/* Progress Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-semibold">
            {calories} / {dailyGoal} kcal
          </span>
        </div>
      </div>

      {/* Add Calories Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full mt-6 bg-yellow-500 text-black font-bold py-2 rounded-lg hover:bg-yellow-400 transition"
      >
        Add Calories
      </button>

      {/* Modal for Adding Calories */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-gray-900 p-6 rounded-lg w-80">
            <h3 className="text-lg font-semibold mb-4">Add Calories</h3>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
              placeholder="Enter calories"
              min="0" // Prevent negative values
            />
            <button
              onClick={addCalories}
              className="w-full bg-yellow-500 text-black font-bold py-2 rounded-lg hover:bg-yellow-400 transition"
            >
              Add
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-gray-700 text-white py-2 rounded-lg mt-2 hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalorieProgressCard;