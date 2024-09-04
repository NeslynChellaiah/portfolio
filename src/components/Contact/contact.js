import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import "./contact.css";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <section
      className="min-vh-100 bg-primary p-5 d-flex flex-column justify-content-center align-items-center"
      id="contact"
    >
      <div>
        <h1 className="text-primary">வணக்கம்</h1>
        <h3 className="text-secondary">Shhh... I speak English too.</h3>
        <div className="pt-2">
          <a
            href="https://www.linkedin.com/in/neslyn-chellaiah-p/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="linkedin contact-logo"
            />
          </a>{" "}
          <a href="mailto:neslynchellaiah@gmail.com">
            <FontAwesomeIcon
              icon={faSquareEnvelope}
              className="email contact-logo"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
