import { useState } from "react";

const MealLogging = ({ addMeal, onClose }) => {
  const [mealName, setMealName] = useState("");
  const [calories, setCalories] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fats, setFats] = useState("");
  const [protein, setProtein] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mealName && calories && carbs && fats && protein) {
      addMeal({
        name: mealName,
        calories: parseFloat(calories),
        carbs: parseFloat(carbs),
        fats: parseFloat(fats),
        protein: parseFloat(protein),
      });
      setMealName("");
      setCalories("");
      setCarbs("");
      setFats("");
      setProtein("");
      onClose(); // Close the popup after adding the meal
    }
  };

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Log Your Meal</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Meal Name"
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
          className="w-full p-2 bg-gray-800 rounded-lg text-white placeholder-gray-400"
          required
        />
        <input
          type="number"
          placeholder="Calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          className="w-full p-2 bg-gray-800 rounded-lg text-white placeholder-gray-400"
          required
        />
        <input
          type="number"
          placeholder="Carbs (g)"
          value={carbs}
          onChange={(e) => setCarbs(e.target.value)}
          className="w-full p-2 bg-gray-800 rounded-lg text-white placeholder-gray-400"
          required
        />
        <input
          type="number"
          placeholder="Fats (g)"
          value={fats}
          onChange={(e) => setFats(e.target.value)}
          className="w-full p-2 bg-gray-800 rounded-lg text-white placeholder-gray-400"
          required
        />
        <input
          type="number"
          placeholder="Protein (g)"
          value={protein}
          onChange={(e) => setProtein(e.target.value)}
          className="w-full p-2 bg-gray-800 rounded-lg text-white placeholder-gray-400"
          required
        />
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600 transition"
          >
            Close
          </button>
          <button
            type="submit"
            className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 transition"
          >
            Add Meal
          </button>
        </div>
      </form>
    </div>
  );
};

export default MealLogging;