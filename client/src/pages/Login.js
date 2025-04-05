import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { UserContext } from "../context/UserContext";

function Login() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info:", result.user);
      alert(`Logged in as ${result.user.displayName}`);
      navigate("/profile");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      {user ? (
        <div>
          <h2>You are already logged in as {user.displayName}</h2>
        </div>
      ) : (
        <>
          <h2>Login</h2>
          <button onClick={handleLogin}>Sign in with Google</button>
        </>
      )}
    </div>
  );
}

export default Login;
