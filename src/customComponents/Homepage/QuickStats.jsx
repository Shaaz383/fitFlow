import { useState } from "react";
import { FaWeight, FaFire, FaTint, FaWalking } from "react-icons/fa";

const QuickStats = ({ stats, updateStat }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStat, setSelectedStat] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleCardClick = (stat) => {
    setSelectedStat(stat);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (selectedStat && inputValue) {
      const value = parseFloat(inputValue);

      // Validate input (cannot be negative)
      if (value < 0) {
        alert("Value cannot be negative!");
        return;
      }

      // Append unit based on the card type
      let newValue;
      switch (selectedStat.title) {
        case "Weight":
          newValue = `${value} kg`;
          break;
        case "Calories":
          newValue = `${value} kcal`;
          break;
        case "Water":
          newValue = `${value} L`;
          break;
        case "Step Count":
          newValue = `${value} steps`;
          break;
        default:
          newValue = inputValue;
      }

      // For Calories and Water, add the new value to the existing value
      if (selectedStat.title === "Calories" || selectedStat.title === "Water") {
        const currentValue = parseFloat(selectedStat.value);
        newValue = `${currentValue + value} ${selectedStat.title === "Calories" ? "kcal" : "L"}`;
      }

      // Update the stat value in the parent component
      updateStat(selectedStat.title, newValue);
      setIsModalOpen(false);
      setInputValue("");
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-2">
      {stats.map((stat, index) => (
        <div
          key={index}
          onClick={() => handleCardClick(stat)}
          className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105"
        >
          {stat.icon}
          <div>
            <p className="text-sm text-gray-400">{stat.title}</p>
            <h3 className="text-sm font-semibold">{stat.value}</h3>
          </div>
        </div>
      ))}

      {/* Modal for Updating Stats */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-gray-900 p-6 rounded-lg w-80">
            <h3 className="text-lg font-semibold mb-4">Update {selectedStat?.title}</h3>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
              placeholder={`Enter ${selectedStat?.title}`}
              min="0" // Prevent negative values
            />
            <button
              onClick={handleSave}
              className="w-full bg-blue-500 text-white py-2 rounded-lg"
            >
              Save
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-gray-700 text-white py-2 rounded-lg mt-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickStats;