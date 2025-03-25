// src/components/QuickStats.js
import { useState, useContext } from "react";
import { WeightContext } from "@/context/WeightContext";
import { useAuth } from "@/context/AuthContext";
import WeightGoalInput from "../Planpage/WeightGoalInput";
import StatCard from "./QuickStats/StatCard";
import StepsModal from "./Quickstats/StepsModal";
import GoalCard from "./Quickstats/GoalModal";

const QuickStats = ({ stats, updateStat }) => {
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

  const handleUpdateSteps = () => {
    if (newSteps.trim() !== "") {
      updateStat("Steps Today", `${newSteps} Steps`);
      updateUserStats({ steps: parseInt(newSteps) });
      setNewSteps("");
      setIsStepsModalOpen(false);
    }
  };

  const handleIncreaseWater = async () => {
    const waterStat = stats.find((stat) => stat.title === "Water");
    if (waterStat) {
      const currentWater = parseFloat(waterStat.value);
      const newWater = (currentWater + 0.25).toFixed(2);
      updateStat("Water", `${newWater} L`);
      await updateUserStats({ water: parseFloat(newWater) });
    }
  };

  // Create stats array with current weight from localStorage
  const updatedStats = stats.map(stat => {
    if (stat.title === "Weight") {
      return {
        ...stat,
        value: `${currentUser?.stats?.weight || currentWeight || 0} kg`
      };
    }
    return stat;
  });

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {updatedStats.map((stat, index) => (
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