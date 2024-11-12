import React from "react";

const Portfolio = () => {
  const projects = [
    {
      href: "https://sunstudiosite.wordpress.com/",
      imgSrc: "/src/assets/pictures/Capture d’écran 2024-11-07 153025.jpg",
      alt: "Description of the image",
      width: 420,
      title: "Sun Studios",
    },
    {
      href: "https://petitspasverslasante.com/",
      imgSrc: "/src/assets/pictures/Capture d’écran 2024-11-07 152625.jpg",
      alt: "Description of the image",
      width: 410,
      title: "PetitsPasVersLaSanté",
    },
    {
      href: "https://perlinette-atelier.com/",
      imgSrc: "/src/assets/pictures/Capture d’écran 2024-11-07 142525.jpg",
      alt: "Description of the image",
      width: 400,
      title: "Perlinette Atelier",
    },
    {
      href: "https://gite-haut-verdon.com/",
      imgSrc: "/src/assets/pictures/Capture d’écran 2024-11-07 151349.jpg",
      alt: "Description of the image",
      width: 420,
      height: 420, // Replace with appropriate height if needed
      title: "L’Alto Verdon",
    },
    {
      href: "#", // No link for this item
      imgSrc: "",
      alt: "",
      title: "Coline Marguin",
    },
  ];

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <h2>Projets Réalisés</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className="portfolio-item" key={index}>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.imgSrc}
                    alt={project.alt}
                    width={project.width}
                    height={project.height || "auto"} // Ensure height is handled
                  />
                  <div className="portfolio-overlay">
                    <h3 className="portfolioH3-overlay">{project.title}</h3>
                  </div>
                </a>
              ) : (
                <div className="portfolio-overlay">
                  <h3 className="portfolioH3-overlay">{project.title}</h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
