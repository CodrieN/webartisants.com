import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section id="services" className="section services">
      <div className="container">
        <h2>Nos Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div>
              <div className="topService-card">
                <h3 className="service-icon">
                  <i className="fa-brands fa-bluesky"></i> Basic
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
                    <i className="fa-solid fa-truck"></i> livré en 3 jours
                  </div>
                  <div>
                    <i className="fa-solid fa-arrows-spin"></i> 2 Revisions
                  </div>
                </div>
                <div className="bodyService-card">
                  <p>
                    <i className="fa-solid fa-caret-right"></i> Site fonctionnel
                  </p>
                  <p>
                    <i className="fa-solid fa-caret-right"></i> 1 page{" "}
                  </p>
                  <p>
                    <i className="fa-solid fa-caret-right"></i> Responsive
                    design
                  </p>
                  <p>
                    <i className="fa-solid fa-caret-right"></i> Content upload
                  </p>
                  <p>
                    <i className="fa-solid fa-caret-right"></i> 3 plugins/
                    extensions
                  </p>
                  <p>
                    <i className="fa-solid fa-lock"></i> E-commerce
                    functionality
                  </p>
                  <p>
                    <i className="fa-solid fa-lock"></i> 15 products
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div>
              <div className="topService-card">
                <h3 className="service-icon">
                  <i className="fa-solid fa-plane-up"></i> Standard
                </h3>
                <p className="price">A partir de 480€</p>
              </div>
              <div>
                <p>
                  Conception et création d'un site web complet de 5 pages pour
                  votre business
                </p>
                <div className="deliveryrev">
                  <div>
                    <i className="fa-solid fa-truck"></i> livré en 5 jours
                  </div>
                  <div>
                    <i className="fa-solid fa-arrows-spin"></i> 3 Revisions
                  </div>
                </div>
                <div className="bodyService-card">
                  <p>
                    <i className="fa-solid fa-caret-right"></i> Functional
                    website
                  </p>
                  <p>
                    <i className="fa-solid fa-caret-right"></i> 5 pages
                  </p>
                  <p>
                    <i className="fa-solid fa-caret-right"></i> Responsive
                    design
                  </p>
                  <p>
                    <i className="fa-solid fa-caret-right"></i> Content upload
                  </p>
                  <p>
                    <i className="fa-solid fa-caret-right"></i> 5 plugins/
                    extensions
                  </p>
                  <p>
                    <i className="fa-solid fa-lock"></i> E-commerce
                    functionality
                  </p>
                  <p>
                    <i className="fa-solid fa-lock"></i> 15 products
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div>
              <div className="topService-card">
                <h3 className="service-icon">
                  <i id="rocket" className="fa-solid fa-shuttle-space"></i>{" "}
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
                  <i className="fa-solid fa-truck"></i> livré en 10 jours
                </div>
                <div>
                  <i className="fa-solid fa-arrows-spin"></i> 5 Revisions
                </div>
              </div>
              <div className="bodyService-card">
                <p>
                  <i className="fa-solid fa-caret-right"></i> Functional website
                </p>
                <p>
                  <i className="fa-solid fa-caret-right"></i> 10 pages
                </p>
                <p>
                  <i className="fa-solid fa-caret-right"></i> Responsive design
                </p>
                <p>
                  <i className="fa-solid fa-caret-right"></i> Content upload
                </p>
                <p>
                  <i className="fa-solid fa-caret-right"></i> 10 plugins/
                  extensions
                </p>
                <p>
                  <i className="fa-solid fa-caret-right"></i> E-commerce
                  functionality
                </p>
                <p>
                  <i className="fa-solid fa-caret-right"></i> 15 products
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
