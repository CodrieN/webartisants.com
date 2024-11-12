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
  );
};

export default Testimonials;
