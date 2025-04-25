import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [updates, setUpdates] = useState([]);
  const [complaint, setComplaint] = useState("");

  useEffect(() => {
    axios.get("https://hostell-backend.onrender.com/updates").then((res) => {
      setUpdates(res.data);
    });
  }, []);

  const submitComplaint = () => {
    axios.post("https://hostell-backend.onrender.com/complaints", { complaint }).then(() => {
      alert("Complaint submitted!");
      setComplaint("");
    });
  };

  return (
    <div>
      <h2>Hostel Updates</h2>
      <ul>
        {updates.map((u, i) => (
          <li key={i}>{u.message}</li>
        ))}
      </ul>
      <textarea
        value={complaint}
        onChange={(e) => setComplaint(e.target.value)}
        placeholder="Write your complaint..."
      />
      <button onClick={submitComplaint}>Submit</button>
    </div>
  );
}

export default Dashboard;
