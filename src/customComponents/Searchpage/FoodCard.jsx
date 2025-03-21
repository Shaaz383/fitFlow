const FoodCard = ({ food }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg text-center">
      <img src={food.image} alt={food.name} className="w-full h-32 object-cover rounded" />
      <h4 className="text-lg font-semibold mt-2">{food.name}</h4>
      <p className="text-sm text-gray-400">Calories: {food.calories}</p>
      <p className="text-sm text-gray-400">Protein: {food.protein}</p>
      <p className="text-sm text-gray-400">Carbs: {food.carbs}</p>
      <p className="text-sm text-gray-400">Fats: {food.fats}</p>
    </div>
  );
};

export default FoodCard;
