import { useState } from "react";
import { FaWeight, FaFire, FaTint, FaWalking, FaDumbbell, FaUtensils, FaHeartbeat } from "react-icons/fa";
import Header from "../customComponents/Header";
import HeroSection from "../customComponents/Homepage/HeroSection";
import QuickStats from "../customComponents/Homepage/QuickStats";
import PlanCard from "../customComponents/Homepage/PlanCard";
// import HealthInsights from "../customComponents/Homepage/HealthInsights";
import BottomNavbar from "../customComponents/BottomNavbar";
import BMICalculator from "../customComponents/Homepage/BMICalculator";
import CalorieProgressCard from "../customComponents/Homepage/CalorieProgressCard"; // Import the new component

const HomePage = () => {
  const userName = "John"; // Replace with dynamic value

  const [stats, setStats] = useState([
    { icon: <FaWeight className="text-yellow-400 text-4xl" />, title: "Weight", value: "78.5 kg" },
    { icon: <FaFire className="text-red-400 text-4xl" />, title: "Calories", value: "1,200 kcal" },
    { icon: <FaTint className="text-blue-400 text-4xl" />, title: "Water", value: "2.5 L" },
    { icon: <FaWalking className="text-green-400 text-4xl" />, title: "Step Count", value: "5,000 steps" }
  ]);

  const updateStat = (title, newValue) => {
    setStats((prevStats) =>
      prevStats.map((stat) =>
        stat.title === title ? { ...stat, value: newValue } : stat
      )
    );
  };

  const plans = [
    { icon: <FaDumbbell className="text-red-400 text-4xl" />, title: "Workout Plan", description: "Tailored exercises for you." },
    { icon: <FaUtensils className="text-green-400 text-4xl" />, title: "Diet Plan", description: "Balanced meals made easy." }
  ];

  const insights = [
    { icon: <FaTint className="text-blue-400 text-4xl" />, title: "Hydration", description: "Track your water intake." },
    { icon: <FaHeartbeat className="text-pink-400 text-4xl" />, title: "Heart Rate", description: "Monitor your heart health." }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen pb-20 relative">
      {/* Header */}
      <Header userName={userName} />

      {/* Hero Section */}
      <HeroSection />

      {/* Quick Stats Section */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Daily Stats</h2>
        <QuickStats stats={stats} updateStat={updateStat} />
      </div>

      {/* Calorie Progress Card */}
      <div className="p-4">
        <CalorieProgressCard />
      </div>

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

      {/* Health Insights Section */}
      {/* <div className="p-2">
        <h2 className="text-2xl font-bold mb-4">Stay Healthy</h2>
        <HealthInsights insights={insights} />
      </div> */}

      {/* Bottom Navigation */}
      <BottomNavbar />
    </div>
  );
};

export default HomePage;