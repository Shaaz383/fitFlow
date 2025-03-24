import { useState, useContext } from "react";
import { FaWeight, FaWalking, FaTint, FaDumbbell, FaUtensils, FaPlus } from "react-icons/fa";
import Header from "../customComponents/Header";
import HeroSection from "../customComponents/Homepage/HeroSection";
import QuickStats from "../customComponents/Homepage/QuickStats";
import PlanCard from "../customComponents/Homepage/PlanCard";
import BottomNavbar from "../customComponents/BottomNavbar";
import BMICalculator from "../customComponents/Homepage/BMICalculator";
import DietPlanOverview from "../customComponents/Planpage/DietPlanOverview";
import { WeightContext } from "../context/WeightContext";
import { useAuth } from "../context/AuthContext"; // Import useAuth
import MealLogging from "@/customComponents/Planpage/MealLogging";

const HomePage = () => {
  const { currentUser } = useAuth(); // Get current user from AuthContext
  const { currentWeight, setCurrentWeight } = useContext(WeightContext);

  // 🟢 Quick Stats Data (Dynamic)
  const [stats, setStats] = useState([
    { icon: <FaWeight className="text-yellow-400 text-4xl" />, title: "Weight", value: `${currentWeight} kg` },
    { icon: <FaWalking className="text-green-400 text-4xl" />, title: "Steps Today", value: "10,500" },
    { icon: <FaTint className="text-blue-400 text-4xl" />, title: "Water", value: "2.5 L" },
  ]);

  // 🟢 Function to Update Stats
  const updateStat = (title, newValue) => {
    if (title === "Weight") {
      setCurrentWeight(parseFloat(newValue));
    }
    setStats(prevStats =>
      prevStats.map(stat =>
        stat.title === title ? { ...stat, value: newValue } : stat
      )
    );
  };

  // 🟢 State for Diet Plan Overview
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [meals, setMeals] = useState([]);
  const [dailyCalories, setDailyCalories] = useState(2000);
  const goalType = "Weight Loss";

  // 🟢 Function to Add Meal
  const addMeal = (meal) => {
    setMeals([...meals, meal]);
    setDailyCalories(prev => prev + meal.calories);
  };

  // 🟢 Personalized Plans Data
  const plans = [
    { icon: <FaDumbbell className="text-red-400 text-4xl" />, title: "Workout Plan", description: "Tailored exercises for you." },
    { icon: <FaUtensils className="text-green-400 text-4xl" />, title: "Diet Plan", description: "Balanced meals made easy." },
  ];

  // 🟢 State for Meal Logging Popup
  const [isMealPopupOpen, setMealPopupOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-white min-h-screen pb-20 relative">
      {/* Header */}
      <Header userName={currentUser?.name || "User"} /> {/* Use currentUser.name */}

      {/* Hero Section */}
      <HeroSection userName={currentUser?.name || "User"} /> {/* Use currentUser.name */}

      {/* Quick Stats Section */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Daily Stats</h2>
        <QuickStats stats={stats} updateStat={updateStat} />
      </div>

      {/* Diet Plan Overview with Meal Logging */}
      <section className="px-2 mt-4">
        <div className="flex justify-around items-center">
          <h2 className="text-2xl font-bold">Diet Plan For Today</h2>
          <button
            className="bg-yellow-500 text-black px-4 py-2 rounded-lg flex items-center"
            onClick={() => setMealPopupOpen(true)}
          >
            <FaPlus className="mr-2" /> Add Meal
          </button>
        </div>

        <DietPlanOverview
          selectedDate={selectedDate}
          meals={meals}
          dailyCalories={dailyCalories}
          goalType={goalType}
        />
      </section>

      {/* Meal Logging Popup */}
      {isMealPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-gray-800 p-6 rounded-lg w-96">
            <MealLogging addMeal={addMeal} onClose={() => setMealPopupOpen(false)} />
          </div>
        </div>
      )}

      {/* Health Tools Section */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Health Tools</h2>
        <BMICalculator />
      </div>

      {/* Personalized Plans Section */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Your Personalized Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {plans.map((plan, index) => (
            <PlanCard key={index} icon={plan.icon} title={plan.title} description={plan.description} />
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavbar />
    </div>
  );
};

export default HomePage;