import { useState } from "react";
import ProfileHeader from "@/customComponents/Profilepage/ProfileHeader";
import HealthOverview from "@/customComponents/Profilepage/HealthOverview";
import DietaryPreferences from "@/customComponents/Profilepage/DietaryPreferences";
import EditProfileModal from "@/customComponents/Profilepage/EditProfileModal";
import EditWeightModal from "@/customComponents/Profilepage/EditWeightModal";
import EditPreferencesModal from "@/customComponents/Profilepage/EditPreferencesModal";
import BottomNavbar from "@/customComponents/BottomNavbar";
import { Link } from "react-router-dom";

const dietaryOptions = [
  "Vegetarian",
  "Vegan",
  "High Protein",
  "Low Carb",
  "No Sugar",
  "Keto",
  "Paleo",
  "Gluten-Free",
  "Dairy-Free",
];

const ProfilePage = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState("Male");
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState("78.5 kg");
  const [bmi] = useState("24.5");
  const [hydration, setHydration] = useState(2.5);
  const [activityLevel, setActivityLevel] = useState("Moderately Active");
  const [preferences, setPreferences] = useState(["Vegan", "No Sugar", "High Protein"]);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingWeight, setIsEditingWeight] = useState(false);
  const [isPreferenceEditing, setIsPreferenceEditing] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen pb-28 flex flex-col justify-between">
      <div>
        <ProfileHeader
          name={name}
          email={email}
          setIsEditingProfile={setIsEditingProfile}
        />
        <HealthOverview
          weight={weight}
          setIsEditingWeight={setIsEditingWeight}
          bmi={bmi}
          hydration={hydration}
          setHydration={setHydration}
          height={height}
          age={age}
          gender={gender}
          activityLevel={activityLevel}
        />
        <DietaryPreferences
          preferences={preferences}
          setIsPreferenceEditing={setIsPreferenceEditing}
        />
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
        {isEditingWeight && (
          <EditWeightModal
            weight={weight}
            setWeight={setWeight}
            setIsEditingWeight={setIsEditingWeight}
          />
        )}
        {isPreferenceEditing && (
          <EditPreferencesModal
            dietaryOptions={dietaryOptions}
            preferences={preferences}
            togglePreference={(option) =>
              setPreferences((prev) =>
                prev.includes(option)
                  ? prev.filter((p) => p !== option)
                  : [...prev, option]
              )
            }
            setIsPreferenceEditing={setIsPreferenceEditing}
          />
        )}
      </div>

      {/* Logout Button */}
      <div className="p-6">
        <Link to="/login">
          <button className="w-full py-3 bg-red-600 text-white text-lg font-bold rounded-lg shadow-md hover:bg-red-700 transition">
            Logout
          </button>
        </Link>
      </div>

      <BottomNavbar />
    </div>
  );
};

export default ProfilePage;