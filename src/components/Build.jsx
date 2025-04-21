// Example: Build.jsx
// import React from "react";

// function Build() {
//   return (
//     <section >
//       <h1>Build Section</h1>
//     </section>
//   );
// }

// export default Build;

// BuildReal.js
import React from "react";
import "./build.css";
<style>
{/* @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap'); */}
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&family=Outfit:wght@100..900&display=swap');
</style>

function Build() {
  return (
    <section className="build-real-section">
      <h2 className="build-real-text">Let’s build<br />something<br /><span>REAL.</span></h2>
    </section>
  );
}

export default Build;
