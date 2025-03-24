import { FaLeaf, FaDrumstickBite } from "react-icons/fa";

const FoodCard = ({ food }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={food.image} 
          alt={food.name} 
          className="w-full h-40 object-cover rounded-lg mb-3"
          loading="lazy"
        />
        <span className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-bold ${food.type === "Veg" ? "bg-green-600" : "bg-red-600"}`}>
          {food.type === "Veg" ? <FaLeaf className="inline mr-1" /> : <FaDrumstickBite className="inline mr-1" />}
          {food.type}
        </span>
      </div>
      
      <h4 className="text-lg font-bold mb-1 line-clamp-1">{food.name}</h4>
      
      <div className="flex justify-between items-center mb-2">
        <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs font-bold">
          {food.calories} kcal
        </span>
        <div className="flex space-x-1">
          <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs">
            P: {food.protein}g
          </span>
          <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full text-xs">
            C: {food.carbs}g
          </span>
          <span className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full text-xs">
            F: {food.fats}g
          </span>
        </div>
      </div>
      
      <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-medium py-2 rounded-lg transition mt-2">
        Add to Meal
      </button>
    </div>
  );
};

export default FoodCard;