import BottomNavbar from "@/customComponents/BottomNavbar";
import CalorieTracker from "@/customComponents/Planpage/CalorieTracker";
import GoalForm from "@/customComponents/Planpage/GoalForm";
import Header from "@/customComponents/Planpage/Header";
import MealInputDialog from "@/customComponents/Planpage/MealInputDialog";
import { useState } from "react";



const PlanPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentWeight, setCurrentWeight] = useState(70);
  const [goalWeight, setGoalWeight] = useState(65);
  const [dailyCalories, setDailyCalories] = useState(2500);
  const [caloriesLog, setCaloriesLog] = useState({});
  const [showMealDialog, setShowMealDialog] = useState(false);
  const [mealDetails, setMealDetails] = useState({ name: "", carbs: "", fats: "", calories: "" });
  const [dietMessage, setDietMessage] = useState("");

  const formattedDate = selectedDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const caloriesConsumed = caloriesLog[formattedDate] || 0;

  const handleDateChange = (offset) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + offset);
    setSelectedDate(newDate);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen pb-20 relative">
      <Header selectedDate={selectedDate} handleDateChange={handleDateChange} />
      <GoalForm currentWeight={currentWeight} setCurrentWeight={setCurrentWeight} 
        goalWeight={goalWeight} setGoalWeight={setGoalWeight} updateCalories={() => {}} dietMessage={dietMessage} 
      />
      <CalorieTracker caloriesConsumed={caloriesConsumed} dailyCalories={dailyCalories} />
      <MealInputDialog showMealDialog={showMealDialog} setShowMealDialog={setShowMealDialog} 
        mealDetails={mealDetails} setMealDetails={setMealDetails} saveMeal={() => {}} 
      />
      <BottomNavbar />
    </div>
  );
};

export default PlanPage;
