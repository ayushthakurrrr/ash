// Example: Home.jsx
// import React from "react";

// function Home() {
//   return (
//     <section >
//       <h1>Philosophy Section</h1>
//     </section>
//   );
// }

// export default Home;

// Philosophy.js
import React from "react";
import "../CSS/philosophy.css";
<style>
{/* @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap'); */}
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&family=Outfit:wght@100..900&display=swap');
</style>
function Philosophy() {
  return (
    <section className="philosophy-section">
      <div className="container">
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
      </div>
    </section>
  );
}

export default Philosophy;
// export default Home;

