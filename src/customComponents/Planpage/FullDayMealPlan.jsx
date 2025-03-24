import { useState } from "react";
import { mealData } from "@/data/mealData";
import { FaUtensils, FaLeaf, FaDrumstickBite, FaCookie, FaClock } from "react-icons/fa";

const FullDayMealPlan = () => {
  const [mealPlan, setMealPlan] = useState(generateRandomMealPlan());

  // Function to generate a random meal plan
  function generateRandomMealPlan() {
    return {
      breakfast: mealData.breakfast[Math.floor(Math.random() * mealData.breakfast.length)],
      midMorningSnack: mealData.midMorningSnack[Math.floor(Math.random() * mealData.midMorningSnack.length)],
      lunch: mealData.lunch[Math.floor(Math.random() * mealData.lunch.length)],
      preWorkout: mealData.preWorkout[Math.floor(Math.random() * mealData.preWorkout.length)],
      postWorkout: mealData.postWorkout[Math.floor(Math.random() * mealData.postWorkout.length)],
      dinner: mealData.dinner[Math.floor(Math.random() * mealData.dinner.length)],
    };
  }

  // Meal categories with labels, icons, and colors
  const mealTimes = [
    { key: "breakfast", time: "7-8 AM", label: "Breakfast", icon: <FaLeaf />, color: "bg-yellow-500" },
    { key: "midMorningSnack", time: "10-11 AM", label: "Mid-Morning Snack", icon: <FaCookie />, color: "bg-blue-500" },
    { key: "lunch", time: "1-2 PM", label: "Lunch", icon: <FaDrumstickBite />, color: "bg-green-500" },
    { key: "preWorkout", time: "4-5 PM", label: "Pre-Workout", icon: <FaUtensils />, color: "bg-purple-500" },
    { key: "postWorkout", time: "Post-Workout", label: "Post-Workout", icon: <FaCookie />, color: "bg-red-500" },
    { key: "dinner", time: "8-9 PM", label: "Dinner", icon: <FaDrumstickBite />, color: "bg-pink-500" },
  ];

  return (
    <div className="p-4">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center">
          <FaUtensils className="text-yellow-500 text-xl mr-2" />
          Full-Day Meal Plan
        </h2>

        <div className="space-y-4">
          {mealTimes.map(({ key, time, label, icon, color }) => {
            const { meal, kcal, protein, carbs, fats } = mealPlan[key];

            return (
              <div key={key} className="bg-gray-700 px-4 py-3 rounded-lg shadow-md flex flex-col gap-2 sm:flex-row sm:justify-between items-start sm:items-center">
                
                {/* Left Side: Meal Label & Time */}
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${color}`}>
                    {time}
                  </span>
                  <span className="text-yellow-400 text-lg">{icon}</span>
                  <h3 className="text-white font-semibold">{label}</h3>
                </div>

                {/* Middle Section: Meal Items in Badges */}
                <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                  {meal.split(" + ").map((item, index) => (
                    <span key={index} className="bg-gray-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>

                {/* Right Side: Macronutrients */}
                <div className="flex flex-wrap gap-4 mt-2 sm:mt-0 ">
                  <span className=" text-green-500  rounded-full text-[10px] font-semibold">
                    {kcal} kcal
                  </span>
                  <span className=" text-blue-500  rounded-full text-[10px] font-semibold">
                    {protein}g Protein
                  </span>
                  <span className=" text-yellow-400 rounded-full text-[10px] font-semibold">
                    {carbs}g Carbs
                  </span>
                  <span className=" text-white px-2  rounded-full text-[10px] font-semibold">
                    {fats}g Fats
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Generate Other Button */}
        <button
          className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full font-bold w-full"
          onClick={() => setMealPlan(generateRandomMealPlan())}
        >
          Generate Other
        </button>
      </div>
    </div>
  );
};

export default FullDayMealPlan;
