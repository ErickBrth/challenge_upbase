import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PersonIcon from '@mui/icons-material/Person';

function BottomNavigationBar() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleNavigation = (newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/calendar');
        break;
      case 2:
        navigate('/chat');
        break;
      case 3:
        navigate('/profile');
        break;
      default:
        break;
    }
  };

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => handleNavigation(newValue)}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: '#8000FF',
        color: '#fff',
      }}
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
        style={{ color: value === 0 ? '#FFF' : '#CCC' }}
      />
      <BottomNavigationAction
        label="Calendar"
        icon={<CalendarTodayIcon />}
        style={{ color: value === 1 ? '#FFF' : '#CCC' }}
      />
      <BottomNavigationAction
        label="Chat"
        icon={<ChatBubbleIcon />}
        style={{ color: value === 2 ? '#FFF' : '#CCC' }}
      />
      <BottomNavigationAction
        label="Profile"
        icon={<PersonIcon />}
        style={{ color: value === 3 ? '#FFF' : '#CCC' }}
      />
    </BottomNavigation>
  );
}

export default BottomNavigationBar;
