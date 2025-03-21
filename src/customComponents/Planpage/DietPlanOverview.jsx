import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaFire, FaUtensils, FaBalanceScale } from "react-icons/fa";

const DietPlanOverview = ({ selectedDate, meals, dailyCalories, goalType = "weight_loss" }) => {
  const totalCaloriesConsumed = meals.reduce((sum, meal) => sum + meal.calories, 0);
  const progress = (totalCaloriesConsumed / dailyCalories) * 100;

  // Macronutrient recommendations based on goal type
  const macronutrientRecommendations = {
    weight_loss: {
      carbs: { percentage: 40, description: "Moderate carbs for sustained energy" },
      protein: { percentage: 30, description: "Higher protein to preserve muscle mass" },
      fats: { percentage: 30, description: "Healthy fats for satiety" },
    },
    muscle_building: {
      carbs: { percentage: 50, description: "Higher carbs for energy and recovery" },
      protein: { percentage: 35, description: "High protein for muscle growth" },
      fats: { percentage: 15, description: "Lower fats to prioritize carbs and protein" },
    },
  };

  // Validate goalType
  const validGoalType = macronutrientRecommendations[goalType] ? goalType : "weight_loss";
  const { carbs, protein, fats } = macronutrientRecommendations[validGoalType];

  // Calculate macronutrient grams based on daily calories
  const calculateMacronutrientGrams = (percentage) => {
    return ((dailyCalories * percentage) / 100 / 4).toFixed(1); // 1g of carbs/protein = 4 kcal
  };

  const carbsGrams = calculateMacronutrientGrams(carbs.percentage);
  const proteinGrams = calculateMacronutrientGrams(protein.percentage);
  const fatsGrams = ((dailyCalories * fats.percentage) / 100 / 9).toFixed(1); // 1g of fat = 9 kcal

  // Calculate consumed macronutrients
  const consumedCarbs = meals.reduce((sum, meal) => sum + meal.carbs, 0);
  const consumedProtein = meals.reduce((sum, meal) => sum + meal.protein, 0);
  const consumedFats = meals.reduce((sum, meal) => sum + meal.fats, 0);

  // Calculate macronutrient progress
  const carbsProgress = (consumedCarbs / carbsGrams) * 100;
  const proteinProgress = (consumedProtein / proteinGrams) * 100;
  const fatsProgress = (consumedFats / fatsGrams) * 100;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
        <FaUtensils className="text-yellow-500" />
        <span>Diet Plan for {selectedDate.toLocaleDateString()}</span>
      </h2>

      {/* Progress Bar */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-between mb-6">
          <div className="w-24 h-24">
            <CircularProgressbar
              value={progress}
              text={`${Math.round(progress)}%`}
              styles={buildStyles({
                textColor: "#fff",
                pathColor: "#facc15",
                trailColor: "#333",
                textSize: "16px",
              })}
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <FaFire className="text-yellow-500" />
              <p className="text-gray-400">Daily Target: {dailyCalories} kcal</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaFire className="text-green-500" />
              <p className="text-gray-400">Consumed: {totalCaloriesConsumed} kcal</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaFire className="text-red-500" />
              <p className="text-gray-400">Remaining: {dailyCalories - totalCaloriesConsumed} kcal</p>
            </div>
          </div>
        </div>



        {/* Macronutrient Progress */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <FaBalanceScale className="text-yellow-500" />
            <span>Macronutrient Progress</span>
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-2">
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-2">
                <CircularProgressbar
                  value={carbsProgress}
                  text={`${Math.round(carbsProgress)}%`}
                  styles={buildStyles({
                    textColor: "#fff",
                    pathColor: "#10B981", // Green
                    trailColor: "#333",
                    textSize: "16px",
                  })}
                />
              </div>
              <p className="text-sm font-semibold text-center">Carbs</p>
              <p className="text-[10px] text-gray-400 text-center">
                {consumedCarbs}g / {carbsGrams}g
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-2">
                <CircularProgressbar
                  value={proteinProgress}
                  text={`${Math.round(proteinProgress)}%`}
                  styles={buildStyles({
                    textColor: "#fff",
                    pathColor: "#3B82F6", // Blue
                    trailColor: "#333",
                    textSize: "16px",
                  })}
                />
              </div>
              <p className="text-sm font-semibold text-center">Protein</p>
              <p className="text-[10px] text-gray-400 text-center">
                {consumedProtein}g / {proteinGrams}g
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-2">
                <CircularProgressbar
                  value={fatsProgress}
                  text={`${Math.round(fatsProgress)}%`}
                  styles={buildStyles({
                    textColor: "#fff",
                    pathColor: "#EF4444", // Red
                    trailColor: "#333",
                    textSize: "16px",
                  })}
                />
              </div>
              <p className="text-sm font-semibold text-center">Fats</p>
              <p className="text-[10px] text-gray-400 text-center">
                {consumedFats}g / {fatsGrams}g
              </p>
            </div>
          </div>
        </div>
      </div>




      

      {/* Logged Meals */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <FaBalanceScale className="text-yellow-500" />
          <span>Logged Meals</span>
        </h3>
        <div className="space-y-4">
          {meals.map((meal, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">{meal.name}</p>
                <p className="text-sm text-yellow-500">{meal.calories} kcal</p>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {/* Carbs Badge */}
                <div className="bg-green-500/10 px-3 py-1 rounded-full flex items-center space-x-1">
                  <span className="text-sm text-green-500">Carbs</span>
                  <span className="text-sm text-green-500">{meal.carbs}g</span>
                </div>
                {/* Fats Badge */}
                <div className="bg-red-500/10 px-3 py-1 rounded-full flex items-center space-x-1">
                  <span className="text-sm text-red-500">Fats</span>
                  <span className="text-sm text-red-500">{meal.fats}g</span>
                </div>
                {/* Protein Badge */}
                <div className="bg-blue-500/10 px-3 py-1 rounded-full flex items-center space-x-1">
                  <span className="text-sm text-blue-500">Protein</span>
                  <span className="text-sm text-blue-500">{meal.protein}g</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DietPlanOverview;