import { FaUtensils, FaLeaf, FaDrumstickBite, FaCookie, FaClock } from "react-icons/fa";

const FullDayMealPlan = ({ goalType }) => {
  const mealPlan = [
    {
      time: "7-8 AM",
      label: "Breakfast",
      icon: <FaLeaf />,
      items: [
        "4 whole eggs + 2 egg whites",
        "1 cup oatmeal with 1 tbsp honey",
        "1 banana",
        "1 cup low-fat milk",
      ],
      kcal: 500,
      badgeColor: "bg-yellow-500",
    },
    {
      time: "10-11 AM",
      label: "Mid-Morning Snack",
      icon: <FaCookie />,
      items: ["Protein shake (30g whey protein)", "1 apple", "30g almonds"],
      kcal: 300,
      badgeColor: "bg-blue-500",
    },
    {
      time: "1-2 PM",
      label: "Lunch",
      icon: <FaDrumstickBite />,
      items: [
        "170g grilled chicken breast",
        "1 cup brown rice",
        "2 cups mixed vegetables",
        "1 tbsp olive oil for cooking",
      ],
      kcal: 700,
      badgeColor: "bg-green-500",
    },
    {
      time: "4-5 PM",
      label: "Pre-Workout",
      icon: <FaUtensils />,
      items: ["150g Greek yogurt", "1 banana", "30g granola"],
      kcal: 350,
      badgeColor: "bg-purple-500",
    },
    {
      time: "Post-Workout",
      label: "Post-Workout",
      icon: <FaCookie />,
      items: ["Protein shake (30g whey protein)", "1 cup white rice or 2 slices bread"],
      kcal: 400,
      badgeColor: "bg-red-500",
    },
    {
      time: "8-9 PM",
      label: "Dinner",
      icon: <FaDrumstickBite />,
      items: [
        "170g salmon, lean beef, or turkey",
        "2 medium sweet potatoes",
        "2 cups green vegetables",
        "1 tbsp olive oil or coconut oil",
      ],
      kcal: 650,
      badgeColor: "bg-pink-500",
    },
  ];

  return (
    <div className="p-4">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center">
          <FaUtensils className="text-yellow-500 text-xl mr-2" />
          Full-Day Meal Plan
        </h2>

        <div className="space-y-4">
          {mealPlan.map(({ time, label, icon, items, kcal, badgeColor }, index) => (
            <div
              key={index}
              className="bg-gray-700 px-4 py-3 rounded-lg shadow-md flex flex-col sm:flex-row sm:justify-between items-start sm:items-center"
            >
              {/* Left Side: Meal Details */}
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${badgeColor}`}>
                  {time}
                </span>
                <span className="text-yellow-400 text-lg">{icon}</span>
                <h3 className="text-white font-semibold">{label}</h3>
              </div>

              {/* Middle Section: Meal Items */}
              <ul className="text-gray-300 text-sm mt-2 sm:mt-0">
                {items.map((item, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <FaClock className="text-gray-400 text-xs" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Right Side: Calories Badge */}
              <div className="text-right mt-2 sm:mt-0">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {kcal} kcal
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullDayMealPlan;
