import React from "react";
import "./App.css";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
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
