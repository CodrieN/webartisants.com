import React from "react";

const App = () => {
  return (
    <>
      <nav className="nav">
        <a href="https://artisanalweb.studio/" className="logo">
          CSWeb
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#testimonials">Témoignages</a>
          <a href="#team">Equipe</a>
          <a href="https://artisanalweb.studio/contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Création d'Expériences Digitales pour professionnels</h1>
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
              <div>
                <div className="topService-card">
                  <h3 className="service-icon">
                    <i class="fa-brands fa-bluesky"></i> Basic
                  </h3>
                  <p className="price">A partir de 250€</p>
                </div>
                <div>
                  <p>
                    Conception et création de la page d'acceuil pour votre
                    business
                  </p>
                  <div className="deliveryrev">
                    <div>
                      <i class="fa-solid fa-truck"></i> livré en 3 jours
                    </div>{" "}
                    <div>
                      <i class="fa-solid fa-arrows-spin"></i> 2 Revisions
                    </div>
                  </div>
                  <div className="bodyService-card">
                    <p>
                      {" "}
                      <i class="fa-solid fa-caret-right"></i> Site fonctionnel
                    </p>
                    <p>
                      {" "}
                      <i class="fa-solid fa-caret-right"></i> 1 page{" "}
                    </p>
                    <p>
                      <i class="fa-solid fa-caret-right"></i> Responsive design
                    </p>{" "}
                    <p>
                      {" "}
                      <i class="fa-solid fa-caret-right"></i> Content upload
                    </p>
                    <p>
                      <i class="fa-solid fa-caret-right"></i> 3
                      plugins/extensions
                    </p>
                    <p>
                      <i class="fa-solid fa-lock"></i> E-commerce functionality
                    </p>
                    <p>
                      <i class="fa-solid fa-lock"></i> 15 products
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-card">
              <div>
                <div>
                  <div className="topService-card">
                    <h3 className="service-icon">
                      <i class="fa-solid fa-plane-up"></i> Standard
                    </h3>
                    <p className="price">A partir de 480€</p>
                  </div>
                </div>{" "}
                <div>
                  <p>
                    Conception et création d'un site web complet de 5 pages pour
                    votre business
                  </p>
                  <div className="deliveryrev">
                    <div>
                      <i class="fa-solid fa-truck"></i> livré en 5 jours
                    </div>{" "}
                    <div>
                      <i class="fa-solid fa-arrows-spin"></i> 3 Revisions
                    </div>
                  </div>
                  <div className="bodyService-card">
                    <p>
                      <i class="fa-solid fa-caret-right"></i> Functional website
                    </p>
                    <p>
                      <i class="fa-solid fa-caret-right"></i> 5 page{" "}
                    </p>
                    <p>
                      <i class="fa-solid fa-caret-right"></i> Responsive design
                    </p>{" "}
                    <p>
                      <i class="fa-solid fa-caret-right"></i> Content upload
                    </p>
                    <p>
                      <i class="fa-solid fa-caret-right"></i> 5
                      plugins/extensions
                    </p>
                    <p>
                      <i class="fa-solid fa-lock "></i> E-commerce functionality
                    </p>
                    <p>
                      <i class="fa-solid fa-lock"></i> 15 products
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-card">
              <div>
                <div className="topService-card">
                  <h3 className="service-icon">
                    <i id="rocket" class="fa-solid fa-shuttle-space"></i>{" "}
                    Premium
                  </h3>
                  <p className="price">A partir de 780€</p>
                </div>
              </div>
              <div>
                <p>
                  Conception et création d'un site ecommerce pour votre business
                </p>
                <div className="deliveryrev">
                  <div>
                    <i class="fa-solid fa-truck"></i> livré en 10 jours
                  </div>{" "}
                  <div>
                    <i class="fa-solid fa-arrows-spin"></i> 5 Revisions
                  </div>
                </div>
                <div className="bodyService-card">
                  <p>
                    <i class="fa-solid fa-caret-right"></i> Functional website
                  </p>
                  <p>
                    <i class="fa-solid fa-caret-right"></i> 10 page{" "}
                  </p>
                  <p>
                    <i class="fa-solid fa-caret-right"></i> Responsive design
                  </p>{" "}
                  <p>
                    <i class="fa-solid fa-caret-right"></i> Content upload
                  </p>
                  <p>
                    <i class="fa-solid fa-caret-right"></i> 10
                    plugins/extensions
                  </p>
                  <p>
                    <i class="fa-solid fa-caret-right"></i> E-commerce
                    functionality
                  </p>
                  <p>
                    <i class="fa-solid fa-caret-right"></i> 15 products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section portfolio">
        <div className="container">
          <h2>Projets Réalisés</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <a
                href="https://sunstudiosite.wordpress.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/src/assets/pictures/Capture d’écran 2024-11-07 153025.jpg"
                  alt="Description of the image"
                  width="420"
                ></img>
                <div className="portfolio-overlay">
                  <h3 className="portfolioH3-overlay">Sun Studios</h3>
                </div>
              </a>
            </div>
            <div className="portfolio-item">
              <a
                href="https://petitspasverslasante.com//"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/src/assets/pictures/Capture d’écran 2024-11-07 152625.jpg"
                  alt="Description of the image"
                  width="410"
                ></img>
                <div className="portfolio-overlay">
                  <h3 className="portfolioH3-overlay">PetitsPasVersLaSanté</h3>
                </div>
              </a>
            </div>{" "}
            <div className="portfolio-item">
              <a
                href="https://perlinette-atelier.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/src/assets/pictures/Capture d’écran 2024-11-07 142525.jpg"
                  alt="Description of the image"
                  width="400"
                ></img>
                <div className="portfolio-overlay">
                  <h3 className="portfolioH3-overlay">Perlinette Atelier</h3>
                </div>
              </a>
            </div>
            <div className="portfolio-item">
              <a
                href="https://gite-haut-verdon.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/src/assets/pictures/Capture d’écran 2024-11-07 151349.jpg"
                  alt="Description of the image"
                  width="420"
                  height="height_in_pixels"
                ></img>
                <div className="portfolio-overlay">
                  <h3 className="portfolioH3-overlay">L’Alto Verdon</h3>
                </div>
              </a>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-overlay">
                <h3 className="portfolioH3-overlay">Coline Marguin</h3>
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

      <div></div>
    </>
  );
};

export default App;
