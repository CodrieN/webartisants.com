import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>
        Oops! The page you're looking for doesn't exist. You might have typed
        the wrong URL or the page may have been moved.
      </p>
      <Link to="/" className="cta-button">
        Go back to the homepage
      </Link>
    </div>
  );
};

export default NotFound;
