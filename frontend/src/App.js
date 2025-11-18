import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Explicitly added .js extension to resolve imports
import Home from "./Home/Home.js";
import Customization from "./Customization/Customize.js";
import CreateAccountPage from "./CreateAccountPage/Account.js";
import LoginPage from "./LoginPage/Login.js";
  



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customize" element={<Customization />} />
        
        {/* Sign Up Route */}
        <Route path="/signup" element={<CreateAccountPage />} /> 
        <Route path="/login" element={<LoginPage />} />
        
        
      
        
      </Routes>
    </Router>
  );
}

export default App;   