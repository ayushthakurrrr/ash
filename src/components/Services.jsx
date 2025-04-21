import React from "react";
import "../css/services.css";

const services = [
    {
        title: "branding and identity",
        icon: "/images/branding-icon.png",
    },
    {
        title: "website design and development",
        icon: "/images/website-design-icon.png",
    },
    {
        title: "graphic design and visuals",
        icon: "/images/graphic-design-icon.png",
    },
    {
        title: "social media strategy and content",
        icon: "/images/social-media-icon.png",
    },
    {
        title: "digital marketing",
        icon: "/images/social-media-icon.png",
    },
    {
        title: "automation & integration",
        icon: "/images/automation-icon.png",
    },
];

const Services = () => {
    return (
        <section className="services-section">
            <h2 className="services-title">Our services.</h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="services-card">
                        <img
                            src={service.icon}
                            alt={service.title}
                            className="services-icon"
                        />
                        <p className="services-text">{service.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
