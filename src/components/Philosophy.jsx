import React from "react";
import "../css/philosophy.css";

function Philosophy() {
  return (
    <section className="philosophy-section">
        <h1 className="philosophy-title">Our philosophy.</h1>
        <ul className="philosophy-list">
          <li>
            <strong>People over projects</strong> – We care about the people behind the business.
          </li>
          <li>
            <strong>Intent over trends</strong> – Aesthetics are cool, but purpose comes first.
          </li>
          <li>
            <strong>Collaboration over hierarchy</strong> – Everyone’s voice matters.
          </li>
          <li>
            <strong>Real impact over vanity metrics</strong> – Likes don’t always mean growth.
          </li>
        </ul>
    </section>
  );
}

export default Philosophy;

