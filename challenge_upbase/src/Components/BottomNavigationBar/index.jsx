import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ViewListIcon from "@mui/icons-material/ViewList";
import ChatIcon from "@mui/icons-material/Chat";
import PersonIcon from "@mui/icons-material/Person";

const BottomNavigationBar = () => {
  const [activeTab, setActiveTab] = useState("/"); // Rastreia a aba ativa
  const navigate = useNavigate(); // Hook do react-router-dom para navegação

  const handleNavigation = (newValue) => {
    setActiveTab(newValue); // Define a aba ativa
    navigate(newValue); // Navega para a rota correspondente
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
        boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <BottomNavigationAction
        value="/"
        icon={<HomeIcon fontSize="large" />}
        sx={{
          color: activeTab === "/" ? "#ffffff" : "#cccccc",
          "&.Mui-selected": { color: "#ffffff" },
        }}
      />
      <BottomNavigationAction
        value="/calendar"
        icon={<CalendarTodayIcon fontSize="large" />}
        sx={{
          color: activeTab === "/calendar" ? "#ffffff" : "#cccccc",
          "&.Mui-selected": { color: "#ffffff" },
        }}
      />
      <BottomNavigationAction
        value="/table"
        icon={<ViewListIcon fontSize="large" />}
        sx={{
          color: activeTab === "/table" ? "#ffffff" : "#cccccc",
          "&.Mui-selected": { color: "#ffffff" },
        }}
      />
      <BottomNavigationAction
        value="/chat"
        icon={<ChatIcon fontSize="large" />}
        sx={{
          color: activeTab === "/chat" ? "#ffffff" : "#cccccc",
          "&.Mui-selected": { color: "#ffffff" },
        }}
      />
      <BottomNavigationAction
        value="/profile"
        icon={<PersonIcon fontSize="large" />}
        sx={{
          color: activeTab === "/profile" ? "#ffffff" : "#cccccc",
          "&.Mui-selected": { color: "#ffffff" },
        }}
      />
    </BottomNavigation>
  );
};

export default BottomNavigationBar;
