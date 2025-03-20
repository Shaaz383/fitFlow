import { FaHome, FaSearch, FaChartBar, FaCog } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const BottomNavbar = () => {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white flex justify-around items-center py-3 border-t border-gray-800">
      <Link to="/" className={`flex flex-col items-center ${location.pathname === "/" ? "text-yellow-500" : "text-gray-400"}`}>
        <FaHome size={24} />
        <span className="text-xs">Home</span>
      </Link>
      <Link to="/plan" className={`flex flex-col items-center ${location.pathname === "/plan" ? "text-yellow-500" : "text-gray-400"}`}>
        <MdFastfood size={22} />
        <span className="text-xs">Plan</span>
      </Link>
      <Link to="/search" className={`flex flex-col items-center ${location.pathname === "/search" ? "text-yellow-500" : "text-gray-400"}`}>
        <FaSearch size={22} />
        <span className="text-xs">Search</span>
      </Link>
      <Link to="/progress" className={`flex flex-col items-center ${location.pathname === "/progress" ? "text-yellow-500" : "text-gray-400"}`}>
        <FaChartBar size={22} />
        <span className="text-xs">Progress</span>
      </Link>
      <Link to="/profile" className={`flex flex-col items-center ${location.pathname === "/profile" ? "text-yellow-500" : "text-gray-400"}`}>
        <FaCog size={22} />
        <span className="text-xs">Settings</span>
      </Link>
    </div>
  );
};

export default BottomNavbar;
