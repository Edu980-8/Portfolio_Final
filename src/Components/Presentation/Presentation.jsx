import React from "react";
import "../Presentation/Presentation.css";
import Typed from "typed.js";

function Presentation(props) {
  const { ruta } = props;
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: [
        "Electronic Engineer",
        "Python Developer",
        "Front-End Developer",
        "Data Analyst",
      ],
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="presentation" id="home">
      <div className="foto">
        <img src={ruta} />
      </div>
      <div className="info">
        <h3>Hi, I'm</h3>
        <h1>Eduard Ortegón</h1>
        <h3>
          <span className="multiple-text" ref={el}></span>
        </h3>
      </div>
    </div>
  );
}

export default Presentation;
