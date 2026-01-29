import { Link } from "react-router-dom";


const Header=()=>{
  return(
    <header style={{padding:'1rem',backgroundColor:'green',color:'white'}}>
      <h1>Eco-Track</h1>
      <p>Carborn Footprint Tracker</p>
      <nav>
        <Link to="/" style={{color:"white"}}>Dashboard</Link>{" | "}
        <Link to="/logs" style={{color:"white"}}>Logs</Link>{" | "}
        <Link to="/login" style={{color:"white"}}>Login</Link>
      </nav>
    </header>
  )
}
export default Header;