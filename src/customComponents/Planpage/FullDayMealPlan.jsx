import { FaUtensils, FaLeaf, FaDrumstickBite, FaCookie } from "react-icons/fa";

const FullDayMealPlan = ({ goalType, dailyCalories }) => {
  const mealPlan = {
    weight_loss: {
      breakfast: { meal: "Oatmeal with fruits and nuts", kcal: 300 },
      lunch: { meal: "Grilled chicken salad", kcal: 400 },
      dinner: { meal: "Steamed fish with vegetables", kcal: 350 },
      snacks: { meal: "Greek yogurt with berries", kcal: 150 },
    },
    muscle_building: {
      breakfast: { meal: "Protein pancakes with peanut butter", kcal: 400 },
      lunch: { meal: "Beef stir-fry with rice", kcal: 600 },
      dinner: { meal: "Grilled salmon with sweet potatoes", kcal: 500 },
      snacks: { meal: "Protein shake with banana", kcal: 200 },
    },
  };

  return (
    <div className="p-4">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white flex items-center space-x-2">
            <FaUtensils className="text-yellow-500 text-xl animate-pulse" />
            <span className="text-[14px]">Full-Day Meal Plan</span>
          </h2>
          <span
            className={`px-3 text-[12px] py-1 rounded-full font-semibold ${
              goalType === "weight_loss" ? "bg-red-500 text-white" : "bg-blue-500 text-white"
            }`}
          >
            {goalType === "weight_loss" ? "Weight Loss Plan" : "Muscle Building Plan"}
          </span>
        </div>

        <div className="space-y-4">
          {[
            { label: "Breakfast", icon: <FaLeaf />, key: "breakfast" },
            { label: "Lunch", icon: <FaDrumstickBite />, key: "lunch" },
            { label: "Dinner", icon: <FaUtensils />, key: "dinner" },
            { label: "Snacks", icon: <FaCookie />, key: "snacks" },
          ].map(({ label, icon, key }) => (
            <div key={key} className="bg-gray-700 px-3 py-3 rounded-lg flex justify-between items-center">
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400 text-lg">{icon}</span>
                <h3 className="text-gray-300 font-semibold">{label}</h3>
              </div>
                <p className="text-gray-400 text-[12px]">{mealPlan[goalType][key].meal}</p>

            </div>
              <div className="text-right">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {mealPlan[goalType][key].kcal} kcal
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullDayMealPlan;
