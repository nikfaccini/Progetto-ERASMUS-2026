import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLogged = localStorage.getItem("isLogged");
  return isLogged ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
