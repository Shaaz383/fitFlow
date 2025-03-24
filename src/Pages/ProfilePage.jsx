import { useState } from "react";
import { FaUserEdit, FaCrown, FaMedal, FaDumbbell, FaTint, FaFire } from "react-icons/fa";
import BottomNavbar from "@/customComponents/BottomNavbar";
import EditProfileModal from "@/customComponents/Profilepage/EditProfileModal";
import EditPreferencesModal from "@/customComponents/Profilepage/EditPreferencesModal";

const dietaryOptions = [
  "Vegetarian", "Vegan", "High Protein", "Low Carb", "No Sugar", "Keto", "Paleo", "Gluten-Free", "Dairy-Free"
];

const ProfilePage = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState("Male");
  const [height, setHeight] = useState(175);
  const [bmi, setBmi] = useState(24.5);
  const [hydration, setHydration] = useState(2.5);
  const [activityLevel, setActivityLevel] = useState("Moderately Active");
  const [preferences, setPreferences] = useState(["Vegan", "No Sugar", "High Protein"]);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isPreferenceEditing, setIsPreferenceEditing] = useState(false);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen pb-28 flex flex-col">
      {/* Profile Header */}
      <div className="p-6 flex items-center justify-between bg-gray-900 rounded-b-3xl shadow-md">
        <div className="flex items-center space-x-4">
          {/* Profile Picture */}
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
        <FaUserEdit
          onClick={() => setIsEditingProfile(true)}
          className="cursor-pointer text-gray-400 text-xl"
        />
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
        {/* Height */}
        <div className="bg-gray-900 p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-400">Height</p>
          <h3 className="text-lg font-semibold">{height} cm</h3>
        </div>

        {/* Age */}
        <div className="bg-gray-900 p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-400">Age</p>
          <h3 className="text-lg font-semibold">{age}</h3>
        </div>

        {/* Gender */}
        <div className="bg-gray-900 p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-400">Gender</p>
          <h3 className="text-lg font-semibold">{gender}</h3>
        </div>

        {/* Activity Level */}
        <div className="bg-gray-900 p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-400">Activity Level</p>
          <h3 className="text-lg font-semibold">{activityLevel}</h3>
        </div>

        {/* BMI */}
        <div className="bg-gray-900 p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-400">BMI</p>
          <h3 className="text-lg font-semibold">{bmi}</h3>
        </div>

        {/* Hydration Progress */}
        {/* <div className="bg-gray-900 p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-400">Hydration</p>
          <h3 className="text-lg font-semibold">{hydration}L</h3>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${hydration / 4 * 100}%` }}></div>
          </div>
        </div> */}
      </div>

      {/* Dietary Preferences */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">Dietary Preferences</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {preferences.map((pref) => (
            <span key={pref} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
              {pref}
            </span>
          ))}
        </div>
        <button
          onClick={() => setIsPreferenceEditing(true)}
          className="mt-2 bg-gray-700 px-4 py-2 rounded-lg text-sm"
        >
          Edit Preferences
        </button>
      </div>

      {/* Logout Button */}
      <div className="p-6">
        <button className="w-full py-3 bg-red-600 text-white text-lg font-bold rounded-lg shadow-md hover:bg-red-700 transition">
          Logout
        </button>
      </div>

      <BottomNavbar />

      {/* Modals */}
      {isEditingProfile && (
        <EditProfileModal
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          age={age}
          setAge={setAge}
          gender={gender}
          setGender={setGender}
          height={height}
          setHeight={setHeight}
          activityLevel={activityLevel}
          setActivityLevel={setActivityLevel}
          setIsEditingProfile={setIsEditingProfile}
        />
      )}

      {isPreferenceEditing && (
        <EditPreferencesModal
          dietaryOptions={dietaryOptions}
          preferences={preferences}
          togglePreference={(option) =>
            setPreferences((prev) =>
              prev.includes(option) ? prev.filter((p) => p !== option) : [...prev, option]
            )
          }
          setIsPreferenceEditing={setIsPreferenceEditing}
        />
      )}
    </div>
  );
};

export default ProfilePage;
