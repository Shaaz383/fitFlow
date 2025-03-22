import { createContext, useState } from "react";

export const WeightContext = createContext();

export const WeightProvider = ({ children }) => {
  const [currentWeight, setCurrentWeight] = useState(70);
  const [goalWeight, setGoalWeight] = useState(65);
  const [goalType, setGoalType] = useState("weight_loss");

  return (
    <WeightContext.Provider
      value={{ currentWeight, setCurrentWeight, goalWeight, setGoalWeight, goalType, setGoalType }}
    >
      {children}
    </WeightContext.Provider>
  );
};