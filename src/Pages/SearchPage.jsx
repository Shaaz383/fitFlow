import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import BottomNavbar from "../customComponents/BottomNavbar";
import logoDark from "../assets/logoDark.png";

const foodResults = {
  Breakfast: [
    { name: "Masala Oats", calories: 150, protein: "5g", carbs: "25g", fats: "3g", type: "Veg", image: "https://source.unsplash.com/200x150/?oats" },
    { name: "Sprout Salad", calories: 120, protein: "8g", carbs: "20g", fats: "2g", type: "Veg", image: "https://source.unsplash.com/200x150/?sprouts" }
  ],
  Lunch: [
    { name: "Paneer Bhurji", calories: 250, protein: "18g", carbs: "10g", fats: "15g", type: "Veg", image: "https://source.unsplash.com/200x150/?paneer" },
    { name: "Dal Khichdi", calories: 300, protein: "12g", carbs: "50g", fats: "8g", type: "Veg", image: "https://source.unsplash.com/200x150/?khichdi" }
  ],
  Dinner: [
    { name: "Grilled Fish", calories: 350, protein: "40g", carbs: "5g", fats: "15g", type: "Non-Veg", image: "https://source.unsplash.com/200x150/?fish" },
    { name: "Vegetable Soup", calories: 100, protein: "5g", carbs: "15g", fats: "2g", type: "Veg", image: "https://source.unsplash.com/200x150/?soup" }
  ],
  Other: [
    { name: "Dry Fruits Mix", calories: 200, protein: "6g", carbs: "20g", fats: "12g", type: "Veg", image: "https://source.unsplash.com/200x150/?dryfruits" }
  ]
};

const SearchPage = () => {
  const [foodType, setFoodType] = useState("Veg");
  const [filteredResults, setFilteredResults] = useState(foodResults);

  const filterResults = () => {
    const updatedResults = {};
    Object.keys(foodResults).forEach((category) => {
      updatedResults[category] = foodResults[category].filter(
        (item) => item.type === foodType
      );
    });
    setFilteredResults(updatedResults);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen pb-20 p-4">
      <div className="flex items-center justify-between mb-4">
        <img src={logoDark} alt="Logo" className="h-20 w-auto filter invert" />
        <h2 className="text-xl font-bold">Find Your Meal</h2>
        <FaSearch className="text-yellow-500 text-xl" />
      </div>

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

      <button
        className="w-full bg-yellow-500 py-2 rounded-lg mb-4 text-black font-bold"
        onClick={filterResults}
      >
        Search Meals
      </button>

      {Object.keys(filteredResults).map((category) => (
        <div key={category} className="mb-6">
          <h3 className="text-lg font-bold mb-2 border-b pb-1 border-gray-600">{category}</h3>
          <div className="grid grid-cols-2 gap-4">
            {filteredResults[category].map((food, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg text-center">
                <img src={food.image} alt={food.name} className="w-full h-32 object-cover rounded" />
                <h4 className="text-lg font-semibold mt-2">{food.name}</h4>
                <p className="text-sm text-gray-400">Calories: {food.calories}</p>
                <p className="text-sm text-gray-400">Protein: {food.protein}</p>
                <p className="text-sm text-gray-400">Carbs: {food.carbs}</p>
                <p className="text-sm text-gray-400">Fats: {food.fats}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <BottomNavbar />
    </div>
  );
};

export default SearchPage;
