import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw" }}>
      <div style={{ width: "300px", padding: "20px", border: "1px solid #ddd", borderRadius: "5px" }}>
        <h2>Sign Up</h2>
        <label style={{ display: "block", marginBottom: "5px", textAlign: "left" }}>Full Name</label>
        <input type="text" placeholder="Enter Full Name" style={{ width: "100%", padding: "8px", marginBottom: "10px", background: "#ffffff" , color:"#000" }} />
        <label style={{ display: "block", marginBottom: "5px", textAlign: "left" }}>Email</label>
        <input type="email" placeholder="Enter Email" style={{ width: "100%", padding: "8px", marginBottom: "10px", background: "#ffffff" , color:"#000" }} />
        <label style={{ display: "block", marginBottom: "5px", textAlign: "left" }}>Username</label>
        <input type="text" placeholder="Enter Username" style={{ width: "100%", padding: "8px", marginBottom: "10px", background: "#ffffff" , color:"#000" }} />
        <label style={{ display: "block", marginBottom: "5px", textAlign: "left" }}>Create Password</label>
        <input type="password" placeholder="Enter Password" style={{ width: "100%", padding: "8px", marginBottom: "10px", background: "#ffffff" , color:"#000" }} />

        {/* Profession (Radio Buttons) */}
        <label style={{ display: "block", marginBottom: "5px", textAlign: "left" }}>Profession</label>
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <label><input type="radio" name="profession" value="student" /> Student</label>
          <label><input type="radio" name="profession" value="working" /> Working</label>
          <label><input type="radio" name="profession" value="others" /> Others</label>
        </div>

        <button onClick={() => navigate("/dashboard")} style={{ width: "100%", padding: "10px", marginTop: "10px" }}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
