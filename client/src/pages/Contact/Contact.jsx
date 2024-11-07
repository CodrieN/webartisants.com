import React from "react";
import "./Contact.css";

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const successMessage = document.querySelector(".success-message");
    const form = document.getElementById("contactForm");

    successMessage.style.display = "block";
    form.reset();

    setTimeout(() => {
      successMessage.style.display = "none";
    }, 5000);
  };

  const handleFocus = (e) => {
    e.target.parentElement.style.transform = "translateY(-2px)";
  };

  const handleBlur = (e) => {
    e.target.parentElement.style.transform = "translateY(0)";
    e.target.style.borderColor = e.target.value.trim() ? "#2ecc71" : "#e74c3c";
  };

  return (
    <div>
      <nav className="nav">
        <a href="https://artisanalweb.studio/" className="logo">
          Artisanal Web Studio
        </a>
        <div className="nav-links">
          <a href="https://artisanalweb.studio/#services">Services</a>
          <a href="https://artisanalweb.studio/#portfolio">Portfolio</a>
          <a href="https://artisanalweb.studio/#testimonials">Testimonials</a>
          <a href="https://artisanalweb.studio/contact">Contact</a>
        </div>
      </nav>

      <div className="contact-container">
        <div className="contact-info">
          <h1>Let's Create Something Beautiful Together</h1>
          <p>
            Ready to bring your craft to the digital world? We're here to help
            you every step of the way.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>hello@artisanalweb.studio</span>
            </div>
            <div className="contact-item">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
              </svg>
              <span>Book a Free Consultation</span>
            </div>
            <div className="contact-item">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>Portland, Oregon</span>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <div className="success-message">Message sent successfully!</div>
          <div className="error-message">
            There was an error sending your message. Please try again.
          </div>

          <form id="contactForm" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>

            <div className="form-group">
              <label htmlFor="business">Business Type</label>
              <select
                id="business"
                name="business"
                required
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                <option value="">Select your craft...</option>
                <option value="woodworking">Woodworking</option>
                <option value="pottery">Pottery/Ceramics</option>
                <option value="jewelry">Jewelry Making</option>
                <option value="textiles">Textiles/Fiber Arts</option>
                <option value="food">Artisanal Food</option>
                <option value="other">Other Craft</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Tell us about your project</label>
              <textarea
                id="message"
                name="message"
                required
                onFocus={handleFocus}
                onBlur={handleBlur}
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <footer>
        <p>
          © 2023 Artisanal Web Studio. Crafting digital experiences with care.
        </p>
      </footer>
    </div>
  );
};

export default Contact;
