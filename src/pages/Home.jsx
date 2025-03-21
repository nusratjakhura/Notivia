import React from "react";
import { Container, Button } from "react-bootstrap";

const Home = () => {
  return (
    <div style={{ 
      minHeight: "100vh", 
      width: "100vw", 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center",
      textAlign: "center",
      background: "linear-gradient(to right, #FFDEE9, #B5FFFC)" 
    }}>
      {/* Main Section */}
      <Container style={{ maxWidth: "90%", padding: "20px" }}>
        <h1 style={{ fontSize: "4rem", fontWeight: "bold", color: "#4a4a4a" }}>Welcome to Notivia</h1>
        <p style={{ fontSize: "1.6rem", color: "#303030", maxWidth: "700px", margin: "20px auto" }}>
          The ultimate lecture notes organizer with smart features like OCR-based search, keyword tagging, and cloud storage.
        </p>

        {/* Add Features Section */}
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "30px" }}>
          <div style={{ backgroundColor: "#ffeaef", padding: "20px", borderRadius: "10px", width: "250px", boxShadow: "2px 2px 10px rgba(0,0,0,0.2)" }}>
            <h3> Upload Notes</h3>
            <p>Easily upload PDF, DOCX, or handwritten images.</p>
          </div>

          <div style={{ backgroundColor: "#eaffea", padding: "20px", borderRadius: "10px", width: "250px", boxShadow: "2px 2px 10px rgba(0,0,0,0.2)" }}>
            <h3>Search inside Files</h3>
            <p>Find your notes instantly using powerful OCR search.</p>
          </div>

          <div style={{ backgroundColor: "#e6f2ff", padding: "20px", borderRadius: "10px", width: "250px", boxShadow: "2px 2px 10px rgba(0,0,0,0.2)" }}>
            <h3> Cloud Sync</h3>
            <p>Securely store and access notes from any device.</p>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <Button
          href="/login"
          style={{
            marginTop: "30px",
            backgroundColor: "#ff758c",
            border: "none",
            color: "white",
            fontSize: "1.5rem",
            padding: "12px 30px",
            borderRadius: "10px",
            boxShadow: "2px 2px 15px rgba(0,0,0,0.2)",
            transition: "0.3s ease-in-out",
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#ff4757"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#ff758c"}
        >
          Get Started Now!
        </Button>
      </Container>
    </div>
  );
};

export default Home;
