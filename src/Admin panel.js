import React, { useState, useEffect } from "react";
import axios from "axios";

function AdminPanel() {
  const [message, setMessage] = useState("");
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    axios.get("https://hostell-backend.onrender.com/complaints").then((res) => {
      setComplaints(res.data);
    });
  }, []);

  const postUpdate = () => {
    axios.post("https://hostell-backend.onrender.com/updates", { message }).then(() => {
      alert("Update posted!");
      setMessage("");
    });
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Post an update..."
      />
      <button onClick={postUpdate}>Post</button>

      <h3>Student Complaints</h3>
      <ul>
        {complaints.map((c, i) => (
          <li key={i}>{c.complaint}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;
