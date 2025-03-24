import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer } from "recharts";

const MacroBreakdownChart = ({ data }) => {
  return (
    <div className="p-2">
      <h3 className="text-lg font-semibold text-white mb-2">Macronutrient Breakdown</h3>
      <div className="bg-gray-900 p-2 rounded-xl">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Tooltip />
            <Legend />
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MacroBreakdownChart;
