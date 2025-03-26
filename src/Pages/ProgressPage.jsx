import { useState, useEffect } from "react";
import { FaWeight, FaChartLine, FaBullseye } from "react-icons/fa";
import BottomNavbar from "../customComponents/BottomNavbar";
import logo from "../assets/logoDark.png";
import Header from "@/customComponents/Progresspage/Header";
import StatCard from "@/customComponents/Progresspage/StatCard";
import WeightProgressChart from "@/customComponents/Progresspage/WeightProgressChart";
import CalorieIntakeChart from "@/customComponents/Progresspage/CalorieIntakeChart";
import MacroBreakdownChart from "@/customComponents/Progresspage/MacroBreakdownChart";
import { calorieData, weightData } from "@/data/progressData";


const ProgressPage = () => {
  const [timeframe, setTimeframe] = useState("Week");
  const [userData, setUserData] = useState(null);

  // Load user data from localStorage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      setUserData({
        stats: user.stats,
        meals: user.meals || [],
        dailyCalories: user.dailyCalories || 2000
      });
    }
  }, []);

  // Process weight data from user stats
  const getWeightData = () => {
    if (!userData?.stats?.weightHistory) return [];
    return userData.stats.weightHistory.map(entry => ({
      date: new Date(entry.date).toLocaleDateString(),
      weight: entry.weight
    }));
  };

  // Process calorie data from meals
  const getCalorieData = () => {
    if (!userData?.meals) return [];
    return userData.meals.map(meal => ({
      day: new Date(meal.date).toLocaleDateString(),
      calories: meal.calories
    }));
  };

  // Process macro data from meals
  const getMacroData = () => {
    if (!userData?.meals) return [
      { name: "Protein", value: 0, color: "#3b82f6" },
      { name: "Carbs", value: 0, color: "#facc15" },
      { name: "Fats", value: 0, color: "#ef4444" }
    ];
    
    const totals = userData.meals.reduce((acc, meal) => {
      acc.protein += meal.protein || 0;
      acc.carbs += meal.carbs || 0;
      acc.fats += meal.fats || 0;
      return acc;
    }, { protein: 0, carbs: 0, fats: 0 });

    return [
      { name: "Protein", value: totals.protein, color: "#3b82f6" },
      { name: "Carbs", value: totals.carbs, color: "#facc15" },
      { name: "Fats", value: totals.fats, color: "#ef4444" }
    ];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pb-20">
      <Header logo={logo} timeframe={timeframe} setTimeframe={setTimeframe} />

      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-4 p-4">
        <StatCard 
          icon={FaWeight} 
          label="Current Weight" 
          value={userData?.stats?.weight ? `${userData.stats.weight} kg` : "N/A"} 
          color="bg-blue-500" 
        />
        <StatCard 
          icon={FaBullseye} 
          label="Goal Weight" 
          value={userData?.stats?.goalWeight ? `${userData.stats.goalWeight} kg` : "N/A"} 
          color="bg-green-500" 
        />
      </div>

      {/* Charts Section */}
      <div className="space-y-6 p-4">
      <WeightProgressChart data={weightData[timeframe]} />
      <CalorieIntakeChart data={calorieData[timeframe]} />
        <MacroBreakdownChart 
          data={getMacroData()} 
        />
      </div>

      <BottomNavbar />
    </div>
  );
};

export default ProgressPage;