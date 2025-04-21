import React from 'react';
import '../CSS/home.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="logo-text">
        <h1 className="text-logo">
          <span className="text-fill">ash.</span>
        </h1>
        <p className="tagline">redefining the aspects of your digital requirements...</p>
      </div>
      <button className="connect-button">
  Connect<br />Us
</button>
    </div>
  );
};

export default HomePage;
