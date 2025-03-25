import { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "@/context/AuthContext"; // Import AuthContext

export const WeightContext = createContext();

export const WeightProvider = ({ children }) => {
  const { currentUser, updateUserStats } = useAuth(); // Get user data from AuthContext
  const [currentWeight, setCurrentWeight] = useState(currentUser?.stats?.weight || 70);
  const [goalWeight, setGoalWeight] = useState(currentUser?.stats?.goalWeight || 65);
  const [goalType, setGoalType] = useState(currentUser?.stats?.goalType || "weight_loss");

  // Update state when currentUser changes
  useEffect(() => {
    if (currentUser?.stats) {
      setCurrentWeight(currentUser.stats.weight);
      setGoalWeight(currentUser.stats.goalWeight);
      setGoalType(currentUser.stats.goalType);
    }
  }, [currentUser]);

  // Function to update weight in both context and localStorage
  const updateWeight = (newWeight) => {
    setCurrentWeight(newWeight);
    updateUserStats({ weight: newWeight }); // Update in AuthContext & localStorage
  };

  const updateGoalWeight = (newGoalWeight) => {
    setGoalWeight(newGoalWeight);
    updateUserStats({ goalWeight: newGoalWeight });
  };

  const updateGoalType = (newGoalType) => {
    setGoalType(newGoalType);
    updateUserStats({ goalType: newGoalType });
  };

  return (
    <WeightContext.Provider
      value={{
        currentWeight,
        setCurrentWeight: updateWeight, // Ensures updates are saved in AuthContext
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
