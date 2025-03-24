import { BarChart, Bar, Tooltip, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

const CalorieIntakeChart = ({ data }) => {
  return (
    <div className="p-2">
      <h3 className="text-lg font-semibold text-white mb-2">Calories Intake</h3>
      <div className="bg-gray-900 p-2 rounded-xl">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="day" stroke="#bbb" />
            <YAxis stroke="#bbb" />
            <Tooltip />
            <Legend />
            <Bar dataKey="calories" fill="#38bdf8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CalorieIntakeChart;
