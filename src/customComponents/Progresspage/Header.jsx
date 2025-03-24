import { FaCalendarAlt } from "react-icons/fa";

const Header = ({ logo, timeframe, setTimeframe }) => {
  return (
    <div className="p-4 flex justify-between items-center bg-gray-800 rounded-b-lg shadow-md">
      <img src={logo} alt="Logo" className="h-16 filter invert" />
      <h2 className="text-xl font-bold text-yellow-400">Your Progress</h2>
      <div className="bg-gray-700 p-2 rounded-lg flex items-center space-x-2 shadow-md">
        <FaCalendarAlt className="text-yellow-500" />
        <select
          className="bg-transparent text-white outline-none"
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
        >
          <option className="text-black" value="Week">
            Week
          </option>
          <option className="text-black" value="Month">
            Month
          </option>
          <option className="text-black" value="Year">
            Year
          </option>
        </select>
      </div>
    </div>
  );
};

export default Header;
