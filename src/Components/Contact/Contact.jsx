import React from "react";
import "./Contact.css";
import Whatsapp from '../../Images/whatsapp.png'; 
import Github from '../../Images/github.png'; 
import Linkedin from '../../Images/linkedin.png'; 


function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-headings">
        <h1>KEEP IN TOUCH</h1>
        <div className="container-redes">
          <a href="https://wa.me/573105620803" target="__blank"><img className="logos" src={Whatsapp} alt="Logo de Whatsapp"></img></a>
          <a href="https://github.com/Edu980-8" target="__blank"><img className="logos" src={Github} alt="Logo de Whatsapp"></img></a>
          <a href="https://www.linkedin.com/in/eduardortegon/" target="__blank"><img className="logos" src={Linkedin} alt="Logo de Whatsapp"></img></a>
        </div>
     </div>

      <div className="container-contact">
        <div classNames="contact-form">
          <h4>Wanna a solution for hardware or software?</h4>
          <form
            className="form"
            action="https://formsubmit.co/eduardortegon2398@gmail.com"
            method="POST"
          >
            <input className="Nombre" type="text" name="Nombre" placeholder="Name" required />
            <input className="Email" type="email" name="Email" placeholder="Your e-mail" required />
            <textarea
              className="Message"
              name="Contenido"
              placeholder="Place your message here!!!"
              required
            ></textarea>
            
          </form>
        </div>
        <button class="btn-submit">Send message</button>
      </div>
    </div>
  );
}

export default Contact;
