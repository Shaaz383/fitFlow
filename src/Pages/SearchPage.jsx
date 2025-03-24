import { useState } from "react";
import { FaSearch, FaUtensils } from "react-icons/fa";
import BottomNavbar from "../customComponents/BottomNavbar";
import logoDark from "../assets/logoDark.png";
import FoodCard from "@/customComponents/Searchpage/FoodCard";
import FoodFilter from "@/customComponents/Searchpage/FoodFilter";
import foodResults from "@/data/searchData";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const mealCategories = ["Breakfast", "Lunch", "Dinner", "Snacks"];

const SearchPage = () => {
  const [foodType, setFoodType] = useState("Veg");
  const [selectedCategory, setSelectedCategory] = useState("Breakfast");
  const [filteredResults, setFilteredResults] = useState(foodResults);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [showMealSummary, setShowMealSummary] = useState(false);

  const filterResults = () => {
    const updatedResults = {};
    Object.keys(foodResults).forEach((category) => {
      if (category === selectedCategory) {
        updatedResults[category] = foodResults[category].filter(
          (item) =>
            item.type === foodType &&
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
    });
    setFilteredResults(updatedResults);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value === "") {
      setFilteredResults(foodResults);
    }
  };

  // Function to add meals with notification
  const addToMeal = (food) => {
    setSelectedMeals([...selectedMeals, food]);

    // Show toast notification when meal is added
    toast.success(`${food.name} added to meal!`, {
      position: "top-right",
      autoClose: 2000, // Auto close after 2 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  // Function to calculate total calories
  const totalCalories = selectedMeals.reduce(
    (total, food) => total + food.calories,
    0
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen pb-20 p-4">
      <ToastContainer /> {/* Toast notification container */}

      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <img src={logoDark} alt="Logo" className="h-16 w-auto filter invert" />
        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search meals..."
            className="bg-gray-800 pl-10 pr-4 py-2 rounded-lg w-60 focus:w-68 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyPress={(e) => e.key === "Enter" && filterResults()}
          />
        </div>
      </div>

      {/* Meal Type Tabs */}
      <div className="flex justify-between bg-gray-800 p-2 rounded-lg mb-4">
        {mealCategories.map((category) => (
          <button
            key={category}
            className={`w-1/4 text-center py-2 font-semibold rounded-lg transition ${
              selectedCategory === category
                ? "bg-yellow-500 text-black"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Filters for Veg / Non-Veg */}
      <FoodFilter
        foodType={foodType}
        setFoodType={setFoodType}
        filterResults={filterResults}
      />

      {/* Display Results for Selected Category */}
      {filteredResults[selectedCategory]?.length > 0 ? (
        <div className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredResults[selectedCategory].map((food, index) => (
              <FoodCard key={index} food={food} addToMeal={addToMeal} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-10">
          <FaSearch className="mx-auto text-4xl text-gray-500 mb-3" />
          <h3 className="text-xl font-bold text-gray-400">No meals found</h3>
          <p className="text-gray-500">
            Try changing your filters or search query
          </p>
        </div>
      )}

      {/* View Selected Meals Button */}
      {selectedMeals.length > 0 && (
        <button
          className="w-full bg-green-500 hover:bg-green-400 py-2 rounded-lg text-black font-bold transition flex items-center justify-center mt-4"
          onClick={() => setShowMealSummary(true)}
        >
          <FaUtensils className="mr-2" /> View Selected Meals ({selectedMeals.length})
        </button>
      )}

      {/* Meal Summary Modal */}
      {showMealSummary && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">
              Selected Meals
            </h3>
            <ul className="mb-4 max-h-60 overflow-y-auto">
              {selectedMeals.map((meal, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-700 px-3 py-2 rounded-lg mb-2"
                >
                  <span>{meal.name}</span>
                  <span className="text-yellow-400">{meal.calories} kcal</span>
                </li>
              ))}
            </ul>
            <p className="text-lg font-semibold text-white">
              Total Calories: <span className="text-yellow-400">{totalCalories} kcal</span>
            </p>
            <button
              className="w-full mt-4 bg-red-500 hover:bg-red-400 py-2 rounded-lg text-black font-bold transition"
              onClick={() => setShowMealSummary(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <BottomNavbar />
    </div>
  );
};

export default SearchPage;
