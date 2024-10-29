import React from "react";

const App = () => {
  return (
    <>
      <nav className="nav">
        <a href="https://artisanalweb.studio/" className="logo">
          Studio Web Artisanal
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#testimonials">Témoignages</a>
          <a href="https://artisanalweb.studio/contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Création d'Expériences Digitales pour Artisans</h1>
          <p className="tagline">
            Nous aidons les artisans et les petites entreprises locales à faire
            leurs premiers pas dans le monde digital
          </p>
          <a href="https://artisanalweb.studio/contact" className="cta-button">
            Commencez votre aventure digitale
          </a>
        </div>
      </section>

      <section id="services" className="section services">
        <div className="container">
          <h2>Nos Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <svg
                className="service-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 12h6" />
                <path d="M12 9v6" />
              </svg>
              <h3>Conception de Sites Web</h3>
              <p>
                Sites web sur-mesure qui reflètent votre qualité artisanale et
                votre souci du détail.
              </p>
            </div>

            <div className="service-card">
              <svg
                className="service-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
              <h3>Identité de Marque</h3>
              <p>
                Développez une présence digitale cohérente qui raconte votre
                histoire unique.
              </p>
            </div>

            <div className="service-card">
              <svg
                className="service-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              </svg>
              <h3>Solutions E-Commerce</h3>
              <p>
                Créez votre boutique en ligne pour exposer et vendre vos
                produits artisanaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section portfolio">
        <div className="container">
          <h2>Projets Réalisés</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-overlay">
                <h3>Atelier de Menuiserie</h3>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-overlay">
                <h3>Artiste Céramiste</h3>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-overlay">
                <h3>Boulangerie Artisanale</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="section testimonials">
        <div className="container">
          <h2>Histoires d'Artisans</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>
                "Ils ont parfaitement compris les besoins de mon atelier de
                céramique. Mon site montre enfin tout mon travail."
              </p>
              <h3>- Sarah, Artiste Céramiste</h3>
            </div>
            <div className="testimonial-card">
              <p>
                "Grâce au Studio Web Artisanal, mon atelier de menuiserie a
                atteint des clients que je n'aurais jamais imaginé."
              </p>
              <h3>- James, Maître Menuisier</h3>
            </div>
            <div className="testimonial-card">
              <p>
                "Ils ont rendu le processus si simple et ont créé exactement ce
                que j'imaginais pour mon entreprise de bijoux."
              </p>
              <h3>- Maria, Créatrice de Bijoux</h3>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>
            © 2023 Studio Web Artisanal. Création d'expériences digitales avec
            soin.
          </p>
          <p>
            Contactez-nous :{" "}
            <a
              href="https://artisanalweb.studio/contact"
              style={{ color: "var(--accent)" }}
            >
              Commencez maintenant
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default App;
