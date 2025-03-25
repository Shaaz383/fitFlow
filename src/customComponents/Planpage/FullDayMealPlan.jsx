import { useState, useEffect } from "react";
import { FaUtensils, FaLeaf, FaDrumstickBite, FaCookie } from "react-icons/fa";
import { mealData } from "@/data/mealData"; // Changed import

const FullDayMealPlan = () => {
  const [currentMealPlan, setCurrentMealPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Meal categories configuration
  const mealTimes = [
    { key: "breakfast", time: "7-8 AM", label: "Breakfast", icon: <FaLeaf className="text-yellow-400" />, color: "bg-yellow-500" },
    { key: "midMorningSnack", time: "10-11 AM", label: "Mid-Morning Snack", icon: <FaCookie className="text-blue-400" />, color: "bg-blue-500" },
    { key: "lunch", time: "1-2 PM", label: "Lunch", icon: <FaDrumstickBite className="text-green-400" />, color: "bg-green-500" },
    { key: "preWorkout", time: "4-5 PM", label: "Pre-Workout", icon: <FaUtensils className="text-purple-400" />, color: "bg-purple-500" },
    { key: "postWorkout", time: "Post-Workout", label: "Post-Workout", icon: <FaCookie className="text-red-400" />, color: "bg-red-500" },
    { key: "dinner", time: "8-9 PM", label: "Dinner", icon: <FaDrumstickBite className="text-pink-400" />, color: "bg-pink-500" },
  ];

  // Generate a random meal plan
  const generateMealPlan = () => {
    const newMealPlan = {};
    mealTimes.forEach(({ key }) => {
      const options = mealData[key];
      if (options && options.length > 0) {
        newMealPlan[key] = options[Math.floor(Math.random() * options.length)];
      }
    });
    setCurrentMealPlan(newMealPlan);
  };

  // Generate initial meal plan
  useEffect(() => {
    generateMealPlan();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="p-4 flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center">
          <FaUtensils className="text-yellow-500 text-xl mr-2" />
          Full-Day Meal Plan
        </h2>

        <div className="space-y-4">
          {mealTimes.map(({ key, time, label, icon, color }) => {
            const meal = currentMealPlan?.[key];
            if (!meal) return null;

            return (
              <div 
                key={key} 
                className="bg-gray-700 px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                  {/* Meal Time and Label */}
                  <div className="flex items-center gap-3 min-w-[180px]">
                    <span className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${color}`}>
                      {time}
                    </span>
                    <div className="flex items-center gap-2">
                      {icon}
                      <h3 className="text-white font-semibold">{label}</h3>
                    </div>
                  </div>

                  {/* Meal Items */}
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2">
                      {meal.meal.split(" + ").map((item, index) => (
                        <span 
                          key={index} 
                          className="bg-gray-600 text-white text-xs font-medium px-3 py-1 rounded-full hover:bg-gray-500 transition"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Nutrition Info */}
                  <div className="flex flex-wrap gap-3 sm:gap-4 sm:justify-end min-w-[200px]">
                    <NutritionBadge value={meal.kcal} unit="kcal" color="text-green-400" />
                    <NutritionBadge value={meal.protein} unit="protein" color="text-blue-400" />
                    <NutritionBadge value={meal.carbs} unit="carbs" color="text-yellow-400" />
                    <NutritionBadge value={meal.fats} unit="fats" color="text-gray-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={generateMealPlan}
          className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
          </svg>
          Generate New Plan
        </button>
      </div>
    </div>
  );
};

// Helper component for nutrition badges
const NutritionBadge = ({ value, unit, color }) => (
  <div className={`flex flex-col items-center ${color}`}>
    <span className="font-bold text-sm">{value}</span>
    <span className="text-xs opacity-80">{unit}</span>
  </div>
);

export default FullDayMealPlan;