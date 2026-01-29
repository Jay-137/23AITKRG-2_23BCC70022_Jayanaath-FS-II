import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
const Login=()=>{
  const {setIsLoggedIn}=useAuth();
  const navigate=useNavigate();
  const handleLogin=()=>{
    setIsLoggedIn(true);
    navigate("/");
  }
  return(
    <div style={{padding:"1rem"}}>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
export default Login;