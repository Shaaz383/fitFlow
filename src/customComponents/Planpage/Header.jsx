import { FaCalendarAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import logoDark from "../../assets/logoDark.png";

const Header = ({ selectedDate, handleDateChange }) => {
  const getFormattedDate = (date) => 
    date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <div className="flex items-center justify-between p-4">
      <img src={logoDark} alt="Logo" className="h-12 w-auto filter invert" />
      <div className="flex items-center space-x-2">
        <FaArrowLeft className="text-yellow-500 cursor-pointer" onClick={() => handleDateChange(-1)} />
        <FaCalendarAlt className="text-yellow-500" />
        <h2 className="text-lg font-semibold text-yellow-500">{getFormattedDate(selectedDate)}</h2>
        <FaArrowRight className="text-yellow-500 cursor-pointer" onClick={() => handleDateChange(1)} />
      </div>
    </div>
  );
};

export default Header;
