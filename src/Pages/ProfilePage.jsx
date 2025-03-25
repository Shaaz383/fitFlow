import { useState } from "react";
import {
  FaUserEdit,
  FaCrown,
  FaDumbbell,
  FaTint,
  FaFire,
  FaTimes,
} from "react-icons/fa";
import BottomNavbar from "@/customComponents/BottomNavbar";
import { useAuth } from "@/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "@/customComponents/LoadinSpinner";

const dietaryOptions = ["Balanced", "Vegetarian", "Vegan", "Dairy-Free"];

const ProfilePage = () => {
  const { 
    currentUser, 
    logout, 
    isLoading, 
    updateUserProfile, 
    updatePreferences 
  } = useAuth();
  const navigate = useNavigate();
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isPreferenceEditing, setIsPreferenceEditing] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
      navigate("/signin");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const handleProfileUpdate = async (updatedData) => {
    try {
      await updateUserProfile(updatedData);
      setIsEditingProfile(false);
    } catch (error) {
      console.error("Profile update error:", error);
    }
  };

  const handlePreferencesUpdate = async (newPreferences) => {
    try {
      await updatePreferences(newPreferences);
      setIsPreferenceEditing(false);
    } catch (error) {
      console.error("Preferences update error:", error);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!currentUser) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <p className="text-lg mb-4">You need to be logged in to view this page</p>
        <Link 
          to="/signin" 
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  const {
    name = "Guest User",
    email = "Not Available",
    age = "N/A",
    gender = "N/A",
    height = "N/A",
    weight = "N/A",
    activityLevel = "N/A",
    dietPreference = "Not specified",
    goal = "Not specified",
    preferences = []
  } = currentUser;

  const bmi = height && weight 
    ? (weight / ((height / 100) ** 2)).toFixed(1) 
    : "N/A";

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen pb-28 flex flex-col">
      {/* Header Section */}
      <div className="p-6 flex items-center justify-between bg-gray-900 rounded-b-3xl shadow-md">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center text-2xl font-bold">
            {name.charAt(0)}
          </div>
          <div>
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-sm text-gray-400">{email}</p>
            <p className="text-sm text-yellow-400 flex items-center mt-1">
              <FaCrown className="mr-1" /> Premium Member
            </p>
          </div>
        </div>
        <button 
          onClick={() => setIsEditingProfile(true)}
          className="text-gray-400 hover:text-white transition"
        >
          <FaUserEdit className="text-xl" />
        </button>
      </div>

      {/* Badges Section */}
      <div className="p-4 flex space-x-2 overflow-x-auto text-[12px]">
        <div className="bg-blue-500 px-3 py-1 rounded-full text-white flex items-center space-x-2 shadow-lg">
          <FaDumbbell /> <span>10K Steps</span>
        </div>
        <div className="bg-green-500 px-3 py-1 rounded-full text-white flex items-center space-x-2 shadow-lg">
          <FaTint /> <span>Hydration Master</span>
        </div>
        <div className="bg-red-500 px-3 py-1 rounded-full text-white flex items-center space-x-2 shadow-lg">
          <FaFire /> <span>Calorie King</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="p-4 grid grid-cols-2 gap-4">
        {[['Height', height, 'cm'], ['Weight', weight, 'kg'], ['BMI', bmi, ''], ['Age', age, ''], ['Gender', gender, ''], ['Activity Level', activityLevel, ''], ['Diet Preference', dietPreference, ''], ['Goal', goal, '']].map(([label, value, unit]) => (
          <div key={label} className="bg-gray-900 p-4 rounded-lg shadow-md">
            <p className="text-sm text-gray-400">{label}</p>
            <h3 className="text-lg font-semibold">{value} {unit}</h3>
          </div>
        ))}
      </div>

      {/* Preferences Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Dietary Preferences</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {preferences.length > 0 ? (
            preferences.map((pref) => (
              <span
                key={pref}
                className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
              >
                {pref}
              </span>
            ))
          ) : (
            <p className="text-gray-400 text-sm">No preferences set</p>
          )}
        </div>
        <button
          onClick={() => setIsPreferenceEditing(true)}
          className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm transition"
        >
          Edit Preferences
        </button>
      </div>

      {/* Logout Button */}
      <div className="p-6 mt-auto">
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className={`w-full py-3 text-white text-lg font-bold rounded-lg shadow-md transition flex items-center justify-center ${isLoggingOut ? 'bg-red-700' : 'bg-red-600 hover:bg-red-700'}`}
        >
          {isLoggingOut ? "Logging Out..." : "Logout"}
        </button>
      </div>

      <BottomNavbar />

      {/* Edit Profile Modal */}
      {isEditingProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg w-full max-w-md relative">
            <button 
              onClick={() => setIsEditingProfile(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <FaTimes className="text-xl" />
            </button>
            
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
              <form onSubmit={(e) => {
                e.preventDefault();
                handleProfileUpdate({
                  name: e.target.name.value,
                  email: e.target.email.value,
                  age: e.target.age.value,
                  gender: e.target.gender.value,
                  height: e.target.height.value,
                  weight: e.target.weight.value,
                  activityLevel: e.target.activityLevel.value
                });
              }}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={name}
                      className="w-full p-2 bg-gray-700 rounded border border-gray-600"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={email}
                      className="w-full p-2 bg-gray-700 rounded border border-gray-600"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 mb-1">Age</label>
                      <input
                        type="number"
                        name="age"
                        defaultValue={age}
                        min="1"
                        max="120"
                        className="w-full p-2 bg-gray-700 rounded border border-gray-600"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-1">Gender</label>
                      <select
                        name="gender"
                        defaultValue={gender}
                        className="w-full p-2 bg-gray-700 rounded border border-gray-600"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 mb-1">Height (cm)</label>
                      <input
                        type="number"
                        name="height"
                        defaultValue={height}
                        min="50"
                        max="250"
                        className="w-full p-2 bg-gray-700 rounded border border-gray-600"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-1">Weight (kg)</label>
                      <input
                        type="number"
                        name="weight"
                        defaultValue={weight}
                        min="30"
                        max="300"
                        className="w-full p-2 bg-gray-700 rounded border border-gray-600"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-1">Activity Level</label>
                    <select
                      name="activityLevel"
                      defaultValue={activityLevel}
                      className="w-full p-2 bg-gray-700 rounded border border-gray-600"
                    >
                      <option value="Sedentary">Sedentary</option>
                      <option value="Lightly Active">Lightly Active</option>
                      <option value="Moderately Active">Moderately Active</option>
                      <option value="Very Active">Very Active</option>
                      <option value="Athlete">Athlete</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsEditingProfile(false)}
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Edit Preferences Modal */}
      {isPreferenceEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg w-full max-w-md relative">
            <button 
              onClick={() => setIsPreferenceEditing(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <FaTimes className="text-xl" />
            </button>
            
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Edit Dietary Preferences</h2>
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const selected = [];
                dietaryOptions.forEach(option => {
                  if (formData.get(option)) selected.push(option);
                });
                handlePreferencesUpdate(selected);
              }}>
                <div className="space-y-3">
                  {dietaryOptions.map(option => (
                    <div key={option} className="flex items-center">
                      <input
                        type="checkbox"
                        id={option}
                        name={option}
                        defaultChecked={preferences.includes(option)}
                        className="mr-3 h-5 w-5"
                      />
                      <label htmlFor={option} className="text-gray-300">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsPreferenceEditing(false)}
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded"
                  >
                    Save Preferences
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;