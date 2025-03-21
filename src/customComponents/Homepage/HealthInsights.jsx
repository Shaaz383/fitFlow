const HealthInsights = ({ insights }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Stay Healthy</h2>
      <div className="grid grid-cols-2 gap-6">
        {insights.map((insight, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg flex items-center space-x-4 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105">
            {insight.icon}
            <div>
              <h3 className="text-lg font-semibold">{insight.title}</h3>
              <p className="text-gray-400 text-sm">{insight.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthInsights;
