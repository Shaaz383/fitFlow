const StatCard = ({ icon: Icon, label, value, color }) => {
  return (
    <div className="bg-gray-800 bg-opacity-70 p-6 rounded-xl flex flex-col items-center text-center shadow-lg transition-all duration-300 hover:scale-105">
      <Icon className={`${color} text-3xl mb-2`} />
      <p className="text-sm text-gray-400 font-semibold">{label}</p>
      <h3 className="text-xl font-bold text-white">{value}</h3>
    </div>
  );
};

export default StatCard;
