import React, { useState } from 'react';
import './App.css';

function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally you would send the email to a server here
    console.log('Email submitted:', email);
    setSubmitted(true);
  };

  return (
    <div className="waitlist-container">
      <div className="waitlist-box">
        {!submitted ? (
          <>
            <h2>Join Our Waiting List</h2>
            <p>Enter your email below to be the first to get access:</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Join</button>
            </form>
          </>
        ) : (
          <div className="confirmation-message">
            <h3>Thank you!</h3>
            <p>You've been added to the waitlist.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default WaitlistPage;