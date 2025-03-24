import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import BottomNavbar from "../customComponents/BottomNavbar";
import logoDark from "../assets/logoDark.png";
import FoodCard from "@/customComponents/Searchpage/FoodCard";
import FoodFilter from "@/customComponents/Searchpage/FoodFilter";
import foodResults from "@/data/searchData";

const mealCategories = ["Breakfast", "Lunch", "Dinner", "Snacks"];

const SearchPage = () => {
  const [foodType, setFoodType] = useState("Veg");
  const [selectedCategory, setSelectedCategory] = useState("Breakfast");
  const [filteredResults, setFilteredResults] = useState(foodResults);
  const [searchQuery, setSearchQuery] = useState("");

  const filterResults = () => {
    const updatedResults = {};
    Object.keys(foodResults).forEach((category) => {
      if (category === selectedCategory) {
        updatedResults[category] = foodResults[category].filter(
          (item) => item.type === foodType && 
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

  return (
    <div className="bg-gray-900 text-white min-h-screen pb-20 p-4">
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
            onKeyPress={(e) => e.key === 'Enter' && filterResults()}
          />
        </div>
      </div>

      {/* Meal Type Tabs */}
      <div className="flex justify-between bg-gray-800 p-2 rounded-lg mb-4">
        {mealCategories.map((category) => (
          <button
            key={category}
            className={`w-1/4 text-center py-2 font-semibold rounded-lg transition ${
              selectedCategory === category ? "bg-yellow-500 text-black" : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Filters for Veg / Non-Veg */}
      <FoodFilter foodType={foodType} setFoodType={setFoodType} filterResults={filterResults} />

      {/* Display Results for Selected Category */}
      {filteredResults[selectedCategory]?.length > 0 ? (
        <div className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredResults[selectedCategory].map((food, index) => (
              <FoodCard key={index} food={food} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-10">
          <FaSearch className="mx-auto text-4xl text-gray-500 mb-3" />
          <h3 className="text-xl font-bold text-gray-400">No meals found</h3>
          <p className="text-gray-500">Try changing your filters or search query</p>
        </div>
      )}

      <BottomNavbar />
    </div>
  );
};

export default SearchPage;
