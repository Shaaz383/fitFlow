const QuickStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-gray-800 p-6 rounded-lg flex items-center space-x-4 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105">
          {stat.icon}
          <div>
            <p className="text-sm text-gray-400">{stat.title}</p>
            <h3 className="text-xl font-semibold">{stat.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickStats;
