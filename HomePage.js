// src/HomePage.js

import React from 'react';
import './HomePage.css'; // Optional: for styling

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to My Homepage</h1>
        <p>Your go-to place for all things awesome!</p>
      </header>
      <main className="home-main">
        <section className="home-section">
          <h2>About Us</h2>
          <p>We are a team of passionate developers working to make the web a better place.</p>
        </section>
        <section className="home-section">
          <h2>Services</h2>
          <ul>
            <li>Web Development</li>
            <li>Mobile Development</li>
            <li>UI/UX Design</li>
          </ul>
        </section>
      </main>
      <footer className="home-footer">
        <p>&copy; 2024 My Homepage. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
