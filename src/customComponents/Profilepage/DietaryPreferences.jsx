import { FaUserEdit } from "react-icons/fa";

const DietaryPreferences = ({ preferences, setIsPreferenceEditing }) => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold text-white flex justify-between items-center">
        Dietary Preferences
        <FaUserEdit
          onClick={() => setIsPreferenceEditing(true)}
          className="cursor-pointer text-gray-400"
        />
      </h3>
      <div className="bg-gray-900 p-4 rounded-lg mt-2">
        <p className="text-sm text-gray-400">{preferences.join(", ")}</p>
      </div>
    </div>
  );
};

export default DietaryPreferences;
