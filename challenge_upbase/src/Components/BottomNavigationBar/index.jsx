import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ViewListIcon from '@mui/icons-material/ViewList';
import ChatIcon from "@mui/icons-material/Chat";
import PersonIcon from "@mui/icons-material/Person";

const BottomNavigationBar = () => {
  return (
    <BottomNavigation
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#8000ff",
        color: "#fff",
      }}
    >
      <BottomNavigationAction
        label="Home"
        value="/"
        icon={<HomeIcon />}
        // style={{ color: value === '/' ? '#fff' : '#ddd' }}
      />
      <BottomNavigationAction
        label="Calendar"
        value="/calendar"
        icon={<CalendarTodayIcon />}
        // style={{ color: value === '/calendar' ? '#fff' : '#ddd' }}
      />

      <BottomNavigationAction
        label="Table"
        value="/"
        icon={<ViewListIcon />}
        // style={{ color: value === '/calendar' ? '#fff' : '#ddd' }}
      />

      <BottomNavigationAction
        label="Chat"
        value="/chat"
        icon={<ChatIcon />}
        // style={{ color: value === '/chat' ? '#fff' : '#ddd' }}
      />
      <BottomNavigationAction
        label="Profile"
        value="/profile"
        icon={<PersonIcon />}
        // style={{ color: value === '/profile' ? '#fff' : '#ddd' }}
      />
    </BottomNavigation>
  );
};

export default BottomNavigationBar;
