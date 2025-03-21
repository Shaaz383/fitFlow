import { FaCalendarAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const DatePicker = ({ selectedDate, handleDateChange }) => {
  const formattedDate = selectedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="p-4 flex items-center justify-between bg-gray-800 rounded-lg shadow-md">
      <FaArrowLeft
        className="text-yellow-500 cursor-pointer"
        onClick={() => handleDateChange(new Date(selectedDate.setDate(selectedDate.getDate() - 1)))}
      />
      <div className="flex items-center space-x-2">
        <FaCalendarAlt className="text-yellow-500" />
        <h2 className="text-lg font-semibold text-yellow-500">{formattedDate}</h2>
      </div>
      <FaArrowRight
        className="text-yellow-500 cursor-pointer"
        onClick={() => handleDateChange(new Date(selectedDate.setDate(selectedDate.getDate() + 1)))}
      />
    </div>
  );
};

export default DatePicker;