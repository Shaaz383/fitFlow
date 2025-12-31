import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import LandingPage from "./Views/LandingPage.jsx";
import GoalSelection from "./Views/GoalSelection.jsx";
import ActivityLevel from "./Views/ActivityLevel.jsx";
import CustomizeGoal from "./Views/CustomizeGoal.jsx";
import PlanPage from "./Views/PlanPage.jsx";
import ProgressPage from "./Views/ProgressPage.jsx";
import HomePage from "./Views/HomePage.jsx";
import ProfilePage from "./Views/ProfilePage.jsx";
import SearchPage from "./Views/SearchPage.jsx";
import ProtectedRoute from "./customComponents/Protection/ProtectedRoute.jsx";
import SignIn from "./Views/SignIn.jsx";
import SignUp from "./Views/SignUp.jsx";

function App() {
  return (
    <div>
      <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/welcome" element={<LandingPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />

            {/* Protected Routes */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/goal-selection"
              element={
                <ProtectedRoute>
                  <GoalSelection />
                </ProtectedRoute>
              }
            />
            <Route
              path="/activity-level"
              element={
                <ProtectedRoute>
                  <ActivityLevel />
                </ProtectedRoute>
              }
            />
            <Route
              path="/customize-goal"
              element={
                <ProtectedRoute>
                  <CustomizeGoal />
                </ProtectedRoute>
              }
            />
            <Route
              path="/plan"
              element={
                <ProtectedRoute>
                  <PlanPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/progress"
              element={
                <ProtectedRoute>
                  <ProgressPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/search"
              element={
                <ProtectedRoute>
                  <SearchPage />
                </ProtectedRoute>
              }
            />

            {/* Fallback route */}
            <Route path="*" element={<SignIn />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
