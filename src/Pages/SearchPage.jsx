import { useState } from "react";
import { FaSearch, FaUtensils } from "react-icons/fa";
import BottomNavbar from "../customComponents/BottomNavbar";

const dietaryOptions = [
  "Vegetarian", "Vegan", "High Protein", "Low Carb", "No Sugar",
  "Keto", "Paleo", "Gluten-Free", "Dairy-Free"
];

const foodResults = [
  { name: "Grilled Chicken", calories: 220, protein: "30g", carbs: "2g", fats: "5g", type: "Non-Veg" },
  { name: "Tofu Stir Fry", calories: 180, protein: "15g", carbs: "12g", fats: "8g", type: "Veg" },
  { name: "Salmon Salad", calories: 250, protein: "28g", carbs: "5g", fats: "12g", type: "Non-Veg" },
  { name: "Chickpea Curry", calories: 200, protein: "10g", carbs: "30g", fats: "6g", type: "Veg" }
];

const SearchPage = () => {
  const [dietPreference, setDietPreference] = useState("Vegetarian");
  const [foodType, setFoodType] = useState("Veg");
  const [searchResults, setSearchResults] = useState(foodResults);

  const filterResults = () => {
    const filtered = foodResults.filter(
      (item) => item.type === (foodType === "Veg" ? "Veg" : "Non-Veg")
    );
    setSearchResults(filtered);
  };

  return (
    <div className="bg-black text-white min-h-screen pb-20 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Find Your Meal</h2>
        <FaSearch className="text-gray-400 text-xl" />
      </div>

      {/* Diet Preference Selection */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Dietary Preference</h3>
        <select
          className="w-full p-2 bg-gray-800 rounded-lg"
          value={dietPreference}
          onChange={(e) => setDietPreference(e.target.value)}
        >
          {dietaryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Veg / Non-Veg Toggle */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Food Type</h3>
        <div className="bg-gray-800 p-1 rounded-lg flex items-center">
          <button
            className={`px-4 py-2 rounded-lg ${foodType === "Veg" ? "bg-green-500" : "text-gray-400"}`}
            onClick={() => setFoodType("Veg")}
          >
            Veg
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${foodType === "Non-Veg" ? "bg-red-500" : "text-gray-400"}`}
            onClick={() => setFoodType("Non-Veg")}
          >
            Non-Veg
          </button>
        </div>
      </div>

      {/* Search Button */}
      <button
        className="w-full bg-blue-500 py-2 rounded-lg mb-4"
        onClick={filterResults}
      >
        Search Meals
      </button>

      {/* Search Results */}
      <div className="space-y-4">
        {searchResults.map((food, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-lg flex justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold">{food.name}</h4>
              <p className="text-sm text-gray-400">Calories: {food.calories}</p>
              <p className="text-sm text-gray-400">Protein: {food.protein}</p>
              <p className="text-sm text-gray-400">Carbs: {food.carbs}</p>
              <p className="text-sm text-gray-400">Fats: {food.fats}</p>
            </div>
            <FaUtensils className="text-yellow-400 text-2xl" />
          </div>
        ))}
      </div>

      <BottomNavbar />
    </div>
  );
};

export default SearchPage;
