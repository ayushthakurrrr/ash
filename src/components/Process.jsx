// Example: Process.jsx
import React from "react";
import "../CSS/process.css";

function Process() {
  return (
    <section className={"prc-container"}>
      <h1 className={"heading"}>Our process.</h1>
      <ul className="phases-list">
        <li className={"phase"}>
          <h3>Phase 1 – Research & Discovery</h3>
          <p>We understand the client's business, pain points, goals, and target audience.</p>
        </li>
        <li className="phase">
          <h3>Phase 2 – Strategy & Direction</h3>
          <p>We prepare a roadmap: design, content, and development goals in phases.</p>
        </li>
        <li className="phase">
          <h3>Phase 3 – Design & Build</h3>
          <p>Visual identity, web presence, and content come together — in sprints.</p>
        </li>
        <li className="phase">
          <h3>Phase 4 – Launch & Optimize</h3>
          <p>We test, deliver, and optimize after launch using client feedback + data.</p>
        </li>
      </ul>
    </section>
  );
}

export default Process;
