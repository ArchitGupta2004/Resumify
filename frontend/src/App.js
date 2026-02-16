import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Explicitly added .js extension to resolve imports
import Home from "./Home/Home.js";
import Customization from "./Customization/Customize.js";
import CreateAccountPage from "./CreateAccountPage/Account.js";
import LoginPage from "./LoginPage/Login.js";
import TemplatePage from "./TemplatePage/TemplatePage.js";
import Editor from "./Editor/editor.js";
  



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customize" element={<Customization />} />
        <Route path="/templates" element={<TemplatePage />} />
        <Route path="/editor" element={<Editor />} />
        
        {/* Sign Up Route */}
        <Route path="/signup" element={<CreateAccountPage />} /> 
        <Route path="/login" element={<LoginPage />} />
        
        
      
        
      </Routes>
    </Router>
  );
}

export default App;   