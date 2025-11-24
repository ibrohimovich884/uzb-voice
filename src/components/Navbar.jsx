import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Uzbek TTS</h2>

      <div className="nav-links">
        <Link to="/">🗣 O‘qib berish</Link>
        <Link to="/split">✂ So‘zlarga ajratish</Link>
        <Link to="/chat">💬 AI Chat</Link>
      </div>
    </nav>
  );
}
