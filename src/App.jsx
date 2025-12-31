import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import LandingPage from "./Pages/LandingPage.jsx";
import GoalSelection from "./Pages/GoalSelection.jsx";
import ActivityLevel from "./Pages/ActivityLevel.jsx";
import CustomizeGoal from "./Pages/CustomizeGoal.jsx";
import PlanPage from "./Pages/PlanPage.jsx";
import ProgressPage from "./Pages/ProgressPage.jsx";
import HomePage from "./Pages/HomePage.jsx";
import ProfilePage from "./Pages/ProfilePage.jsx";
import SearchPage from "./Pages/SearchPage.jsx";
import ProtectedRoute from "./customComponents/Protection/ProtectedRoute.jsx";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";

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
