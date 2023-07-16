import React from "react";
import "./About.css";

function About(props) {
  const { imagen } = props;
  return (
    <div className="about" id="about">
      <div className="about-me-info">
        <h1 className="titulo-about">ABOUT ME</h1>
        <img src={imagen} />
      </div>

      <div className="texto-about">
        <p>
          Lover of electronics and programming languages that strives to be
          better every day and learn a lot from them, a very responsible and
          reliable person who wants to empower through knowledge the different
          business types, leading to make information the company’s most
          important asset. I always seek to improve my Front-end and Back-end
          programming and Databases management with SQL. I have experience with
          several programming languages such as Python, JavaScript, React,
          NodeJs, and I have also worked with data analysis tools such as Knime,
          Power-Bi and Excel.
          <br />
          For the realization of personal and extra work projects I use tools
          like HTML, CSS and I am currently learning React.
        </p>
      </div>
    </div>
  );
}

export default About;
