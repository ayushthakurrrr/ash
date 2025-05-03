// import React from "react";
// import "../css/services.css";

// const services = [
//     {
//         title: "branding and identity",
//         icon: "/images/branding-icon.png",
//     },
//     {
//         title: "website design and development",
//         icon: "/images/website-design-icon.png",
//     },
//     {
//         title: "graphic design and visuals",
//         icon: "/images/graphic-design-icon.png",
//     },
//     {
//         title: "social media strategy and content",
//         icon: "/images/social-media-icon.png",
//     },
//     {
//         title: "digital marketing",
//         icon: "/images/social-media-icon.png",
//     },
//     {
//         title: "automation & integration",
//         icon: "/images/automation-icon.png",
//     },
// ];

// const Services = () => {
//     return (
//         <section className="services-section">
//             <h2 className="services-title">Our services.</h2>
//             <div className="services-grid">
//                 {services.map((service, index) => (
//                     <div key={index} className="services-card">
//                         <img
//                             src={service.icon}
//                             alt={service.title}
//                             className="services-icon"
//                         />
//                         <p className="services-text">{service.title}</p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Services;


import React from "react";
import "../css/services.css";
// import DevIcon from "/images/settingServise.png"; // replace with your image path
// import BulbIcon from "/images/bulbServise.png"; // replace with your image path

function Services() {
  return (
    <div className="whole-Servise-Page">
    <div className="services-page">
      <h1 className="service-main-heading">Our services.</h1>

      <div className="service-columns">
        <div className="service-block left">
          <h2 className="title">Development Services.</h2>
          <div className="Service-block-alignment">
          <p className="desc">
            At ASH, we craft professional websites, build brand identities, design creative assets, and set up smart customer platforms. From business websites to social media creatives and online booking systems, we develop everything your brand needs to grow, connect with customers, and stand out digitally with style, functionality, and impact.
          </p>
          <img src=" /images/SS.png" alt="Development Icon" className="icon" />
          </div>
        </div>

        <div className="service-block right">
          <img src="/images/bulbServise.png" alt="Consultancy Icon" className="icon cba" />
          <h2 className="title">Consultancy Services.</h2>
          <div className="Service-block-alignment">
          <img src="/images/bulbServise.png" alt="Consultancy Icon" className="icon abc"  />
          <p className="desc">
            ASH offers strategic consulting to help businesses grow smarter. We advise on digital expansion, customer engagement systems, marketing strategies, and team scaling. From guiding startups to helping service providers build strong foundations, we partner with you to plan, optimize, and unlock sustainable business growth — online and offline.
          </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Services;
