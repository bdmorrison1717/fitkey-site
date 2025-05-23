import React, { useState } from 'react';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ email: '', type: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="App">
      <header className="hero">
        <div className="hero-overlay">
          <img src="/hero-image.jpg" alt="FitKey QR Scan" className="hero-image" />
          <div className="overlay-content">
            <img src="/fitkey-logo.png" alt="FitKey Logo" className="logo-image" />
            <h1 className="headline">Wellness, Wherever You Go.</h1>
            <p className="subtext">Get instant access to gyms, spas, and wellness spaces — no memberships, no hassle.</p>
            <div className="cta-buttons">
              <button className="cta download">Download the App</button>
              <button className="cta partner">Become a Partner</button>
            </div>
          </div>
        </div>
      </header>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <img src="/icon-search.png" alt="Search Icon" />
            <p>Search Nearby Wellness Spots</p>
          </div>
          <div className="step">
            <img src="/icon-book.png" alt="Book Icon" />
            <p>Book with a Tap</p>
          </div>
          <div className="step">
            <img src="/icon-scan.png" alt="Scan Icon" />
            <p>Scan & Enter Instantly</p>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="column">
          <h3>Benefits:</h3>
          <ul>
            <li>Access fitness and spa facilities in seconds</li>
            <li>No contracts or paper work</li>
            <li>Explore wellness on your terms</li>
          </ul>
        </div>
        <div className="column">
          <h3>For Gyms & Spas:</h3>
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

export default App;
