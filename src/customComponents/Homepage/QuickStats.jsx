// src/components/QuickStats.js
import { useState, useContext } from "react";
import { WeightContext } from "@/context/WeightContext";
import WeightGoalInput from "../Planpage/WeightGoalInput";
import StatCard from "./QuickStats/StatCard";
import StepsModal from "./Quickstats/StepsModal";
import WeightModal from "./Quickstats/WeightModal";
import GoalCard from "./Quickstats/GoalModal";


const QuickStats = ({ stats, updateStat }) => {
  const [isGoalModalOpen, setIsGoalModalOpen] = useState(false);
  const [isStepsModalOpen, setIsStepsModalOpen] = useState(false);
  const [isWeightModalOpen, setIsWeightModalOpen] = useState(false);
  const [newSteps, setNewSteps] = useState("");
  const [newWeight, setNewWeight] = useState("");

  const {
    currentWeight,
    setCurrentWeight,
    goalWeight,
    setGoalWeight,
    goalType,
    setGoalType,
  } = useContext(WeightContext);

  const handleUpdateSteps = () => {
    if (newSteps.trim() !== "") {
      updateStat("Steps Today", `${newSteps} Steps`);
      setNewSteps("");
      setIsStepsModalOpen(false);
    }
  };

  const handleUpdateWeight = () => {
    if (newWeight.trim() !== "") {
      setCurrentWeight(newWeight);
      updateStat("Weight", `${newWeight} kg`);
      setNewWeight("");
      setIsWeightModalOpen(false);
    }
  };

  const handleIncreaseWater = () => {
    const waterStat = stats.find((stat) => stat.title === "Water");
    if (waterStat) {
      const currentWater = parseFloat(waterStat.value);
      const newWater = (currentWater + 0.25).toFixed(2);
      updateStat("Water", `${newWater} L`);
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          stat={stat}
          onIncreaseWater={handleIncreaseWater}
          onOpenStepsModal={() => setIsStepsModalOpen(true)}
          onOpenWeightModal={() => setIsWeightModalOpen(true)}
        />
      ))}

      <StepsModal
        isOpen={isStepsModalOpen}
        onClose={() => setIsStepsModalOpen(false)}
        steps={newSteps}
        setSteps={setNewSteps}
        onUpdate={handleUpdateSteps}
      />

      <WeightModal
        isOpen={isWeightModalOpen}
        onClose={() => setIsWeightModalOpen(false)}
        weight={newWeight}
        setWeight={setNewWeight}
        onUpdate={handleUpdateWeight}
      />

      {isGoalModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md">
            <WeightGoalInput
              currentWeight={currentWeight}
              setCurrentWeight={setCurrentWeight}
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