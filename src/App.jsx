import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import LandingPage from "./pages/LandingPage";
import GoalSelection from "./pages/GoalSelection";
import ActivityLevel from "./pages/ActivityLevel";
import CustomizeGoal from "./pages/CustomizeGoal";
import PlanPage from "./pages/PlanPage";
import ProgressPage from "./pages/ProgressPage";
import HomePage from "./pages/Homepage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";


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
