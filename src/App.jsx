import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import ReadPage from "./pages/ReadPage";
import SplitPage from "./pages/SplitPage";
import ChatPage from "./pages/ChatPage";
import "./index.css";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <div className="main-wrapper">
          <Routes>
            <Route path="/" element={<ReadPage />} />
            <Route path="/split" element={<SplitPage />} />
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
