
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Home from './pages/Home'
import BottomNavigationBar from './components/BottomNavigationBar'

function App() {
  return (
    <Router>
      <div style={{ paddingBottom: 60 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<p>calendar</p>} />
          <Route path="/chat" element={<p>Chat</p>} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <BottomNavigationBar />
    </Router>
  );
}

export default App;