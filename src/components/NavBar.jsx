import { Navigate, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="nav-bar">
      <h1>My Application</h1>
      <nav>
        <button onClick={() => {navigate("/home")}}>Home</button>
        <button onClick={() => {navigate("/mpg")}}>Multiplayer Game</button>
      </nav>
    </div>
  );
}

export default NavBar;