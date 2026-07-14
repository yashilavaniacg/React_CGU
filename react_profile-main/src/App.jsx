import { useState } from 'react'
import ProfileCard from './components/ProfileCard'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')

  return (
    <>
      <Navbar />

      <div className="app">

        {/* ── Home ─────────────────────────────────────── */}
        <section id="home" className="section home-section">
          <h1 className="home-heading">Hi, I'm Tanisha Sharma</h1>
          <p className="home-sub">
            React Developer &amp; Computer Science Student
          </p>
          <p className="home-desc">
            Passionate about building modern web applications, exploring AI,
            and turning ideas into interactive experiences.
          </p>
          <a href="#profile" className="btn-cta">View Profile</a>
        </section>

        {/* ── Profile ──────────────────────────────────── */}
        <section id="profile" className="section">
          <h2 className="section-title">Profile</h2>
          <ProfileCard
            name="Tanisha Sharma"
            bio="React developer and Computer Science student passionate about web development and AI."
            status="Open to opportunities"
          />
        </section>

        {/* ── Contact ──────────────────────────────────── */}
        <section id="contact" className="section">
          <h2 className="section-title">Contact</h2>
          <div className="contact-card">
            <div className="contact-row">
              <span className="contact-label">Name</span>
              <span className="contact-value">Tanisha Sharma</span>
            </div>
            <div className="contact-row">
              <span className="contact-label">Email</span>
              <span className="contact-value">tanisha@example.com</span>
            </div>
            <div className="contact-row">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">github.com/tanishasharma</span>
            </div>
            <div className="contact-row">
              <span className="contact-label">Location</span>
              <span className="contact-value">India</span>
            </div>

            <div className="message-box">
              <h3 className="message-label">Send a Message</h3>
              <input
                className="message-input"
                type="text"
                placeholder="Type something..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              {inputValue && (
                <p className="message-preview">
                  You typed: <span>{inputValue}</span>
                </p>
              )}
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default App
