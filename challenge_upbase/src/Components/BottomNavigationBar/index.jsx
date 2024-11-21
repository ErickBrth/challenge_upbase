import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ViewListIcon from '@mui/icons-material/ViewList';
import ChatIcon from "@mui/icons-material/Chat";
import PersonIcon from "@mui/icons-material/Person";

const BottomNavigationBar = () => {
  const [activeTab, setActiveTab] = useState("/"); // Rastreia a aba ativa

  const handleNavigation = (value) => {
    setActiveTab(value); // Define a aba ativa
    window.location.href = value; // Navega para a rota correspondente
  };

  return (
    <BottomNavigation
      value={activeTab}
      onChange={(event, newValue) => handleNavigation(newValue)}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "110px",
        backgroundColor: "#8000ff",
        color: "#fff",
        borderTopLeftRadius: "25px",
        borderTopRightRadius: "25px",
      }}
    >
      <BottomNavigationAction
        value="/"
        icon={<HomeIcon fontSize="large" />}
        style={{ color: activeTab === "/" ? "#ffffff" : "#cccccc" }}
      />
      <BottomNavigationAction
        value="/calendar"
        icon={<CalendarTodayIcon fontSize="large" />}
        style={{ color: activeTab === "/calendar" ? "#ffffff" : "#cccccc" }}
      />
      <BottomNavigationAction
        value="/table"
        icon={<ViewListIcon fontSize="large" />}
        style={{ color: activeTab === "/table" ? "#ffffff" : "#cccccc" }}
      />
      <BottomNavigationAction
        value="/chat"
        icon={<ChatIcon fontSize="large" />}
        style={{ color: activeTab === "/chat" ? "#ffffff" : "#cccccc" }}
      />
      <BottomNavigationAction
        value="/profile"
        icon={<PersonIcon fontSize="large" />}
        style={{ color: activeTab === "/profile" ? "#ffffff" : "#cccccc" }}
      />
    </BottomNavigation>
  );
};

export default BottomNavigationBar;
