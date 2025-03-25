import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const EditPreferencesModal = ({ dietaryOptions, currentPreferences, onSave, onClose }) => {
  console.log("Received props:", { dietaryOptions, currentPreferences, onSave, onClose }); // Debugging
  const [selectedPreferences, setSelectedPreferences] = useState(currentPreferences || []);

  const togglePreference = (option) => {
    setSelectedPreferences((prev) =>
      prev.includes(option) ? prev.filter((p) => p !== option) : [...prev, option]
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
      <div className="bg-gray-900 p-6 rounded-lg w-80 relative">
        <button className="absolute top-2 right-2 text-white" onClick={onClose}>
          <FaTimes />
        </button>
        <h3 className="text-lg font-semibold mb-4">Select Preferences</h3>

        <div className="grid grid-cols-2 gap-2">
          {dietaryOptions.map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedPreferences.includes(option)}
                onChange={() => togglePreference(option)}
                className="form-checkbox h-4 w-4 text-blue-500"
              />
              <span className="text-sm">{option}</span>
            </label>
          ))}
        </div>

        <div className="flex justify-between mt-4">
          <button className="bg-gray-600 text-white py-2 px-4 rounded-lg" onClick={onClose}>Cancel</button>
          <button 
            className="bg-blue-500 text-white py-2 px-4 rounded-lg" 
            onClick={() => { 
              console.log("Saving preferences:", selectedPreferences); // Debugging
              if (typeof onSave === "function") {
                onSave(selectedPreferences);
              } else {
                console.error("onSave is not a function", onSave);
              }
              onClose();
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPreferencesModal;
