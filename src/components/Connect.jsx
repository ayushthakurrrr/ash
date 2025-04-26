import React from "react";
import "../css/connect.css"

function Connect() {
  return (
    <section className="connect-section" id="contact">
      <div className="connect-text">
        <h1>Connect us.</h1>
        <div className="connect-roles">
          <span>As client.</span>
          <span>As employee.</span>
        </div>
        <a href="mailto:ashservices.space@outlook.com">
          <button className="connectUs-button">Click Here!</button>
        </a>
      </div>
    </section>

  );
}

export default Connect;
