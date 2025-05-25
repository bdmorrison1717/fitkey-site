import React, { useState } from 'react';
import './App.css';

function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="waitlist-container">
      <div className="waitlist-box">
        {!submitted ? (
          <>
            <h2>Join Our Waiting List</h2>
            <p>Enter your email below to be the first to get access:</p>
            <form
              action="https://formspree.io/f/meogbgnj"
              method="POST"
              onSubmit={() => setSubmitted(true)}
            >
              <input
                type="email"
                name="email"
                placeholder="Your email"
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