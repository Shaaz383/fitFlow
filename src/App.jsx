import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import LandingPage from "./Pages/LandingPage";
import GoalSelection from "./Pages/GoalSelection";
import ActivityLevel from "./Pages/ActivityLevel";
import CustomizeGoal from "./Pages/CustomizeGoal";
import PlanPage from "./Pages/PlanPage";
import ProgressPage from "./Pages/ProgressPage";
import HomePage from "./Pages/Homepage";
import ProfilePage from "./Pages/ProfilePage";
import SearchPage from "./Pages/SearchPage";


function App() {
  return (
    <div>
      <Router>
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/welcome" element={<LandingPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/goal-selection" element={<GoalSelection />} />
          <Route path="/activity-level" element={<ActivityLevel />} />
          <Route path="/customize-goal" element={<CustomizeGoal />} />
          <Route path="/plan" element={<PlanPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
