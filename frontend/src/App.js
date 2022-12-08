import React from "react";
import axios from "axios";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import TrainerClassesPage from "./pages/TrainerClassesPage";

axios.defaults.baseURL = "http://localhost:3000";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/trainerclasses"
            element={<TrainerClassesPage />}
          ></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
