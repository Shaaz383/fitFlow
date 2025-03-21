import { useState } from "react";
import { FaWeight, FaChartLine } from "react-icons/fa";
import BottomNavbar from "../customComponents/BottomNavbar";
import logo from "../assets/logoDark.png";
import Header from "@/customComponents/Progresspage/Header";
import StatCard from "@/customComponents/Progresspage/StatCard";
import WeightProgressChart from "@/customComponents/Progresspage/WeightProgressChart";
import CalorieIntakeChart from "@/customComponents/Progresspage/CalorieIntakeChart";
import MacroBreakdownChart from "@/customComponents/Progresspage/MacroBreakdownChart";

const ProgressPage = () => {
  const [timeframe, setTimeframe] = useState("Week");

  const weightData = [
    { date: "Week 1", weight: 80 },
    { date: "Week 2", weight: 79.5 },
    { date: "Week 3", weight: 79 },
    { date: "Week 4", weight: 78.8 },
  ];

  const calorieData = [
    { day: "Mon", calories: 2200 },
    { day: "Tue", calories: 2100 },
    { day: "Wed", calories: 2300 },
    { day: "Thu", calories: 2000 },
    { day: "Fri", calories: 2250 },
  ];

  const macroData = [
    { name: "Carbs", value: 50, color: "#facc15" },
    { name: "Proteins", value: 30, color: "#38bdf8" },
    { name: "Fats", value: 20, color: "#f87171" },
  ];

  return (
    <div className="bg-black text-white min-h-screen pb-20">
      <Header logo={logo} timeframe={timeframe} setTimeframe={setTimeframe} />

      <div className="grid grid-cols-2 gap-4 p-4">
        <StatCard icon={FaWeight} label="Current Weight" value="78.5 kg" color="text-blue-400" />
        <StatCard icon={FaChartLine} label="Goal Weight" value="75 kg" color="text-green-400" />
      </div>

      <WeightProgressChart data={weightData} />
      <CalorieIntakeChart data={calorieData} />
      <MacroBreakdownChart data={macroData} />

      <BottomNavbar />
    </div>
  );
};

export default ProgressPage;
