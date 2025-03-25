// src/components/StepsModal.js
const StepsModal = ({ isOpen, onClose, steps, setSteps, onUpdate }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md">
        <h2 className="text-white text-lg font-bold mb-4">Update Steps</h2>
        <input
          type="number"
          className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600"
          placeholder="Enter new step count"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />
        <div className="flex justify-between mt-4">
          <button
            onClick={onUpdate}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400 transition"
          >
            Update
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepsModal;