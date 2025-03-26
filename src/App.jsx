import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import LandingPage from "./pages/LandingPage.jsx";
import GoalSelection from "./pages/GoalSelection.jsx";
import ActivityLevel from "./pages/ActivityLevel.jsx";
import CustomizeGoal from "./pages/CustomizeGoal.jsx";
import PlanPage from "./pages/PlanPage.jsx";
import ProgressPage from "./pages/ProgressPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./customComponents/Protection/ProtectedRoute.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";

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
