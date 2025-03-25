import { useState, useEffect } from "react";
import { FaWeight, FaChartLine, FaBullseye } from "react-icons/fa";
import BottomNavbar from "../customComponents/BottomNavbar";
import logo from "../assets/logoDark.png";
import Header from "@/customComponents/Progresspage/Header";
import StatCard from "@/customComponents/Progresspage/StatCard";
import WeightProgressChart from "@/customComponents/Progresspage/WeightProgressChart";
import CalorieIntakeChart from "@/customComponents/Progresspage/CalorieIntakeChart";
import MacroBreakdownChart from "@/customComponents/Progresspage/MacroBreakdownChart";
import { weightData, calorieData, macroData, statData } from "@/data/progressData";

const ProgressPage = () => {
  const [timeframe, setTimeframe] = useState("Week");
  const [userStats, setUserStats] = useState({ currentWeight: null, goalWeight: null });

  // Load user data from localStorage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user?.stats) {
      setUserStats({
        currentWeight: user.stats.weight,
        goalWeight: user.stats.goalWeight
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pb-20">
      <Header logo={logo} timeframe={timeframe} setTimeframe={setTimeframe} />

      {/* Stats Section - Modified to show weight info */}
      <div className="grid grid-cols-2 gap-4 p-4">
        {/* Current Weight Card */}
        <StatCard 
          icon={FaWeight} 
          label="Current Weight" 
          value={userStats.currentWeight ? `${userStats.currentWeight} kg` : "N/A"} 
          color="" 
        />
        
        {/* Goal Weight Card */}
        <StatCard 
          icon={FaBullseye} 
          label="Goal Weight" 
          value={userStats.goalWeight ? `${userStats.goalWeight} kg` : "N/A"} 
          color="" 
        />
        
        {/* Original Stats (filter out any existing weight stats if needed) */}
        {statData[timeframe]
          .filter(stat => !stat.label.toLowerCase().includes('weight'))
          .map((stat, index) => {
            const Icon = stat.icon === "FaWeight" ? FaWeight : FaChartLine;
            return (
              <StatCard 
                key={index + 2} // Start after weight cards
                icon={Icon} 
                label={stat.label} 
                value={stat.value} 
                color={stat.color} 
              />
            );
          })
        }
      </div>

      {/* Charts Section - Unchanged */}
      <div className="space-y-6 p-4">
        <WeightProgressChart data={weightData[timeframe]} />
        <CalorieIntakeChart data={calorieData[timeframe]} />
        <MacroBreakdownChart data={macroData[timeframe]} />
      </div>

      <BottomNavbar />
    </div>
  );
};

export default ProgressPage;