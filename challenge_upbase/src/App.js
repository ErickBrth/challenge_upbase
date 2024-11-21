import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Table from "./pages/Table";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import BottomNavigationBar from "./Components/BottomNavigationBar";
import { Container } from "./styles";

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/table" element={<Table />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <BottomNavigationBar />
    </Container>
  );
};

export default App;
