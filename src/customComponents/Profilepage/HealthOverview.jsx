import { FaWeight, FaRulerVertical, FaBirthdayCake, FaVenusMars, FaRunning } from "react-icons/fa";

const HealthOverview = ({
  weight,
  setIsEditingWeight,
  bmi,
  hydration,
  setHydration,
  height,
  age,
  gender,
  activityLevel,
}) => {
  return (
    <div className="p-4 grid grid-cols-2 gap-4">
      {/* Weight
      <div className="bg-gray-900 p-4 rounded-lg flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">Weight</p>
          <h3 className="text-lg font-semibold">{weight}</h3>
        </div>
        <FaWeight
          onClick={() => setIsEditingWeight(true)}
          className="text-blue-400 text-xl cursor-pointer"
        />
      </div> */}

      {/* Height */}
      <div className="bg-gray-900 p-4 rounded-lg">
        <p className="text-sm text-gray-400">Height</p>
        <h3 className="text-lg font-semibold">{height} cm</h3>
      </div>

      {/* Age */}
      <div className="bg-gray-900 p-4 rounded-lg">
        <p className="text-sm text-gray-400">Age</p>
        <h3 className="text-lg font-semibold">{age}</h3>
      </div>

      {/* Gender */}
      <div className="bg-gray-900 p-4 rounded-lg">
        <p className="text-sm text-gray-400">Gender</p>
        <h3 className="text-lg font-semibold">{gender}</h3>
      </div>

      {/* Activity Level */}
      <div className="bg-gray-900 p-4 rounded-lg">
        <p className="text-sm text-gray-400">Activity Level</p>
        <h3 className="text-lg font-semibold">{activityLevel}</h3>
      </div>

      {/* BMI */}
      <div className="bg-gray-900 p-4 rounded-lg">
        <p className="text-sm text-gray-400">BMI</p>
        <h3 className="text-lg font-semibold">{bmi}</h3>
      </div>

      {/* Hydration */}
      {/* <div className="bg-gray-900 p-4 rounded-lg flex items-center justify-between">
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
      </div> */}
    </div>
  );
};

export default HealthOverview;