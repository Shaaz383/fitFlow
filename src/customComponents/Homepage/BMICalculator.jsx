import { useState } from "react";

const BMICalculator = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      // Determine BMI category
      if (bmiValue < 18.5) {
        setBmiCategory("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiCategory("Normal weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiCategory("Overweight");
      } else {
        setBmiCategory("Obesity");
      }
    }
  };

  const resetForm = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiCategory("");
  };

  return (
    <div>
      {/* BMI Calculation Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg text-lg hover:bg-yellow-400 transition"
      >
        Calculate BMI
      </button>

      {/* BMI Calculation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-gray-900 p-6 rounded-lg w-80">
            <h3 className="text-lg font-semibold mb-4">BMI Calculator</h3>

            {/* Height Input */}
            <div className="mb-4">
              <label className="text-gray-400 text-sm">Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full p-2 rounded bg-gray-800 text-white"
                placeholder="Enter height"
              />
            </div>

            {/* Weight Input */}
            <div className="mb-4">
              <label className="text-gray-400 text-sm">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full p-2 rounded bg-gray-800 text-white"
                placeholder="Enter weight"
              />
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateBMI}
              className="w-full bg-yellow-500 text-black font-bold py-2 rounded-lg mb-2 hover:bg-yellow-400 transition"
            >
              Calculate
            </button>

            {/* Reset Button */}
            <button
              onClick={resetForm}
              className="w-full bg-gray-700 text-white py-2 rounded-lg mb-2 hover:bg-gray-600 transition"
            >
              Reset
            </button>

            {/* BMI Result */}
            {bmi && (
              <div className="mt-4 text-center">
                <p className="text-lg font-semibold">Your BMI: {bmi}</p>
                <p className="text-sm text-gray-400">Category: {bmiCategory}</p>
              </div>
            )}

            {/* Close Modal Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-red-500 text-white py-2 rounded-lg mt-2 hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;