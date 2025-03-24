import { useState } from "react";
import { FaWeight, FaChartLine } from "react-icons/fa";
import BottomNavbar from "../customComponents/BottomNavbar";
import logo from "../assets/logoDark.png";
import Header from "@/customComponents/Progresspage/Header";
import StatCard from "@/customComponents/Progresspage/StatCard";
import WeightProgressChart from "@/customComponents/Progresspage/WeightProgressChart";
import CalorieIntakeChart from "@/customComponents/Progresspage/CalorieIntakeChart";
import MacroBreakdownChart from "@/customComponents/Progresspage/MacroBreakdownChart";

// Import dummy data
import { weightData, calorieData, macroData, statData } from "@/data/progressData";

const ProgressPage = () => {
  const [timeframe, setTimeframe] = useState("Week");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pb-20">
      <Header logo={logo} timeframe={timeframe} setTimeframe={setTimeframe} />

      {/* Stats Section */}
      {/* <div className="grid grid-cols-2 gap-4 p-4">
        {statData[timeframe].map((stat, index) => {
          const Icon = stat.icon === "FaWeight" ? FaWeight : FaChartLine;
          return (
            <StatCard key={index} icon={Icon} label={stat.label} value={stat.value} color={stat.color} />
          );
        })}
      </div> */}

      {/* Charts Section */}
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
