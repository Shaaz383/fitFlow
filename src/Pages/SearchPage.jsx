import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import BottomNavbar from "../customComponents/BottomNavbar";
import logoDark from "../assets/logoDark.png";
import FoodCard from "@/customComponents/Searchpage/FoodCard";
import FoodFilter from "@/customComponents/Searchpage/FoodFilter";
import foodResults from "@/data/foodResults";



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
      
      <FoodFilter foodType={foodType} setFoodType={setFoodType} filterResults={filterResults} />

      {Object.keys(filteredResults).map((category) => (
        <div key={category} className="mb-6">
          <h3 className="text-lg font-bold mb-2 border-b pb-1 border-gray-600">{category}</h3>
          <div className="grid grid-cols-2 gap-4">
            {filteredResults[category].map((food, index) => (
              <FoodCard key={index} food={food} />
            ))}
          </div>
        </div>
      ))}

      <BottomNavbar />
    </div>
  );
};

export default SearchPage;
