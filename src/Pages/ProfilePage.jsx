import BottomNavbar from "@/customComponents/BottomNavbar";
import DietaryPreferences from "@/customComponents/Profilepage/DietaryPreferences";
import EditPreferencesModal from "@/customComponents/Profilepage/EditPreferencesModal";
import EditProfileModal from "@/customComponents/Profilepage/EditProfileModal";
import HealthOverview from "@/customComponents/Profilepage/HealthOverview";
import ProfileHeader from "@/customComponents/Profilepage/ProfileHeader";
import { useState } from "react";
import { Link } from "react-router-dom";

const dietaryOptions = ["Vegetarian", "Vegan", "High Protein", "Low Carb", "No Sugar", "Keto", "Paleo", "Gluten-Free", "Dairy-Free"];

const ProfilePage = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [weight, setWeight] = useState("78.5 kg");
  const [bmi] = useState("24.5");
  const [hydration, setHydration] = useState(2.5);
  const [preferences, setPreferences] = useState(["Vegan", "No Sugar", "High Protein"]);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingWeight, setIsEditingWeight] = useState(false);
  const [isPreferenceEditing, setIsPreferenceEditing] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen pb-28 flex flex-col justify-between">
      <div>
        <ProfileHeader name={name} email={email} setIsEditingProfile={setIsEditingProfile} />
        <HealthOverview weight={weight} setIsEditingWeight={setIsEditingWeight} bmi={bmi} hydration={hydration} setHydration={setHydration} />
        <DietaryPreferences preferences={preferences} setIsPreferenceEditing={setIsPreferenceEditing} />
        {isEditingProfile && <EditProfileModal name={name} setName={setName} email={email} setEmail={setEmail} setIsEditingProfile={setIsEditingProfile} />}
        {isEditingWeight && <EditWeightModal weight={weight} setWeight={setWeight} setIsEditingWeight={setIsEditingWeight} />}
        {isPreferenceEditing && <EditPreferencesModal dietaryOptions={dietaryOptions} preferences={preferences} togglePreference={(option) => setPreferences(prev => prev.includes(option) ? prev.filter(p => p !== option) : [...prev, option])} setIsPreferenceEditing={setIsPreferenceEditing} />}
      </div>

      {/* 🔥 Big Logout Button at the Bottom */}
      <div className="p-6">
        <Link href="/login">
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
