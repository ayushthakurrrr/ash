// Example: Connect.jsx
// import React from "react";

// function Connect() {
//   return (
//     <section >
//       <h1>Connect Section</h1>
//     </section>
//   );
// }

// export default Connect;

// Connect.js
import React from "react";
import "./connect.css";
<style>
{/* @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap'); */}
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&family=Outfit:wght@100..900&display=swap');
</style>

function Connect() {
  return (
    <section className="connect-section">
      <div className="connect-text">
        <p>Connect us.</p>
        <div className="connect-roles">
          <span>As client.</span>
          <span>As employee.</span>
        </div>
        <button className="connect-button">Click Here!</button>
      </div>
    </section>
  );
}

export default Connect;
