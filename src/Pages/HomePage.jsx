import { useState, useContext } from "react";
import { FaWeight, FaWalking, FaTint, FaDumbbell, FaUtensils } from "react-icons/fa";
import Header from "../customComponents/Header";
import HeroSection from "../customComponents/Homepage/HeroSection";
import QuickStats from "../customComponents/Homepage/QuickStats";
import PlanCard from "../customComponents/Homepage/PlanCard";
import BottomNavbar from "../customComponents/BottomNavbar";
import BMICalculator from "../customComponents/Homepage/BMICalculator";
import { WeightContext } from "../context/WeightContext"; // Import WeightContext

const HomePage = () => {
  const userName = "John"; // Replace with dynamic value
  const { currentWeight, setCurrentWeight } = useContext(WeightContext); // Use WeightContext

  const [stats, setStats] = useState([
    { icon: <FaWeight className="text-yellow-400 text-4xl" />, title: "Weight", value: `${currentWeight} kg` },
    { icon: <FaWalking className="text-green-400 text-4xl" />, title: "Steps Today", value: "10,500" }, // Added Steps
    { icon: <FaTint className="text-blue-400 text-4xl" />, title: "Water", value: "2.5 L" }
  ]);

  const updateStat = (title, newValue) => {
    if (title === "Weight") {
      setCurrentWeight(parseFloat(newValue)); // Update context state
    }
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
