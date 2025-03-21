const PlanCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg flex items-center space-x-4 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105">
      {icon}
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default PlanCard;
