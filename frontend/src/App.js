import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Our Multi-Tier Application</h1>
          <p className="hero-description">
            Experience seamless integration between frontend, backend, and database with our modern architecture.
          </p>
          <a href="#features" className="cta-button">Explore Features</a>
        </div>
      </header>

      <section id="features" className="features">
        <h2 className="section-title">Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Frontend</h3>
            <p>Built with React for a fast, responsive user experience.</p>
          </div>
          <div className="feature-card">
            <h3>Backend</h3>
            <p>Powered by Spring Boot for robust API development.</p>
          </div>
          <div className="feature-card">
            <h3>Database</h3>
            <p>Uses MySQL for reliable and scalable data storage.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Multi-Tier Application. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
