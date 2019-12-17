import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <a href="http://localhost:3000" className="App-link">
          TeamWork
        </a>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </nav>
      <header className="App-header">
        <h1>Let's Connect as We Work Together</h1>
        <p>- Post Gifs, Articles, Comments and more...</p>
        <Link to="/login">
          <button>Get Started</button>
        </Link>
      </header>
    </div>
  );
}

export default App;
