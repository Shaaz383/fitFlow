import { useState } from "react";
import {
  FaUserEdit,
  FaCrown,
  FaDumbbell,
  FaTint,
  FaFire,
} from "react-icons/fa";
import BottomNavbar from "@/customComponents/BottomNavbar";
import EditProfileModal from "@/customComponents/Profilepage/EditProfileModal";
import EditPreferencesModal from "@/customComponents/Profilepage/EditPreferencesModal";
import { useAuth } from "@/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "@/customComponents/LoadinSpinner";

const dietaryOptions = ["Balanced", "Vegetarian", "Vegan", "Dairy-Free"];

const ProfilePage = () => {
  const { currentUser, logout, isLoading } = useAuth();
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

  // Destructure with defaults
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

  // Calculate BMI if height and weight are available
  const bmi = height && weight 
    ? (weight / ((height / 100) ** 2)).toFixed(1) 
    : "N/A";

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen pb-28 flex flex-col">
      {/* Profile Header */}
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

      {/* Achievement Badges */}
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

      {/* Health Overview */}
      <div className="p-4 grid grid-cols-2 gap-4">
        <div className="bg-gray-900 p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-400">Height</p>
          <h3 className="text-lg font-semibold">{height} cm</h3>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-400">Weight</p>
          <h3 className="text-lg font-semibold">{weight} kg</h3>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-400">BMI</p>
          <h3 className="text-lg font-semibold">{bmi}</h3>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-400">Age</p>
          <h3 className="text-lg font-semibold">{age}</h3>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-400">Gender</p>
          <h3 className="text-lg font-semibold">{gender}</h3>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-400">Activity Level</p>
          <h3 className="text-lg font-semibold">{activityLevel}</h3>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-400">Diet Preference</p>
          <h3 className="text-lg font-semibold">{dietPreference}</h3>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-400">Goal</p>
          <h3 className="text-lg font-semibold">{goal}</h3>
        </div>
      </div>

      {/* Dietary Preferences */}
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
          className={`w-full py-3 text-white text-lg font-bold rounded-lg shadow-md transition flex items-center justify-center ${
            isLoggingOut ? 'bg-red-700' : 'bg-red-600 hover:bg-red-700'
          }`}
        >
          {isLoggingOut ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Logging Out...
            </>
          ) : 'Logout'}
        </button>
      </div>

      <BottomNavbar />

      {/* Modals */}
      {isEditingProfile && (
        <EditProfileModal
          user={currentUser}
          onClose={() => setIsEditingProfile(false)}
        />
      )}

      {isPreferenceEditing && (
        <EditPreferencesModal
          dietaryOptions={dietaryOptions}
          currentPreferences={preferences}
          onClose={() => setIsPreferenceEditing(false)}
        />
      )}
    </div>
  );
};

export default ProfilePage;