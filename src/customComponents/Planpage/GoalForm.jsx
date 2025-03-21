const GoalForm = ({ currentWeight, setCurrentWeight, goalWeight, setGoalWeight, updateCalories, dietMessage }) => {
  return (
    <div className="p-4 flex flex-col items-center">
      <h2 className="text-xl font-semibold">Set Your Goals</h2>
      <div className="flex space-y-3 mt-3 flex-col w-full max-w-xs">
        <label className="text-gray-300">Current Weight (kg)</label>
        <input type="number" className="bg-gray-800 p-2 rounded" value={currentWeight} min="30" max="300" 
          onChange={(e) => setCurrentWeight(Math.max(30, Math.min(300, Number(e.target.value))))} 
        />
        <label className="text-gray-300">Goal Weight (kg)</label>
        <input type="number" className="bg-gray-800 p-2 rounded" value={goalWeight} min="30" max="300" 
          onChange={(e) => setGoalWeight(Math.max(30, Math.min(300, Number(e.target.value))))} 
        />
        <button onClick={updateCalories} className="bg-yellow-500 text-black px-4 py-2 rounded">Submit</button>
      </div>
      {dietMessage && <p className="text-gray-400 mt-2">{dietMessage}</p>}
    </div>
  );
};

export default GoalForm;
