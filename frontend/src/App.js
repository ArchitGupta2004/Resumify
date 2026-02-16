import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Home/Home.js";
import Customization from "./Customization/Customize.js";
import CreateAccountPage from "./CreateAccountPage/Account.js";
import LoginPage from "./LoginPage/Login.js";
import TemplatePage from "./TemplatePage/TemplatePage.js";
import Editor from "./Editor/editor.js";

// Common Components
import Footer from "./components/Footer.js";

function App() {
  return (
    <Router>
      {/* All Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customize" element={<Customization />} />
        <Route path="/templates" element={<TemplatePage />} />
        <Route path="/editor" element={<Editor />} />

        {/* Auth */}
        <Route path="/signup" element={<CreateAccountPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      {/* 🔥 Footer will appear on every page */}
      <Footer />
    </Router>
  );
}

export default App;
