import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw" }}>
      <div style={{ width: "300px", padding: "20px", border: "1px solid #ddd", borderRadius: "5px" }}>
        <h2>Login</h2>
        
        <label style={{ display: "block", marginBottom: "5px", textAlign: "left" }}>Username</label>
        <input type="text" placeholder="Enter Username" style={{ width: "100%", padding: "8px", marginBottom: "10px", background: "#ffffff", color:"#000" }} />
        
        <label style={{ display: "block", marginBottom: "5px", textAlign: "left" }}>Password</label>
        <input type="password" placeholder="Enter Password" style={{ width: "100%", padding: "8px", marginBottom: "10px", background: "#ffffff", color:"#000" }} />
        
        <button onClick={() => navigate("/dashboard")} style={{ width: "100%", padding: "10px", marginTop: "10px" }}>
          Sign In
        </button>

        {/* Signup Link */}
        <p style={{ textAlign: "center", marginTop: "10px" }}>
          Don't have an account?  
          <span 
            onClick={() => navigate("/signup")} 
            style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
