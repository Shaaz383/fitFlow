import { useAuth } from "@/context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = () => {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;