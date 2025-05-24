import React, { useState } from 'react';
import './App.css';

function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="waitlist-form">
      {submitted ? (
        <div className="confirmation">
          <h3>Thank you!</h3>
          <p>We'll be in touch with you soon.</p>
        </div>
      ) : (
        <>
          <h3>Join Our Waiting List</h3>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input 
              type="email" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <label>You are a:</label>
            <select 
              required 
              value={userType} 
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="">Select one</option>
              <option value="customer">Customer</option>
              <option value="owner">Owner of Spa/Gym/Health Facility</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
}

export default WaitlistPage;