import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";


import LandingPage from "./pages/LandingPage";
import GoalSelection from "./pages/GoalSelection";
import ActivityLevel from "./pages/ActivityLevel";
import CustomizeGoal from "./pages/CustomizeGoal";
import PlanPage from "./pages/PlanPage";
import ProgressPage from "./pages/ProgressPage";
import HomePage from "./pages/Homepage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./customComponents/Protection/ProtectedRoute";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
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
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
