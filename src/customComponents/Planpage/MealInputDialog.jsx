const MealInputDialog = ({ showMealDialog, setShowMealDialog, mealDetails, setMealDetails, saveMeal }) => {
  if (!showMealDialog) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-semibold mb-4">Add Meal</h2>
        <input type="text" placeholder="Meal Name" className="w-full p-2 mb-2 bg-gray-800 rounded" 
          value={mealDetails.name} 
          onChange={(e) => setMealDetails({ ...mealDetails, name: e.target.value })} 
        />
        <button onClick={saveMeal} className="bg-yellow-500 px-4 py-2 rounded text-black font-semibold">Save</button>
        <button onClick={() => setShowMealDialog(false)} className="bg-red-500 px-4 py-2 rounded text-white ml-2">Cancel</button>
      </div>
    </div>
  );
};

export default MealInputDialog;
