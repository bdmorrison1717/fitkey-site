import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function LandingPage({ onShowForm }) {
  return (
    <div className="App">
      <header className="hero">
        <img src="/hero-image.jpg" alt="FitKey QR Scan" className="hero-image" style={{ objectPosition: 'top' }} />
        <div className="hero-overlay">
          <img src="/fitkey-logo.png" alt="FitKey Logo" className="logo-top" style={{ height: '180px', margin: '0 auto', display: 'block' }} />
          <div className="hero-text">
            <h1 className="headline">Wellness, Wherever You Go.</h1>
            <p className="subtext">Get instant access to gyms, spas, and wellness spaces — no memberships, no hassle.</p>
            <div className="cta-buttons">
              <Link to="/join" className="cta download">Become a Member</Link>
              <Link to="/join" className="cta partner">Become a Gym Partner</Link>
            </div>
          </div>
        </div>
      </header>

      <section className="how-it-works">
        <h2>How It Works for Members</h2>
        <div className="steps">
          <div className="step">
            <img src="/icon-create account.png" alt="Create Account Icon" />
            <p>Create a FitKey Account</p>
          </div>
          <div className="step">
            <img src="/icon-search.png" alt="Search Icon" />
            <p>Search for Nearby Locations</p>
          </div>
          <div className="step">
            <img src="/icon-book.png" alt="Book Icon" />
            <p>Tap to Book</p>
          </div>
          <div className="step">
            <img src="/icon-scan.png" alt="Scan Icon" />
            <p>Scan QR Code for Immediate Access</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
  <h2>How It Works for Gym Partners</h2>
  <div className="steps">
    <div className="step">
      <img src="/icon-signup.png" alt="Sign Up Icon" />
      <p>Sign Up with FitKey</p>
    </div>
    <div className="step">
      <img src="/icon-set price.png" alt="Pricing Icon" />
      <p>Set Your FitKey Member Price</p>
    </div>
    <div className="step">
      <img src="/icon-scanner.png" alt="Scanner Icon" />
      <p>Get Physical Scanner</p>
    </div>
    <div className="step">
      <img src="/icon-growth.png" alt="Growth Icon" />
      <p>Increase Customers & Revenue</p>
    </div>
  </div>
</section>

      <section className="benefits">
        <div className="column">
          <h3>Member Benefits:</h3>
          <ul>
            <li>Access fitness and spa facilities in seconds</li>
            <li>No contracts or paper work</li>
            <li>Explore wellness on your terms</li>
          </ul>
        </div>
        <div className="column">
          <h3>Gym Partner Benefits:</h3>
          <ul>
            <li>New customers with zero marketing cost</li>
            <li>QR code check-in + digital waivers</li>
            <li>Fast automated payouts</li>
          </ul>
        </div>
      </section>

      <section className="app-preview">
        <img src="/Iphone.png" alt="FitKey App Preview" className="iphone-image" />
      </section>

      <footer className="footer-cta">
        Ready to make wellness borderless?
      </footer>
    </div>
  );
}

function JoinPage() {
  const [formData, setFormData] = useState({ email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="waitlist-form">
      {!submitted ? (
        <>
          <h3>Join Our Waiting List</h3>
          <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </>
      ) : (
        <div className="confirmation">
          <p>Thank you! We'll be in touch soon.</p>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
    </Router>
  );
}

export default App;
