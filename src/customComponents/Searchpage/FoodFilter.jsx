const FoodFilter = ({ foodType, setFoodType, filterResults }) => {
  return (
    <div className="mb-4">
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
        className="w-full bg-yellow-500 py-2 rounded-lg text-black font-bold"
        onClick={filterResults}
      >
        Search Meals
      </button>
    </div>
  );
};

export default FoodFilter;
