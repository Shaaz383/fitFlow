import { FaLeaf, FaDrumstickBite } from "react-icons/fa";

const FoodCard = ({ food, addToMeal }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-40 object-cover rounded-lg mb-3"
          loading="lazy"
        />
        <span
          className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-bold ${
            food.type === "Veg" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {food.type === "Veg" ? (
            <FaLeaf className="inline mr-1" />
          ) : (
            <FaDrumstickBite className="inline mr-1" />
          )}
          {food.type}
        </span>
      </div>

      <h4 className="text-lg font-bold mb-1 line-clamp-1 text-white">{food.name}</h4>

      {/* Macronutrient Badges */}
      <div className="flex flex-wrap gap-2 mb-2">
        <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs font-bold">
          {food.calories} kcal
        </span>
        <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs font-bold">
          {food.protein}g Protein
        </span>
        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-bold">
          {food.carbs}g Carbs
        </span>
        <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs font-bold">
          {food.fats}g Fats
        </span>
      </div>

      <button
        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-medium py-2 rounded-lg transition mt-2"
        onClick={() => addToMeal(food)}
      >
        Add to Meal
      </button>
    </div>
  );
};

export default FoodCard;
