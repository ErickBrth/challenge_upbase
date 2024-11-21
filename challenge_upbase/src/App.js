import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import BottomNavigationBar from "./Components/BottomNavigationBar";
import './App.css';
import Table from "./pages/Table";


function App() {
  return (
    <>
      <div style={{ paddingBottom: "60px" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/table" element={<Table />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
      <BottomNavigationBar />
    </>
  );
}

export default App;
