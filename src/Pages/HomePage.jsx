import { FaFire, FaUtensils, FaDumbbell, FaHeartbeat, FaTint } from "react-icons/fa";
import Header from "../customComponents/Header";
import HeroSection from "../customComponents/Homepage/HeroSection";
import QuickStats from "../customComponents/Homepage/QuickStats";
import PlanCard from "../customComponents/Homepage/PlanCard";
import HealthInsights from "../customComponents/Homepage/HealthInsights";
import BottomNavbar from "../customComponents/BottomNavbar";

const HomePage = () => {
  const userName = "John"; // Replace with dynamic value

  const stats = [
    { icon: <FaFire className="text-yellow-400 text-4xl" />, title: "Calories Burned", value: "12,500 kcal" },
    { icon: <FaUtensils className="text-blue-400 text-4xl" />, title: "Meals Logged", value: "45 Meals" },
    { icon: <FaDumbbell className="text-red-400 text-4xl" />, title: "Workouts Completed", value: "22 Sessions" },
    { icon: <FaTint className="text-blue-400 text-4xl" />, title: "Water Intake", value: "2.5 L" }
  ];

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
      <Header userName={userName} />
      <HeroSection />
      <QuickStats stats={stats} />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Your Personalized Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {plans.map((plan, index) => (
            <PlanCard key={index} icon={plan.icon} title={plan.title} description={plan.description} />
          ))}
        </div>
      </div>

      <HealthInsights insights={insights} />
      <BottomNavbar />
    </div>
  );
};

export default HomePage;
