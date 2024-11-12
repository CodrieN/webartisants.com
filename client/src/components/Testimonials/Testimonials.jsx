import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <h2>Histoires d'Artisans</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              "Ils ont parfaitement compris les besoins de mon atelier de
              céramique."
            </p>
            <h3>- Sarah, Artiste Céramiste</h3>
          </div>
          {/* Additional testimonial cards can be added here */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
