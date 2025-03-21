import { FaUtensils, FaLeaf, FaDrumstickBite, FaCookie } from "react-icons/fa";

const DietSuggestions = ({ dailyCalories, goalType }) => {
  const suggestions = [
    {
      title: "High Protein Breakfast",
      description: "Eggs, avocado toast, and a protein shake.",
      calories: 400,
      type: "muscle_building",
      icon: <FaLeaf />,
    },
    {
      title: "Balanced Lunch",
      description: "Grilled chicken salad",
      calories: 400,
      type: "weight_loss",
      icon: <FaDrumstickBite />,
    },
    {
      title: "Light Snack",
      description: "Greek yogurt with berries",
      calories: 150,
      type: "weight_loss",
      icon: <FaCookie />,
    },
    {
      title: "Hearty Dinner",
      description: "Grilled salmon with sweet potatoes",
      calories: 500,
      type: "muscle_building",
      icon: <FaUtensils />,
    },
  ];

  const filteredSuggestions = suggestions.filter((meal) => meal.type === goalType);

  return (
    <div className="p-4">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white flex items-center space-x-2">
            <FaUtensils className="text-yellow-500 text-2xl animate-pulse" />
            <span>Diet Suggestions</span>
          </h2>
          <span
            className={`px-3 py-1 rounded-full font-semibold ${
              goalType === "weight_loss" ? "bg-red-500 text-white" : "bg-blue-500 text-white"
            }`}
          >
            {goalType === "weight_loss" ? "Weight Loss Plan" : "Muscle Building Plan"}
          </span>
        </div>

        <div className="space-y-4">
          {filteredSuggestions.map((meal, index) => (
            <div key={index} className="bg-gray-700 px-4 py-3 rounded-lg flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400 text-lg">{meal.icon}</span>
                <h3 className="text-gray-300 font-semibold">{meal.title}</h3>
              </div>
              <div className="text-right">
                <p className="text-gray-400">{meal.description}</p>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {meal.calories} kcal
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DietSuggestions;
