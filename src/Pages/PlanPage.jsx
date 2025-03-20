import { useState } from "react";
import BottomNavbar from "../customComponents/BottomNavbar";
import { FaCalendarAlt } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const PlanPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [caloriesLog, setCaloriesLog] = useState({});
  const totalCalories = 2859;
  const [showMealDialog, setShowMealDialog] = useState(false);
  const [mealDetails, setMealDetails] = useState({ name: "", carbs: "", fats: "", calories: "" });
  const [mealsLog, setMealsLog] = useState({});

  const getFormattedDate = (date) => date.toISOString().split("T")[0];

  const handleDateChange = (offset) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + offset);
    setSelectedDate(newDate);
  };

  const saveMeal = () => {
    if (!mealDetails.name || !mealDetails.calories) return;
    const formattedDate = getFormattedDate(selectedDate);
    setMealsLog((prevMeals) => {
      const updatedMeals = {
        ...prevMeals,
        [formattedDate]: [...(prevMeals[formattedDate] || []), mealDetails],
      };
      return updatedMeals;
    });
    setCaloriesLog((prevLog) => {
      return {
        ...prevLog,
        [formattedDate]: (prevLog[formattedDate] || 0) + Number(mealDetails.calories),
      };
    });
    setMealDetails({ name: "", carbs: "", fats: "", calories: "" });
    setShowMealDialog(false);
  };

  const formattedDate = getFormattedDate(selectedDate);
  const caloriesConsumed = caloriesLog[formattedDate] || 0;
  const meals = mealsLog[formattedDate] || [];

  return (
    <div className="bg-black text-white min-h-screen pb-20">
      {/* Calendar Header */}
      <div className="flex items-center justify-between p-4">
        <button onClick={() => handleDateChange(-1)} className="text-yellow-500">&larr;</button>
        <div className="flex items-center space-x-2">
          <FaCalendarAlt className="text-yellow-500" />
          <h2 className="text-lg font-semibold text-yellow-500">{selectedDate.toDateString()}</h2>
        </div>
        <button onClick={() => handleDateChange(1)} className="text-yellow-500">&rarr;</button>
      </div>

      {/* Calorie Progress Bar */}
      <div className="p-4 flex flex-col items-center">
        <div className="w-32 h-32">
          <CircularProgressbar
            value={(caloriesConsumed / totalCalories) * 100}
            text={`${caloriesConsumed} / ${totalCalories} kcal`}
            styles={buildStyles({ textColor: "#fff", pathColor: "#facc15", trailColor: "#333", textSize: "8px" })}
          />
        </div>
        <p className="mt-2 text-gray-400 text-sm">Remaining: {totalCalories - caloriesConsumed} kcal</p>
      </div>

      {/* Add Meal Button */}
      <div className="p-4 flex justify-center">
        <button onClick={() => setShowMealDialog(true)} className="bg-yellow-500 text-black px-4 py-2 rounded">Add Meal to Track Your Calories</button>
      </div>

      {/* Meal List */}
      <div className="p-4">
        {meals.length > 0 ? (
          meals.map((meal, index) => (
            <p key={index} className="text-gray-400 text-sm">
              {meal.name} | {meal.calories} kcal | {meal.carbs} C | {meal.fats} F
            </p>
          ))
        ) : (
          <p className="text-gray-500 text-sm text-center">No meals logged for this date</p>
        )}
      </div>

      {/* Meal Input Dialog */}
      {showMealDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-gray-900 p-6 rounded-lg w-80">
            <h2 className="text-lg font-semibold mb-4">Add Meal</h2>
            <input
              type="text"
              placeholder="Meal Name"
              className="w-full p-2 mb-2 bg-gray-800 rounded"
              value={mealDetails.name}
              onChange={(e) => setMealDetails({ ...mealDetails, name: e.target.value })}
            />
            <input
              type="number"
              placeholder="Calories"
              className="w-full p-2 mb-2 bg-gray-800 rounded"
              value={mealDetails.calories}
              onChange={(e) => setMealDetails({ ...mealDetails, calories: e.target.value })}
            />
            <input
              type="number"
              placeholder="Carbs"
              className="w-full p-2 mb-2 bg-gray-800 rounded"
              value={mealDetails.carbs}
              onChange={(e) => setMealDetails({ ...mealDetails, carbs: e.target.value })}
            />
            <input
              type="number"
              placeholder="Fats"
              className="w-full p-2 mb-2 bg-gray-800 rounded"
              value={mealDetails.fats}
              onChange={(e) => setMealDetails({ ...mealDetails, fats: e.target.value })}
            />
            <div className="flex justify-between mt-4">
              <button onClick={() => setShowMealDialog(false)} className="text-gray-400">Cancel</button>
              <button onClick={saveMeal} className="bg-yellow-500 text-black px-4 py-2 rounded">Save</button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navbar */}
      <BottomNavbar />
    </div>
  );
};

export default PlanPage;
