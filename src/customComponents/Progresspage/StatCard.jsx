const StatCard = ({ icon: Icon, label, value, color }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-xl flex flex-col items-center text-center">
      <Icon className={`${color} text-2xl`} />
      <p className="text-sm text-gray-400 mt-2">{label}</p>
      <h3 className="text-lg font-semibold text-white">{value}</h3>
    </div>
  );
};

export default StatCard;
