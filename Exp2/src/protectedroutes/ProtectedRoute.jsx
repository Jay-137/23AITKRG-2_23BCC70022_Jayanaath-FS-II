import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import Login from "../pages/Login";
const ProtectedRoute=({children})=>{
  const {isLoggedIn}=useAuth();
  if(isLoggedIn)
    return children;
  return <Navigate to="/login" replace/>
}
export default ProtectedRoute;