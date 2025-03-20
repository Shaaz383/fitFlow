import {
  FaFire,
  FaUtensils,
  FaDumbbell,
  FaHeartbeat,
  FaTint,
} from "react-icons/fa";
import BottomNavbar from "../customComponents/BottomNavbar";
import logoDark from "../assets/logoDark.png";
import heroImage from "../assets/heroImageDeit.webp";

const HomePage = () => {
  const userName = "John"; // Example user name, replace with dynamic value

  return (
    <div className="bg-gray-900 text-white min-h-screen pb-20 relative">
      {/* Header Section */}
      <div className="flex items-center justify-between px-6 py-4">
        <img src={logoDark} alt="Logo" className="h-16 w-auto filter invert" />
        <div className="text-left">
          <h2 className="text-2xl font-bold">Hello, {userName}! 👋</h2>
          <p className="text-gray-400">Let’s make today a healthy day!</p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative text-center p-6">
        <h1 className="text-4xl font-bold">Your Fitness, Your Journey</h1>
        <p className="text-gray-400 mt-2 text-lg">Track, Plan, and Achieve Your Goals</p>
        <img src={heroImage} alt="Hero" className="mx-auto mt-4 rounded-xl shadow-xl w-3/4" />
      </div>

      {/* Quick Stats with Hover Effects */}
      <div className="grid grid-cols-2 gap-6 p-6">
        {[{
          icon: <FaFire className="text-yellow-400 text-4xl" />, title: "Calories Burned", value: "12,500 kcal"
        }, {
          icon: <FaUtensils className="text-blue-400 text-4xl" />, title: "Meals Logged", value: "45 Meals"
        }, {
          icon: <FaDumbbell className="text-red-400 text-4xl" />, title: "Workouts Completed", value: "22 Sessions"
        }, {
          icon: <FaTint className="text-blue-400 text-4xl" />, title: "Water Intake", value: "2.5 L"}
        ].map((stat, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg flex items-center space-x-4 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105">
            {stat.icon}
            <div>
              <p className="text-sm text-gray-400">{stat.title}</p>
              <h3 className="text-xl font-semibold">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Personalized Plans */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Your Personalized Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[{
            icon: <FaDumbbell className="text-red-400 text-4xl" />, title: "Workout Plan", description: "Tailored exercises for you."
          }, {
            icon: <FaUtensils className="text-green-400 text-4xl" />, title: "Diet Plan", description: "Balanced meals made easy."
          }].map((plan, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg flex items-center space-x-4 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105">
              {plan.icon}
              <div>
                <h3 className="text-lg font-semibold">{plan.title}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Health Insights */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Stay Healthy</h2>
        <div className="grid grid-cols-2 gap-6">
          {[{
            icon: <FaTint className="text-blue-400 text-4xl" />, title: "Hydration", description: "Track your water intake."
          }, {
            icon: <FaHeartbeat className="text-pink-400 text-4xl" />, title: "Heart Rate", description: "Monitor your heart health."
          }].map((insight, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg flex items-center space-x-4 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105">
              {insight.icon}
              <div>
                <h3 className="text-lg font-semibold">{insight.title}</h3>
                <p className="text-gray-400 text-sm">{insight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNavbar />
    </div>
  );
};

export default HomePage;
