import React, { useEffect } from 'react';

import "./Navbar.css";

function handleLinkClick(e, link) {
  e.preventDefault();
  const targetEl = document.querySelector(link.getAttribute("href"));
  const targetPos = targetEl.offsetTop -  window.innerHeight * 0.168; // 16.8 es la altura del navbar
  window.scrollTo({
    top: targetPos,
    behavior: "smooth",
  });
}

function Navbar() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => handleLinkClick(e, link));
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", (e) => handleLinkClick(e, link));
      });
    };
  }, []);
  return (
    <div className="navbar">
      <div className="navbar-logo">EO</div>
      <div className="lista">
        <ul >
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
