import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar.jsx";
import React from "react";
import SignUp from "./components/auth/SignUp.jsx";
import Login from "./components/auth/Login.jsx";
import Home from "./components/pages/Home.jsx";
import JobSearchLayout from "./components/pages/JobSearchLayout.jsx"
import { ThemeProvider } from "./context/ThemeContext.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light text-dark">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="jobs" element={<JobSearchLayout />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;