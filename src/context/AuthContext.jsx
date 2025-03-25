// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

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
      
      const newUser = {
        ...userData,
        stats: {
          weight: Number(userData.weight),
          steps: 0,
          water: 0,
          goalWeight: userData.goal === "Lose Weight" ? Number(userData.weight) - 5 : 
                     userData.goal === "Gain Muscle" ? Number(userData.weight) + 5 : Number(userData.weight),
          goalType: userData.goal,
          lastUpdated: new Date().toISOString()
        },
        meals: [],
        dailyCalories: 2000,
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
        }
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
        meals: [...currentUser.meals, meal],
        dailyCalories: currentUser.dailyCalories || 2000
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
        }
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