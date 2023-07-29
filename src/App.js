import React from "react";
import { Routes,Route} from "react-router-dom";
import HomePage from "./pages/Home";
import RoomPage from "./pages/Home/Room";
function App() {
  return (
    <div className="App" style={{textAlign:"center"}}>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/room/:roomId" element={<RoomPage />}/>
      </Routes>
    </div>
  );
}

export default App;
