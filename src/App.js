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
        <div className="logo">FitKey</div>
        <div className="tagline">Wellness, Wherever You Go.</div>
        <div className="cta-buttons">
          <a href="#">Download the App</a>
          <a href="#">Become a Partner</a>
          <button onClick={() => setShowForm(true)}>Join Our Waiting List</button>
        </div>
      </header>

      {showForm && (
        <section className="section">
          {!submitted ? (
            <form className="waitlist-form" onSubmit={handleSubmit}>
              <h3>Join Our Waiting List</h3>
              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />

              <label>I am a:</label>
              <select name="type" value={formData.type} onChange={handleChange} required>
                <option value="">Select One</option>
                <option value="customer">Customer</option>
                <option value="owner">Owner of a Spa/Gym/Health Facility</option>
              </select>

              <button type="submit">Submit</button>
            </form>
          ) : (
            <div className="confirmation">
              <h3>Thank you!</h3>
              <p>We will get back to you soon!</p>
            </div>
          )}
        </section>
      )}

      <section className="section">
        <h2 className="center">How It Works</h2>
        <div className="features">
          <div className="feature">
            <h3>📍 Search</h3>
            <p>Find nearby gyms, spas, and wellness spaces.</p>
          </div>
          <div className="feature">
            <h3>🗓️ Book</h3>
            <p>Reserve your spot instantly from the app.</p>
          </div>
          <div className="feature">
            <h3>📱 Scan</h3>
            <p>Check in with a tap using QR code access.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="benefits">
          <div>
            <h3>Benefits for Users</h3>
            <ul>
              <li>Access fitness and spa facilities in seconds</li>
              <li>No contracts or paperwork</li>
              <li>Explore wellness on your terms</li>
            </ul>
          </div>
          <div>
            <h3>Benefits for Gyms & Spas</h3>
            <ul>
              <li>New customers with zero marketing cost</li>
              <li>QR code check-in + digital waivers</li>
              <li>Fast automated payouts</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="footer-cta">
        Ready to make wellness borderless?
      </div>
    </div>
  );
}

export default App;
