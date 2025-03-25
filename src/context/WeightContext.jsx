// src/context/WeightContext.js
import { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

export const WeightContext = createContext();

export const WeightProvider = ({ children }) => {
  const { currentUser, updateUserStats } = useAuth();
  
  // Initialize state with localStorage values or sensible defaults
  const [currentWeight, setCurrentWeight] = useState(
    currentUser?.stats?.weight || 70
  );
  const [goalWeight, setGoalWeight] = useState(
    currentUser?.stats?.goalWeight || 65
  );
  const [goalType, setGoalType] = useState(
    currentUser?.stats?.goalType || "Lose Weight"
  );

  // Sync state with AuthContext when currentUser changes
  useEffect(() => {
    if (currentUser?.stats) {
      setCurrentWeight(currentUser.stats.weight || 70);
      setGoalWeight(currentUser.stats.goalWeight || 65);
      setGoalType(currentUser.stats.goalType || "Lose Weight");
    }
  }, [currentUser]);

  // Update weight in both context and localStorage
  const updateWeight = async (newWeight) => {
    try {
      const weightValue = parseFloat(newWeight);
      if (isNaN(weightValue)) {
        throw new Error("Invalid weight value");
      }

      setCurrentWeight(weightValue);
      await updateUserStats({ weight: weightValue });
    } catch (error) {
      console.error("Failed to update weight:", error);
      // You might want to revert the state or show an error message
    }
  };

  // Update goal weight in both context and localStorage
  const updateGoalWeight = async (newGoalWeight) => {
    try {
      const goalWeightValue = parseFloat(newGoalWeight);
      if (isNaN(goalWeightValue)) {
        throw new Error("Invalid goal weight value");
      }

      setGoalWeight(goalWeightValue);
      await updateUserStats({ goalWeight: goalWeightValue });
    } catch (error) {
      console.error("Failed to update goal weight:", error);
    }
  };

  // Update goal type in both context and localStorage
  const updateGoalType = async (newGoalType) => {
    try {
      if (!["Lose Weight", "Maintain Weight", "Gain Muscle"].includes(newGoalType)) {
        throw new Error("Invalid goal type");
      }

      setGoalType(newGoalType);
      await updateUserStats({ goalType: newGoalType });
    } catch (error) {
      console.error("Failed to update goal type:", error);
    }
  };

  return (
    <WeightContext.Provider
      value={{
        currentWeight,
        setCurrentWeight: updateWeight,
        goalWeight,
        setGoalWeight: updateGoalWeight,
        goalType,
        setGoalType: updateGoalType
      }}
    >
      {children}
    </WeightContext.Provider>
  );
};

export const useWeight = () => useContext(WeightContext);