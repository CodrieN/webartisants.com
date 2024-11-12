import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Création d'Expériences Digitales pour professionnels</h1>
        <p className="tagline">
          Nous aidons les artisans et les petites entreprises locales à faire
          leurs premiers pas dans le monde digital
        </p>
        {/* Use Link for internal navigation */}
        <Link to="/contact" className="cta-button">
          Commencez votre aventure digitale
        </Link>
      </div>
    </section>
  );
};

export default Hero;
