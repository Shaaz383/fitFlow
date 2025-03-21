import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CalorieTracker = ({ caloriesConsumed, dailyCalories }) => {
  return (
    <div className="p-4 flex flex-col items-center">
      <div className="w-32 h-32">
        <CircularProgressbar
          value={dailyCalories > 0 ? (caloriesConsumed / dailyCalories) * 100 : 0}
          text={`${caloriesConsumed} / ${dailyCalories} kcal`}
          styles={buildStyles({ textColor: "#fff", pathColor: "#facc15", trailColor: "#333", textSize: "10px" })}
        />
      </div>
      <p className="mt-2 text-gray-400 text-sm">Remaining: {dailyCalories - caloriesConsumed} kcal</p>
    </div>
  );
};

export default CalorieTracker;
