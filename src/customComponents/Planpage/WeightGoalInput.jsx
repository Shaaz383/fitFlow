const WeightGoalInput = ({
  currentWeight,
  setCurrentWeight,
  goalWeight,
  setGoalWeight,
  goalType,
  setGoalType,
  calculateDailyCalories,
}) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Set Your Goals</h2>
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <div className="space-y-4">
          <div>
            <label className="text-gray-400">Current Weight (kg)</label>
            <input
              type="number"
              value={currentWeight}
              onChange={(e) => setCurrentWeight(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded-lg text-white"
            />
          </div>
          <div>
            <label className="text-gray-400">Goal Weight (kg)</label>
            <input
              type="number"
              value={goalWeight}
              onChange={(e) => setGoalWeight(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded-lg text-white"
            />
          </div>
          <div>
            <label className="text-gray-400">Goal Type</label>
            <select
              value={goalType}
              onChange={(e) => setGoalType(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded-lg text-white"
            >
              <option value="weight_loss">Weight Loss</option>
              <option value="muscle_building">Muscle Building</option>
            </select>
          </div>
          <button
            onClick={calculateDailyCalories}
            className="w-full bg-yellow-500 text-black font-bold py-2 rounded-lg hover:bg-yellow-400 transition"
          >
            Calculate Daily Calories
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeightGoalInput;