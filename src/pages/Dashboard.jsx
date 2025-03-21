import React, { useState } from "react";

const Dashboard = () => {
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);

  // Create Folder
  const handleCreateFolder = () => {
    const folderName = prompt("Enter folder name:");
    if (folderName) {
      setFolders([...folders, folderName]);
    }
  };

  // Create File
  const handleCreateFile = () => {
    const fileName = prompt("Enter file name:");
    if (fileName) {
      setFiles([...files, fileName]);
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
      {/* Left Sidebar */}
      <div style={{ width: "250px", background: "#afe9ff", padding: "20px" }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src="/profile.jpg"
            alt="Profile"
            style={{ width: "80px", height: "80px", borderRadius: "50%" }}
          />
          <h3>User Name</h3>
        </div>
        <button onClick={handleCreateFolder} style={{ width: "100%", marginBottom: "10px" }}>
          + Create Folder
        </button>
        {/* Display Created Folders */}
        <ul>
          {folders.map((folder, index) => (
            <li key={index} style={{ background: "#f1f1f1", padding: "5px", margin: "5px 0" }}>
              📁 {folder}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        <input
          type="text"
          placeholder="Search folders or files..."
          style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
        />
        
        {/* Create File Button */}
        <button onClick={handleCreateFile} style={{ marginRight: "10px" }}>
          + Create File
        </button>

        <button>📤 Upload File</button>

        {/* Display Created Files */}
        <ul style={{ marginTop: "20px" }}>
          {files.map((file, index) => (
            <li key={index} style={{ background: "#f9f9f9", padding: "5px", margin: "5px 0" }}>
              📄 {file}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
