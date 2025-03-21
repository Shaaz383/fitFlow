import { useState } from "react";
import BottomNavbar from "../customComponents/BottomNavbar";
import { FaCalendarAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import logoDark from "../assets/logoDark.png";

const PlanPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentWeight, setCurrentWeight] = useState(70);
  const [goalWeight, setGoalWeight] = useState(65);
  const [dailyCalories, setDailyCalories] = useState(2500);
  const [caloriesLog, setCaloriesLog] = useState({});
  const [showMealDialog, setShowMealDialog] = useState(false);
  const [mealDetails, setMealDetails] = useState({ name: "", carbs: "", fats: "", calories: "" });
  const [mealsLog, setMealsLog] = useState({});
  const [dietMessage, setDietMessage] = useState("");

  const getFormattedDate = (date) => date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const formattedDate = getFormattedDate(selectedDate);
  const caloriesConsumed = caloriesLog[formattedDate] || 0;
  const meals = mealsLog[formattedDate] || [];

  const handleDateChange = (offset) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + offset);
    setSelectedDate(newDate);
  };

  const updateCalories = () => {
    if (goalWeight < 30 || goalWeight > 300 || currentWeight < 30 || currentWeight > 300) {
      setDietMessage("Please enter a realistic weight between 30kg and 300kg.");
      return;
    }

    let calorieGoal;
    let message;

    if (goalWeight > currentWeight) {
      calorieGoal = 2800;
      message = "You are aiming to gain weight. Increase your protein and calorie intake.";
    } else if (goalWeight < currentWeight) {
      calorieGoal = 2000;
      message = "You are aiming to lose weight. Focus on a calorie deficit diet with more fiber.";
    } else {
      calorieGoal = 2500;
      message = "You are maintaining your weight. Keep a balanced diet.";
    }

    setDailyCalories(calorieGoal);
    setDietMessage(`${message} Your daily goal is ${calorieGoal} kcal.`);
  };

  const saveMeal = () => {
    if (!mealDetails.name.trim() || !mealDetails.calories) return;

    setMealsLog((prev) => ({
      ...prev,
      [formattedDate]: [...(prev[formattedDate] || []), mealDetails],
    }));

    setCaloriesLog((prev) => ({
      ...prev,
      [formattedDate]: (prev[formattedDate] || 0) + Number(mealDetails.calories),
    }));

    setMealDetails({ name: "", carbs: "", fats: "", calories: "" });
    setShowMealDialog(false);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen pb-20 relative">
      <div className="flex items-center justify-between p-4">
        <img src={logoDark} alt="Logo" className="h-12 w-auto filter invert" />
        <div className="flex items-center space-x-2">
          <FaArrowLeft className="text-yellow-500 cursor-pointer" onClick={() => handleDateChange(-1)} />
          <FaCalendarAlt className="text-yellow-500" />
          <h2 className="text-lg font-semibold text-yellow-500">{formattedDate}</h2>
          <FaArrowRight className="text-yellow-500 cursor-pointer" onClick={() => handleDateChange(1)} />
        </div>
      </div>

      <div className="p-4 flex flex-col items-center">
        <h2 className="text-xl font-semibold">Set Your Goals</h2>
        <div className="flex space-y-3 mt-3 flex-col w-full max-w-xs">
          <label className="text-gray-300">Current Weight (kg)</label>
          <input type="number" className="bg-gray-800 p-2 rounded" value={currentWeight} min="30" max="300" onChange={(e) => setCurrentWeight(Math.max(30, Math.min(300, Number(e.target.value))))} />
          <label className="text-gray-300">Goal Weight (kg)</label>
          <input type="number" className="bg-gray-800 p-2 rounded" value={goalWeight} min="30" max="300" onChange={(e) => setGoalWeight(Math.max(30, Math.min(300, Number(e.target.value))))} />
          <button onClick={updateCalories} className="bg-yellow-500 text-black px-4 py-2 rounded">Submit</button>
        </div>
        {dietMessage && <p className="text-gray-400 mt-2">{dietMessage}</p>}
      </div>

      <div className="p-4 flex flex-col items-center">
        <div className="w-32 h-32">
          <CircularProgressbar
            value={dailyCalories > 0 ? (caloriesConsumed / dailyCalories) * 100 : 0}
            text={`${caloriesConsumed} / ${dailyCalories} kcal`}
            styles={buildStyles({ textColor: "#fff", pathColor: "#facc15", trailColor: "#333", textSize: "10px" })}
          />
        </div>
        <p className="mt-2 text-gray-400 text-sm">Remaining: {dailyCalories - caloriesConsumed} kcal</p>
      </div>

      <div className="p-4 flex justify-center">
        <button onClick={() => setShowMealDialog(true)} className="bg-yellow-500 text-black px-4 py-2 rounded">Add Meal</button>
      </div>

      {showMealDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-semibold mb-4">Add Meal</h2>
            <input type="text" placeholder="Meal Name" className="w-full p-2 mb-2 bg-gray-800 rounded" value={mealDetails.name} onChange={(e) => setMealDetails({ ...mealDetails, name: e.target.value })} />
            <button onClick={saveMeal} className="bg-yellow-500 px-4 py-2 rounded text-black font-semibold">Save</button>
            <button onClick={() => setShowMealDialog(false)} className="bg-red-500 px-4 py-2 rounded text-white ml-2">Cancel</button>
          </div>
        </div>
      )}

      <BottomNavbar />
    </div>
  );
};

export default PlanPage;
