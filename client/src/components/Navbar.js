import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./Navbar.css";

function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <nav className="navbar">
      <div className="logo">NFT Market</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        {user ? (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li>Welcome, {user.displayName}</li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;