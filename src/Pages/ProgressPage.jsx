import { useState } from "react";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie,
  Tooltip, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend,Cell
} from "recharts";
import { FaWeight, FaBurn, FaChartLine, FaBicycle } from "react-icons/fa";
import BottomNavbar from "../customComponents/BottomNavbar";

const ProgressPage = () => {
  const [weightData] = useState([
    { date: "Mar 1", weight: 80 },
    { date: "Mar 5", weight: 79.5 },
    { date: "Mar 10", weight: 79 },
    { date: "Mar 15", weight: 78.8 },
    { date: "Mar 20", weight: 78.5 },
  ]);

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
      {/* Header Section */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-white">Your Progress</h2>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="bg-gray-900 p-4 rounded-lg flex items-center space-x-3">
          <FaWeight className="text-blue-400 text-xl" />
          <div>
            <p className="text-sm text-gray-400">Current Weight</p>
            <h3 className="text-lg font-semibold text-white">78.5 kg</h3>
          </div>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg flex items-center space-x-3">
          <FaChartLine className="text-blue-400 text-xl" />
          <div>
            <p className="text-sm text-gray-400">Goal Weight</p>
            <h3 className="text-lg font-semibold text-white">75 kg</h3>
          </div>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg flex items-center space-x-3">
          <FaBurn className="text-yellow-500 text-xl" />
          <div>
            <p className="text-sm text-gray-400">Calories Burned</p>
            <h3 className="text-lg font-semibold text-white">12,500 kcal</h3>
          </div>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg flex items-center space-x-3">
          <FaBicycle className="text-yellow-500 text-xl" />
          <div>
            <p className="text-sm text-gray-400">Active Days</p>
            <h3 className="text-lg font-semibold text-white">15 Days</h3>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">Weight Progress</h3>
        <div className="bg-gray-900 p-4 rounded-lg">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={weightData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="date" stroke="#bbb" />
              <YAxis stroke="#bbb" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="weight" stroke="#facc15" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">Calories Intake</h3>
        <div className="bg-gray-900 p-4 rounded-lg">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={calorieData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="day" stroke="#bbb" />
              <YAxis stroke="#bbb" />
              <Tooltip />
              <Legend />
              <Bar dataKey="calories" fill="#38bdf8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">Macronutrient Breakdown</h3>
        <div className="bg-gray-900 p-4 rounded-lg">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Tooltip />
              <Legend />
              <Pie
                data={macroData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {macroData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <BottomNavbar />
    </div>
  );
};

export default ProgressPage;
