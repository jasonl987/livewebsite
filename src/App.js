import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">Morning Delights</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#recipes">Recipes</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      
      <section className="hero">
        <div className="hero-content">
          <h1>The Perfect Morning</h1>
          <p className="subtitle">Discover the harmony of eggs, hash browns, avocado, and coffee</p>
          <button className="cta-button">Read the Blog</button>
        </div>
      </section>
      
      <section className="featured-post">
        <div className="post-container">
          <div className="post-image">
            <div className="image-placeholder">
              <span>Breakfast Perfection</span>
            </div>
          </div>
          <div className="post-content">
            <div className="post-meta">
              <span className="post-date">March 16, 2025</span>
              <span className="post-category">Breakfast</span>
            </div>
            <h2>Why Eggs with Hash Browns, Avocado, and Coffee is the Ultimate Morning Ritual</h2>
            <p className="post-excerpt">
              There's something magical about the combination of perfectly cooked eggs, crispy hash browns, creamy avocado, and a freshly brewed cup of coffee. This breakfast harmony creates not just a meal, but an experience that sets the tone for your entire day.
            </p>
            <div className="post-highlights">
              <div className="highlight-item">
                <h3>Protein-Packed</h3>
                <p>Eggs provide essential proteins and nutrients to fuel your morning</p>
              </div>
              <div className="highlight-item">
                <h3>Perfect Balance</h3>
                <p>The crispy texture of hash browns complements the creamy avocado</p>
              </div>
              <div className="highlight-item">
                <h3>Energy Boost</h3>
                <p>Coffee adds the perfect finishing touch to energize your day</p>
              </div>
            </div>
            <button className="read-more-button">Continue Reading</button>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Morning Delights Blog. All rights reserved.</p>
          <div className="social-links">
            <a href="https://instagram.com" aria-label="Instagram">Instagram</a>
            <a href="https://twitter.com" aria-label="Twitter">Twitter</a>
            <a href="https://pinterest.com" aria-label="Pinterest">Pinterest</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
