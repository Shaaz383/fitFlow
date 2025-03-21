import { useState } from "react";
import BottomNavbar from "@/customComponents/BottomNavbar";
import DatePicker from "@/customComponents/Planpage/DatePicker";
import DietPlanOverview from "@/customComponents/Planpage/DietPlanOverview";
import MealLogging from "@/customComponents/Planpage/MealLogging";
import DietSuggestions from "@/customComponents/Planpage/DietSuggestions";
import WeightGoalInput from "@/customComponents/Planpage/WeightGoalInput";
import GoalCard from "@/customComponents/Planpage/GoalCard";
import FullDayMealPlan from "@/customComponents/Planpage/FullDayMealPlan";

const PlanPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [meals, setMeals] = useState([]); // List of logged meals
  const [dailyCalories, setDailyCalories] = useState(2000); // Default daily calorie target
  const [currentWeight, setCurrentWeight] = useState(70); // Current weight
  const [goalWeight, setGoalWeight] = useState(65); // Goal weight
  const [goalType, setGoalType] = useState("weight_loss"); // Goal type (weight loss or muscle building)

  // Handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Add a new meal
  const addMeal = (meal) => {
    setMeals((prevMeals) => [...prevMeals, meal]);
    setDailyCalories((prevCalories) => prevCalories - meal.calories);
  };

  // Calculate daily calories based on weight, goal, and activity level
  const calculateDailyCalories = () => {
    const weightDifference = goalWeight - currentWeight;
    const baseCalories = goalType === "weight_loss" ? 2000 : 2500; // Adjust based on goal
    const calculatedCalories = Math.round(baseCalories + (weightDifference * 10)); // Simple calculation
    setDailyCalories(calculatedCalories);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen pb-20 relative">
      {/* Weight and Goal Input */}
      <WeightGoalInput
        currentWeight={currentWeight}
        setCurrentWeight={setCurrentWeight}
        goalWeight={goalWeight}
        setGoalWeight={setGoalWeight}
        goalType={goalType}
        setGoalType={setGoalType}
        calculateDailyCalories={calculateDailyCalories}
      />

      {/* Goal Card */}
      <GoalCard currentWeight={currentWeight} goalWeight={goalWeight} goalType={goalType} />

      {/* Full-Day Meal Plan */}
      <FullDayMealPlan goalType={goalType} dailyCalories={dailyCalories} />

      {/* Interactive Date Picker */}
      <DatePicker selectedDate={selectedDate} handleDateChange={handleDateChange} />

      {/* Diet Plan Overview */}
      <DietPlanOverview
  selectedDate={selectedDate}
  meals={meals}
  dailyCalories={dailyCalories}
  goalType={goalType} // Pass goalType here
/>
      {/* Meal Logging */}
      <MealLogging addMeal={addMeal} />

      {/* Diet Suggestions */}
      {/* <DietSuggestions dailyCalories={dailyCalories} goalType={goalType} /> */}

      {/* Bottom Navigation */}
      <BottomNavbar />
    </div>
  );
};

export default PlanPage;