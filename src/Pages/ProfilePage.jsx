import { useState } from "react";
import { FaUserEdit, FaWeight, FaTint, FaDumbbell, FaCrown, FaSignOutAlt } from "react-icons/fa";
import BottomNavbar from "../customComponents/BottomNavbar";

const dietaryOptions = [
  "Vegetarian", "Vegan", "High Protein", "Low Carb", "No Sugar",
  "Keto", "Paleo", "Gluten-Free", "Dairy-Free"
];

const ProfilePage = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [weight, setWeight] = useState("78.5 kg");
  const [bmi, setBmi] = useState("24.5");
  const [hydration, setHydration] = useState(2.5);
  const [preferences, setPreferences] = useState(["Vegan", "No Sugar", "High Protein"]);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingWeight, setIsEditingWeight] = useState(false);
  const [isPreferenceEditing, setIsPreferenceEditing] = useState(false);

  const togglePreference = (option) => {
    setPreferences((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  return (
    <div className="bg-black text-white min-h-screen pb-20">
      {/* Profile Header */}
      <div className="p-6 flex items-center justify-between bg-gray-900 rounded-b-3xl">
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-sm text-gray-400">{email}</p>
          <p className="text-sm text-yellow-400 flex items-center mt-1">
            <FaCrown className="mr-1" /> Premium Member
          </p>
        </div>
        <FaUserEdit onClick={() => setIsEditingProfile(true)} className="cursor-pointer text-gray-400 text-xl" />
      </div>

      {/* Health Overview */}
      <div className="p-4 grid grid-cols-2 gap-4">
        <div className="bg-gray-900 p-4 rounded-lg flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">Weight</p>
            <h3 className="text-lg font-semibold">{weight}</h3>
          </div>
          <FaWeight onClick={() => setIsEditingWeight(true)} className="text-blue-400 text-xl cursor-pointer" />
        </div>
        <div className="bg-gray-900 p-4 rounded-lg flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">BMI</p>
            <h3 className="text-lg font-semibold">{bmi}</h3>
          </div>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">Hydration</p>
            <h3 className="text-lg font-semibold">{hydration}L</h3>
          </div>
          <button 
            onClick={() => setHydration((prev) => prev + 0.25)}
            className="bg-blue-500 px-3 py-1 rounded-lg text-white text-sm"
          >
            +250ml
          </button>
        </div>
      </div>

      {/* Preferences */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white flex justify-between items-center">
          Dietary Preferences
          <FaUserEdit onClick={() => setIsPreferenceEditing(true)} className="cursor-pointer text-gray-400" />
        </h3>
        <div className="bg-gray-900 p-4 rounded-lg mt-2">
          <p className="text-sm text-gray-400">{preferences.join(", ")}</p>
        </div>
      </div>

      {/* Profile Edit Modal */}
      {isEditingProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-gray-900 p-6 rounded-lg w-80">
            <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 mb-2 rounded bg-gray-800 text-white" placeholder="Name" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 rounded bg-gray-800 text-white" placeholder="Email" />
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg" onClick={() => setIsEditingProfile(false)}>Save</button>
          </div>
        </div>
      )}

      {/* Weight Edit Modal */}
      {isEditingWeight && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-gray-900 p-6 rounded-lg w-80">
            <h3 className="text-lg font-semibold mb-4">Edit Weight</h3>
            <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full p-2 mb-2 rounded bg-gray-800 text-white" />
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg" onClick={() => setIsEditingWeight(false)}>Save</button>
          </div>
        </div>
      )}

      {/* Preference Modal */}
      {isPreferenceEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-gray-900 p-6 rounded-lg w-80">
            <h3 className="text-lg font-semibold mb-4">Select Preferences</h3>
            <div className="grid grid-cols-2 gap-2">
              {dietaryOptions.map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input type="checkbox" checked={preferences.includes(option)} onChange={() => togglePreference(option)} className="form-checkbox h-4 w-4 text-blue-500" />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg" onClick={() => setIsPreferenceEditing(false)}>Save Preferences</button>
          </div>
        </div>
      )}

      {/* Logout Button */}
      <button className="mt-6 w-full bg-red-500 text-white py-3 rounded-lg flex items-center justify-center space-x-2">
        <FaSignOutAlt /> <span>Logout</span>
      </button>

      <BottomNavbar />
    </div>
  );
};

export default ProfilePage;
