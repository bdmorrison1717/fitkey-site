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
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const data = new FormData(form);
                fetch(form.action, {
                  method: form.method,
                  body: data,
                  headers: {
                    Accept: 'application/json',
                  },
                }).then((response) => {
                  if (response.ok) {
                    setSubmitted(true);
                  } else {
                    alert('There was a problem submitting the form.');
                  }
                });
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
              />

              <label>
                I'm interested in:
                <select name="userType" required>
                  <option value="">--Please choose an option--</option>
                  <option value="Member">Becoming a Member</option>
                  <option value="Gym Partner">Becoming a Gym Partner</option>
                </select>
              </label>

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