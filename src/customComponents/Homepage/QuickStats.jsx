// src/components/QuickStats.js
import { useState, useContext, useEffect } from "react";
import { WeightContext } from "@/context/WeightContext";
import { useAuth } from "@/context/AuthContext";
import WeightGoalInput from "../Planpage/WeightGoalInput";
import StatCard from "./QuickStats/StatCard";
import StepsModal from "./Quickstats/StepsModal";
import GoalCard from "./Quickstats/GoalModal";
import { FaWeight, FaWalking, FaTint } from "react-icons/fa";



const QuickStats = ({ updateStat }) => {
  const [isGoalModalOpen, setIsGoalModalOpen] = useState(false);
  const [isStepsModalOpen, setIsStepsModalOpen] = useState(false);
  const [newSteps, setNewSteps] = useState("");

  const { currentUser, updateUserStats } = useAuth();
  const {
    currentWeight,
    goalWeight,
    setGoalWeight,
    goalType,
    setGoalType,
  } = useContext(WeightContext);

  // Create stats array with real-time values from localStorage
  const [stats, setStats] = useState([
    { 
      icon: <FaWeight className="text-yellow-400 text-4xl" />, 
      title: "Weight", 
      value: `${currentUser?.stats?.weight || currentWeight || 0} kg` 
    },
    { 
      icon: <FaWalking className="text-green-400 text-4xl" />, 
      title: "Steps Today", 
      value: `${currentUser?.stats?.steps || 0}` 
    },
    { 
      icon: <FaTint className="text-blue-400 text-4xl" />, 
      title: "Water", 
      value: `${currentUser?.stats?.water || 0} L` 
    },
  ]);

  // Update stats when currentUser changes
  useEffect(() => {
    if (currentUser?.stats) {
      setStats([
        { 
          icon: <FaWeight className="text-yellow-400 text-4xl" />, 
          title: "Weight", 
          value: `${currentUser.stats.weight || currentWeight || 0} kg` 
        },
        { 
          icon: <FaWalking className="text-green-400 text-4xl" />, 
          title: "Steps Today", 
          value: `${currentUser.stats.steps || 0}` 
        },
        { 
          icon: <FaTint className="text-blue-400 text-4xl" />, 
          title: "Water", 
          value: `${currentUser.stats.water || 0} L` 
        },
      ]);
    }
  }, [currentUser, currentWeight]);

  const handleUpdateSteps = async () => {
    if (newSteps.trim() !== "") {
      const stepsValue = parseInt(newSteps);
      await updateUserStats({ steps: stepsValue });
      
      // Update local state to reflect changes immediately
      setStats(prevStats => prevStats.map(stat => 
        stat.title === "Steps Today" 
          ? { ...stat, value: `${stepsValue}` } 
          : stat
      ));
      
      setNewSteps("");
      setIsStepsModalOpen(false);
    }
  };

  const handleIncreaseWater = async () => {
    const currentWater = parseFloat(currentUser?.stats?.water || 0);
    const newWater = (currentWater + 0.25).toFixed(2);
    await updateUserStats({ water: parseFloat(newWater) });
    
    // Update local state to reflect changes immediately
    setStats(prevStats => prevStats.map(stat => 
      stat.title === "Water" 
        ? { ...stat, value: `${newWater} L` } 
        : stat
    ));
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          stat={stat}
          onIncreaseWater={handleIncreaseWater}
          onOpenStepsModal={() => setIsStepsModalOpen(true)}
        />
      ))}

      <StepsModal
        isOpen={isStepsModalOpen}
        onClose={() => setIsStepsModalOpen(false)}
        steps={newSteps}
        setSteps={setNewSteps}
        onUpdate={handleUpdateSteps}
      />

      {isGoalModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md">
            <WeightGoalInput
              currentWeight={currentWeight}
              goalWeight={goalWeight}
              setGoalWeight={setGoalWeight}
              goalType={goalType}
              setGoalType={setGoalType}
              calculateDailyCalories={() => setIsGoalModalOpen(false)}
            />
            <button
              onClick={() => setIsGoalModalOpen(false)}
              className="w-full bg-red-500 text-white font-bold py-2 rounded-lg hover:bg-red-400 transition mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <GoalCard
        onClick={() => setIsGoalModalOpen(true)}
        goalType={goalType}
        goalWeight={goalWeight}
      />
    </div>
  );
};

export default QuickStats;