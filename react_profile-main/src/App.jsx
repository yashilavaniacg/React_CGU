import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Navbar />

      <div className="app">
        <section id="home" className="section">
          <h1>Hi, I'm Yashi Lavania</h1>
          <p>React Developer | Computer Science Student</p>
        </section>

        <section id="profile" className="section">
          <h2>Profile</h2>

          <ProfileCard
            name="Yashi Lavania"
            bio="React Developer and Computer Science Student"
            status="Open to Opportunities"
          />
        </section>

        <section id="contact" className="section">
          <h2>Contact Me</h2>

          <input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          {inputValue && (
            <p>
              Preview: <span>{inputValue}</span>
            </p>
          )}
        </section>
      </div>
    </>
  );
}

export default App;