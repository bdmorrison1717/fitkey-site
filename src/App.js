import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import WaitlistPage from './WaitlistPage';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="hero">
        <img src="hero-image.jpg" alt="Gym background" className="hero-image" />
        <div className="hero-overlay">
          <div className="logo-container">
            <img src="fitkey-logo-app-style.png" alt="FitKey Logo" className="logo-image" />
          </div>
          <h1 className="headline">Wellness, Wherever You Go.</h1>
          <p className="subtext">
            Get instant access to gyms, spas, and wellness spaces — no memberships, no hassle.
          </p>
          <div className="cta-buttons">
            <button className="cta" onClick={() => navigate('/waitlist')}>Become a Member</button>
            <button className="cta" onClick={() => navigate('/waitlist')}>Become a Gym Partner</button>
          </div>
        </div>
      </div>

      <div className="how-it-works">
        <h2>How It Works for Members</h2>
        <div className="steps steps-grid">
          <div className="step">
            <img src="icon-create account.png" alt="Create Account" />
            <p>Create an Account</p>
          </div>
          <div className="step">
            <img src="icon-search.png" alt="Search" />
            <p>Search for Nearby Locations</p>
          </div>
          <div className="step">
            <img src="icon-book.png" alt="Book" />
            <p>Tap to Book</p>
          </div>
          <div className="step">
            <img src="icon-scan.png" alt="Scan" />
            <p>Scan QR Code for Immediate Access</p>
          </div>
        </div>
      </div>

      <div className="how-it-works">
        <h2>How It Works for Gym Partners</h2>
        <div className="steps steps-grid">
          <div className="step">
            <img src="icon-signup.png" alt="Sign up" />
            <p>Sign up for FitKey</p>
          </div>
          <div className="step">
            <img src="icon-set-price.png" alt="Set Price" />
            <p>Set Your FitKey Member Price</p>
          </div>
          <div className="step">
            <img src="icon-scanner.png" alt="Scanner" />
            <p>Get Physical Scanner</p>
          </div>
          <div className="step">
            <img src="icon-growth.png" alt="Growth" />
            <p>Increase Customers & Revenue</p>
          </div>
        </div>
      </div>

      <div className="benefits-section">
        <div className="benefits-column">
          <h3>Member Benefits</h3>
          <ul>
            <li>Access fitness and spa facilities in seconds</li>
            <li>No contracts or paperwork</li>
            <li>Explore wellness on your terms</li>
          </ul>
        </div>
        <div className="benefits-column">
          <h3>Gym Partner Benefits</h3>
          <ul>
            <li>New customers with zero marketing cost</li>
            <li>QR code check-in + digital waivers</li>
            <li>Fast automated payouts</li>
          </ul>
        </div>
      </div>

      <div className="app-preview">
        <img src="Iphone.png" alt="App Preview" className="iphone-image" />
      </div>

      <div className="footer-cta">
        Ready to make wellness borderless?
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
      </Routes>
    </Router>
  );
}

export default App;