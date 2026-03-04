import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import EasyGamePage from "./pages/EasyGamePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NormalGamePage from "./pages/NormalGamePage";
import RegisterPage from "./pages/RegisterPage";
import RulesPage from "./pages/RulesPage";
import ScoresPage from "./pages/ScoresPage";
import SelectionPage from "./pages/SelectionPage";

function App() {
  return (
    <div className="app-shell">
      <NavBar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<SelectionPage />} />
          <Route path="/games/easy" element={<EasyGamePage />} />
          <Route path="/games/normal" element={<NormalGamePage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/scores" element={<ScoresPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
