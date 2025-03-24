const FoodFilter = ({ foodType, setFoodType, filterResults }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Food Type</h3>
        <div className="bg-gray-800 p-1 rounded-lg flex items-center">
          <button
            className={`px-4 py-2 rounded-lg transition ${foodType === "Veg" ? "bg-green-500 text-white" : "text-gray-400 hover:text-white"}`}
            onClick={() => setFoodType("Veg")}
          >
            Veg
          </button>
          <button
            className={`px-4 py-2 rounded-lg transition ${foodType === "Non-Veg" ? "bg-red-500 text-white" : "text-gray-400 hover:text-white"}`}
            onClick={() => setFoodType("Non-Veg")}
          >
            Non-Veg
          </button>
        </div>
      </div>

      <button
        className="w-full bg-yellow-500 hover:bg-yellow-400 py-2 rounded-lg text-black font-bold transition"
        onClick={filterResults}
      >
        Search Meals
      </button>
    </div>
  );
};

export default FoodFilter;