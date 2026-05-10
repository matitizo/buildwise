import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token =
    localStorage.getItem("buildwise_token") ||
    localStorage.getItem("token") ||
    localStorage.getItem("buildwiseUser") ||
    localStorage.getItem("buildwise_user");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}