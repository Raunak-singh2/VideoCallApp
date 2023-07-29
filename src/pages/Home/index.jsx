import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const [room, setRoom] = useState("");
  const nagivate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    nagivate(`/room/${room}`);
  };

  return (
    <form onSubmit={handleFormSubmit} style={{ textAlign: "center", marginTop: "20%" }}>
      <lable style={{ fontSize: 30, marginTop: -40 }}>Enter room code</lable>
      <br />
      <input
        type="text"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        style={{ padding: 10, marginRight: 5 }}
      />
      <button
        type="submit"
        style={{ padding: 10, backgroundColor: "darkgreen", color: "#fff" }}
      >
        Get you Call
      </button>
    </form>
  );
};
export default HomePage;
