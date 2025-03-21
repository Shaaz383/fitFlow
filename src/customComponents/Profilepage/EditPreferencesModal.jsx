const EditPreferencesModal = ({ dietaryOptions, preferences, togglePreference, setIsPreferenceEditing }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
      <div className="bg-gray-900 p-6 rounded-lg w-80">
        <h3 className="text-lg font-semibold mb-4">Select Preferences</h3>
        <div className="grid grid-cols-2 gap-2">
          {dietaryOptions.map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={preferences.includes(option)}
                onChange={() => togglePreference(option)}
                className="form-checkbox h-4 w-4 text-blue-500"
              />
              <span className="text-sm">{option}</span>
            </label>
          ))}
        </div>
        <button
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg"
          onClick={() => setIsPreferenceEditing(false)}
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
};

export default EditPreferencesModal;
