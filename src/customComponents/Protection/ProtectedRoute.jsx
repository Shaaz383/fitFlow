import { Navigate } from "react-router-dom";

import { useAuth } from "@/context/AuthContext";
import LoadingSpinner from "../LoadinSpinner";

export default function ProtectedRoute({ children }) {
  const { currentUser, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!currentUser) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}