// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

// Helper function to calculate daily calories based on weight and goal
const calculateDailyCalories = (currentWeight, goalWeight, gender, activityLevel = 'sedentary', height = 170, age = 30) => {
  // Base metabolic rate (BMR) calculation using Mifflin-St Jeor Equation
  let bmr;
  if (gender === 'Female') {
    bmr = 10 * currentWeight + 6.25 * height - 5 * age - 161;
  } else { // Male or other
    bmr = 10 * currentWeight + 6.25 * height - 5 * age + 5;
  }
  
  // Activity level multipliers
  const activityMultipliers = {
    sedentary: 1.2,
    lightly_active: 1.375,
    moderately_active: 1.55,
    very_active: 1.725,
    athlete: 1.9
  };
  
  const tdee = bmr * (activityMultipliers[activityLevel.toLowerCase()] || 1.2);
  
  // Adjust based on goal
  if (goalWeight < currentWeight) {
    return Math.round(tdee * 0.85); // 15% deficit for weight loss
  } else if (goalWeight > currentWeight) {
    return Math.round(tdee * 1.15); // 15% surplus for muscle gain
  }
  return Math.round(tdee); // Maintenance
};

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on initial render
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      setCurrentUser(user);
    }
    setIsLoading(false);
  }, []);

  // Helper function to update both users array and currentUser
  const updateUserData = (updatedUser) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map(user => 
      user.email === currentUser.email ? updatedUser : user
    );
    
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    setCurrentUser(updatedUser);
    return { success: true };
  };

  const register = async (userData) => {
    try {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      
      if (users.some(user => user.email === userData.email)) {
        throw new Error("User already exists");
      }
      
      const goalWeight = userData.goal === "Lose Weight" ? Number(userData.weight) - 5 : 
                       userData.goal === "Gain Muscle" ? Number(userData.weight) + 5 : 
                       Number(userData.weight);
      
      const newUser = {
        ...userData,
        stats: {
          weight: Number(userData.weight),
          goalWeight: goalWeight,
          steps: 0,
          water: 0,
          goalType: userData.goal,
          lastUpdated: new Date().toISOString()
        },
        meals: [],
        dailyCalories: calculateDailyCalories(
          Number(userData.weight),
          goalWeight,
          userData.gender,
          userData.activityLevel,
          Number(userData.height),
          Number(userData.age)
        ),
        preferences: []
      };
      
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      setCurrentUser(newUser);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const login = async (email, password) => {
    try {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(u => u.email === email && u.password === password);
      
      if (!user) {
        throw new Error("Invalid email or password");
      }
      
      localStorage.setItem('currentUser', JSON.stringify(user));
      setCurrentUser(user);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
  };

  const updateUserStats = async (updatedStats) => {
    try {
      const updatedUser = {
        ...currentUser,
        stats: {
          ...currentUser.stats,
          ...updatedStats,
          lastUpdated: new Date().toISOString()
        },
        dailyCalories: calculateDailyCalories(
          updatedStats.weight || currentUser.stats.weight,
          updatedStats.goalWeight || currentUser.stats.goalWeight,
          currentUser.gender,
          currentUser.activityLevel,
          currentUser.height,
          currentUser.age
        )
      };
      return updateUserData(updatedUser);
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const addMeal = async (meal) => {
    try {
      const updatedUser = {
        ...currentUser,
        meals: [...currentUser.meals, meal]
      };
      return updateUserData(updatedUser);
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const updateUserProfile = async (updatedProfile) => {
    try {
      const updatedUser = {
        ...currentUser,
        ...updatedProfile,
        stats: {
          ...currentUser.stats,
          weight: updatedProfile.weight || currentUser.stats.weight,
          lastUpdated: new Date().toISOString()
        },
        dailyCalories: calculateDailyCalories(
          updatedProfile.weight || currentUser.stats.weight,
          currentUser.stats.goalWeight,
          updatedProfile.gender || currentUser.gender,
          updatedProfile.activityLevel || currentUser.activityLevel,
          updatedProfile.height || currentUser.height,
          updatedProfile.age || currentUser.age
        )
      };
      return updateUserData(updatedUser);
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const updatePreferences = async (preferences) => {
    try {
      const updatedUser = {
        ...currentUser,
        preferences: preferences
      };
      return updateUserData(updatedUser);
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const value = {
    currentUser,
    isLoading,
    register,
    login,
    logout,
    updateUserStats,
    addMeal,
    updateUserProfile,
    updatePreferences
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);