import { LineChart, Line, Tooltip, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

const WeightProgressChart = ({ data }) => {
  return (
    <div className="p-2">
      <h3 className="text-lg font-semibold text-white mb-2">Weight Progress</h3>
      <div className="bg-gray-900 p-2 rounded-xl">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="date" stroke="#bbb" />
            <YAxis stroke="#bbb" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="weight" stroke="#facc15" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeightProgressChart;
