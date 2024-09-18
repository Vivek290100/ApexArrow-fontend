import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar.jsx";
import React from "react";
import SignUp from "./components/auth/SignUp.jsx";
import Login from "./components/auth/Login.jsx";
import Home from "./components/pages/Home.jsx";
import Browse from "./components/pages/Browse.jsx";
import JobSearchLayout from "./components/pages/JobSearchLayout.jsx"
import { ThemeProvider } from "./context/ThemeContext.jsx";
import ProfilePage from "./components/pages/Profile.jsx";
import JobDescription from "./components/pages/JobDescription.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-light text-dark">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="jobs" element={<JobSearchLayout />} />
          <Route path="description/:id" element={<JobDescription />} />
          <Route path="browse" element={<Browse />} />
          <Route path="profile" element={<ProfilePage />} />

        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;