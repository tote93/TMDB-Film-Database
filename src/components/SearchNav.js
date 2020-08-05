import React, { useState, useEffect } from "react";
import "./styles/SearchNav.css";
import { Link } from "react-router-dom";

function SearchNav() {
  const [sticky, setSticky] = useState(false);
  // Control the scroll of the page
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setSticky(true);
      } else setSticky(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${sticky && "stickyNav"}`}>
      <Link to="/" className="nav__home">
        Home
      </Link>
      <Link to="/search" className="nav__search">
        Search
      </Link>
    </div>
  );
}

export default SearchNav;
