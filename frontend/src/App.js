import React, { useState } from "react";
import axios from "axios";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

axios.defaults.baseURL = "http://localhost:3000";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
